import {
  Article,
  P,
  Lead,
  H2,
  Em,
  Mark,
  Bullets,
  Steps,
  Fig,
  ExternalLink,
} from "@/components/Article";

export default function HuffmanEncoder() {
  return (
    <Article
      title={
        <>
          Why I built a{" "}
          <span style={{ fontStyle: "italic" }}>Huffman encoder</span> from
          scratch
        </>
      }
      date="apr 2026"
      read="12 min"
    >
      <Lead firstLetter="I">
        first learned about Huffman coding in a data structures course. The
        concept made sense on paper: count symbol frequencies, build a binary
        tree, assign shorter codes to more frequent symbols. I could walk through
        the algorithm on a whiteboard, trace the tree by hand, and explain why it
        produces an optimal prefix-free code. But I never actually felt like I
        understood it.{" "}
        <Em>
          There is a difference between explaining an algorithm and knowing what
          it feels like to watch your own code compress real data.
        </Em>
      </Lead>

      <P>
        That gap kept nagging at me. I wanted to go beyond compression too. What
        happens after you shrink a file? How does compressed data actually move
        across a network? What happens when packets get lost, arrive out of
        order, or show up late? I wanted to build the whole pipeline: compress
        the data, break it into packets, simulate an unreliable network, and
        reassemble everything on the other side. Not a toy demo, but something
        with real{" "}
        <Mark>binary protocols, checksums, error handling, and concurrency</Mark>.
      </P>

      <P>
        So I built <Mark>encoder-sim</Mark>: an educational file transfer system
        written entirely in Rust. It compresses files using Huffman coding,
        transmits them through a simulated network with configurable impairments,
        and reconstructs the original data on the receiving end. The whole thing
        runs as a <Mark>five-thread concurrent pipeline</Mark> connected by
        bounded channels.
      </P>

      <H2>Why Rust</H2>
      <P mt={18}>
        I chose Rust because this project is fundamentally about bits, bytes, and
        memory layout. I did not want a garbage collector quietly managing things
        behind the scenes. I wanted to feel every allocation, every ownership
        transfer, every borrow. Rust&rsquo;s{" "}
        <Mark>ownership model and borrow checker</Mark> force you to think about
        data lifetimes in a way that other languages let you ignore.{" "}
        <Em>
          When the compiler fights you, it is usually teaching you something
          about your own design.
        </Em>{" "}
        This project was as much about learning Rust properly as it was about
        compression.
      </P>

      <H2>Building the compression engine</H2>
      <P mt={18}>
        The encoder itself starts with <Mark>frequency analysis</Mark>. You scan
        the input data, count how often each byte value appears, and feed those
        frequencies into a <Mark>min-heap to build the Huffman tree</Mark>. The
        two lowest-frequency nodes get merged into a parent, and you repeat until
        a single root remains. From there, you walk the tree to compute code
        lengths, then convert everything into{" "}
        <Mark>canonical Huffman codes</Mark> so the decoder only needs the
        lengths, not the full tree structure.
      </P>

      <P>
        The tricky part was the <Mark>bit-level I/O</Mark>. Huffman codes are
        variable length: some are 2 bits, others are 7. You cannot just write
        bytes. I built a BitWriter that accumulates bits in a buffer and flushes
        complete bytes, and a BitReader that tracks position down to the
        individual bit. Getting the MSB-first alignment right, handling the
        padding on the final byte, making sure the reader and writer agreed on the
        exact same bit ordering: that took longer than the Huffman tree itself.
        But when I ran the first round-trip test and the decoded output matched
        the original byte-for-byte,{" "}
        <Em>
          that was the moment the algorithm stopped being textbook material and
          became something I actually owned.
        </Em>
      </P>

      <Fig
        src="/encoder-sim/huffman_tree.jpeg"
        alt="Huffman tree and encoding visualization"
        height={320}
      />

      <H2>Framing, packets, and the hostile network</H2>
      <P mt={18}>
        Each compressed chunk gets wrapped in a{" "}
        <Mark>binary frame with a 26-byte header</Mark> that carries everything
        the receiver needs to validate and reconstruct the data:
      </P>
      <Bullets
        items={[
          "magic bytes to identify the frame format",
          "chunk ID, raw length, metadata length, and payload length",
          <>
            a <Mark>CRC32 checksum</Mark> so corruption is caught immediately
          </>,
        ]}
      />

      <P>
        The frame is then sliced into MTU-sized packets, each with its own header
        tracking which chunk it belongs to and its position in the sequence. This
        is where the project stopped being a compression exercise and started
        feeling like real systems work.
      </P>

      <P>
        The network simulator sits in the middle of the pipeline and does
        everything a real network does to make your life harder. It simulates
        four kinds of impairment:
      </P>
      <Bullets
        items={[
          <>
            <strong>latency</strong> that delays every packet by a base amount
          </>,
          <>
            <strong>jitter</strong> that randomizes the delay, so packets sent
            back-to-back can arrive in reverse order
          </>,
          <>
            <strong>packet loss</strong> that randomly drops packets entirely
          </>,
          <>
            <strong>reordering</strong> that shuffles packets within a sliding
            window
          </>,
        ]}
      />

      <P>
        Packets go into a priority queue keyed by their computed delivery time.
        All randomness is seeded with <Mark>ChaCha8</Mark>, so every run is fully
        deterministic and reproducible. Same seed, same chaos, same results.
      </P>

      <Fig
        src="/encoder-sim/pipeline.jpeg"
        alt="Five-thread concurrent pipeline architecture"
        height={400}
      />

      <P>
        On the receiving end, the <Mark>reassembler</Mark> collects packets and
        buffers them until all fragments of a chunk have arrived. It handles
        out-of-order delivery by holding onto later chunks while waiting for
        earlier ones, and it enforces timeouts so a single lost packet does not
        stall the entire pipeline. Getting the in-order delivery guarantee right,
        where chunk 2 waits in a buffer until chunks 0 and 1 have been emitted,
        was one of those problems that sounds simple until you are debugging it at
        midnight.
      </P>

      <H2>Five threads, one pipeline</H2>
      <P mt={18}>
        The whole system runs as five threads connected by{" "}
        <Mark>bounded crossbeam channels</Mark>:
      </P>
      <Steps
        items={[
          <>
            <strong>chunker</strong> splits the input and compresses each chunk
            with Huffman
          </>,
          <>
            <strong>packetizer</strong> fragments each frame into MTU-sized
            packets
          </>,
          <>
            <strong>network simulator</strong> applies latency, jitter, loss, and
            reordering
          </>,
          <>
            <strong>receiver</strong> reassembles packets back into chunk frames
            in order
          </>,
          <>
            <strong>decoder</strong> decompresses and writes the final output
          </>,
        ]}
      />

      <P>
        Bounded channels give you natural backpressure: if the receiver falls
        behind, the network simulator blocks on send, which backs up the
        packetizer, which backs up the chunker. No thread can overwhelm another.{" "}
        <Em>
          Rust made the concurrency surprisingly manageable. The ownership system
          prevents data races at compile time, so the bugs I hit were logical
          ordering issues, not memory corruption.
        </Em>
      </P>

      <P>
        I structured the project as a{" "}
        <Mark>Rust workspace with a core library and a thin application binary</Mark>
        . The core crate contains all the reusable logic: bit I/O, Huffman codec,
        framing, packetization, network simulation, reassembly, and metrics. The
        app crate handles CLI parsing, file I/O, and pipeline orchestration. This
        split made testing straightforward. Every module has unit tests, and the
        integration tests run complete compress-transmit-reassemble-decompress
        round trips.
      </P>

      <H2>What building from scratch actually teaches you</H2>
      <P mt={18}>
        The project taught me more about compression, networking, and concurrency
        than any course did. Not because the courses were bad, but because
        building forces you to confront every edge case that a lecture can skip
        over. What happens when two symbols have the same frequency? What if the
        last byte of compressed data has padding bits? What if a packet arrives
        for a chunk that already timed out?{" "}
        <Em>
          These are the questions you only discover when you are the one writing
          the code, and they are exactly the questions that make you actually
          understand the system.
        </Em>
      </P>

      <P>
        <Em>
          Check it out:{" "}
          <ExternalLink href="https://github.com/ArshanKaudinya/Huffman-encoder-sim">
            github.com/ArshanKaudinya/Huffman-encoder-sim
          </ExternalLink>
        </Em>
      </P>
    </Article>
  );
}
