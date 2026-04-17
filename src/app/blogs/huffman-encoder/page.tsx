"use client";

import Image from "next/image";
import Link from "next/link";

export default function HuffmanEncoder() {
  return (
    <article
      className="px-8 md:px-0 max-w-2xl mx-auto text-md pt-18 pb-15 scroll-smooth text-gray-300 leading-8"
      style={{ fontFamily: "Lora, serif" }}
    >
      {/* <div className="w-full h-32 md:h-48 relative rounded-xl overflow-hidden mb-12">
        <Image
          src="/encoder-sim/banner.jpg"
          alt="Encoder Sim Banner"
          fill
          className="object-cover"
          priority
        />
      </div> */}

      <h1 className="text-5xl font-bold mb-3 text-gray-100">
        Why I Built a{" "}
        <span className="italic">Huffman Encoder</span> from Scratch
      </h1>
      <p className="text-gray-400 mb-12 text-base">April 2026</p>

      <p className="mb-6">
        I first learned about Huffman coding in a data structures course. The
        concept made sense on paper: count symbol frequencies, build a binary
        tree, assign shorter codes to more frequent symbols. I could walk
        through the algorithm on a whiteboard, trace the tree by hand, and
        explain why it produces an optimal prefix-free code. But I never
        actually felt like I understood it.{" "}
        <span className="italic">
          There is a difference between explaining an algorithm and knowing
          what it feels like to watch your own code compress real data.
        </span>
      </p>

      <p className="mb-6">
        That gap kept nagging at me. I wanted to go beyond compression too. What
        happens after you shrink a file? How does compressed data actually move
        across a network? What happens when packets get lost, arrive out of
        order, or show up late? I wanted to build the whole pipeline: compress
        the data, break it into packets, simulate an unreliable network, and
        reassemble everything on the other side. Not a toy demo, but something
        with real{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          binary protocols, checksums, error handling, and concurrency
        </span>
        .
      </p>

      <p className="mb-6">
        So I built{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          encoder-sim
        </span>
        : an educational file transfer system written entirely in Rust. It
        compresses files using Huffman coding, transmits them through a
        simulated network with configurable impairments, and reconstructs the
        original data on the receiving end. The whole thing runs as a{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          five-thread concurrent pipeline
        </span>{" "}
        connected by bounded channels.
      </p>

      <h2 className="text-2xl font-bold mt-14 mb-6 text-gray-100">
        why rust
      </h2>

      <p className="md:mb-6">
        I chose Rust because this project is fundamentally about bits, bytes,
        and memory layout. I did not want a garbage collector quietly managing
        things behind the scenes. I wanted to feel every allocation, every
        ownership transfer, every borrow. Rust&apos;s{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          ownership model and borrow checker
        </span>{" "}
        force you to think about data lifetimes in a way that other languages
        let you ignore.{" "}
        <span className="italic">
          When the compiler fights you, it is usually teaching you something
          about your own design.
        </span>{" "}
        This project was as much about learning Rust properly as it was about
        compression.
      </p>

      <h2 className="text-2xl font-bold mt-14 mb-6 text-gray-100">
        building the compression engine
      </h2>

      <p className="mb-6">
        The encoder itself starts with{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          frequency analysis
        </span>
        . You scan the input data, count how often each byte value appears, and
        feed those frequencies into a{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          min-heap to build the Huffman tree
        </span>
        . The two lowest-frequency nodes get merged into a parent, and you
        repeat until a single root remains. From there, you walk the tree to
        compute code lengths, then convert everything into{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          canonical Huffman codes
        </span>{" "}
        so the decoder only needs the lengths, not the full tree structure.
      </p>

      <p className="mb-6">
        The tricky part was the{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          bit-level I/O
        </span>
        . Huffman codes are variable length: some are 2 bits, others are 7. You
        cannot just write bytes. I built a BitWriter that accumulates bits in a
        buffer and flushes complete bytes, and a BitReader that tracks position
        down to the individual bit. Getting the MSB-first alignment right,
        handling the padding on the final byte, making sure the reader and writer
        agreed on the exact same bit ordering: that took longer than the Huffman
        tree itself. But when I ran the first round-trip test and the decoded
        output matched the original byte-for-byte,{" "}
        <span className="italic">
          that was the moment the algorithm stopped being textbook material and
          became something I actually owned.
        </span>
      </p>

      {/* Huffman Tree Image */}
      <div className="w-full h-80 relative rounded-xl overflow-hidden md:my-6">
        <Image
          src="/encoder-sim/huffman_tree.jpeg"
          alt="Huffman tree and encoding visualization"
          fill
          className="object-contain"
        />
      </div>

      <h2 className="text-2xl font-bold mt-14 mb-6 text-gray-100">
        framing, packets, and the hostile network
      </h2>

      <p className="mb-6">
        Each compressed chunk gets wrapped in a{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          binary frame with a 26-byte header
        </span>{" "}
        that carries everything the receiver needs to validate and reconstruct
        the data:
      </p>

      <ul className="mb-6 space-y-1.5 pl-1">
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] mt-2 text-[10px]">&#9656;</span>
          <span>magic bytes to identify the frame format</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] mt-2 text-[10px]">&#9656;</span>
          <span>chunk ID, raw length, metadata length, and payload length</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] mt-2 text-[10px]">&#9656;</span>
          <span>a{" "}
            <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
              CRC32 checksum
            </span>{" "}
            so corruption is caught immediately
          </span>
        </li>
      </ul>

      <p className="mb-6">
        The frame is then sliced into MTU-sized packets, each with its own
        header tracking which chunk it belongs to and its position in the
        sequence. This is where the project stopped being a compression exercise
        and started feeling like real systems work.
      </p>

      <p className="mb-6">
        The network simulator sits in the middle of the pipeline and does
        everything a real network does to make your life harder. It simulates
        four kinds of impairment:
      </p>

      <ul className="mb-6 space-y-1.5 pl-1">
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] mt-2 text-[10px]">&#9656;</span>
          <span>
            <span className="text-gray-100">latency</span>{" "}
            that delays every packet by a base amount
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] mt-2 text-[10px]">&#9656;</span>
          <span>
            <span className="text-gray-100">jitter</span>{" "}
            that randomizes the delay, so packets sent back-to-back can arrive
            in reverse order
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] mt-2 text-[10px]">&#9656;</span>
          <span>
            <span className="text-gray-100">packet loss</span>{" "}
            that randomly drops packets entirely
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] mt-2 text-[10px]">&#9656;</span>
          <span>
            <span className="text-gray-100">reordering</span>{" "}
            that shuffles packets within a sliding window
          </span>
        </li>
      </ul>

      <p className="mb-6">
        Packets go into a priority queue keyed by their computed delivery time.
        All randomness is seeded with{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          ChaCha8
        </span>
        , so every run is fully deterministic and reproducible. Same seed, same
        chaos, same results.
      </p>

      {/* Pipeline Image */}
      <div className="w-full h-100 relative rounded-xl overflow-hidden md:my-6">
        <Image
          src="/encoder-sim/pipeline.jpeg"
          alt="Five-thread concurrent pipeline architecture"
          fill
          className="object-contain"
        />
      </div>

      <p className="mb-6">
        On the receiving end, the{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          reassembler
        </span>{" "}
        collects packets and buffers them until all fragments of a chunk have
        arrived. It handles out-of-order delivery by holding onto later chunks
        while waiting for earlier ones, and it enforces timeouts so a single
        lost packet does not stall the entire pipeline. Getting the in-order
        delivery guarantee right, where chunk 2 waits in a buffer until chunks
        0 and 1 have been emitted, was one of those problems that sounds simple
        until you are debugging it at midnight.
      </p>

      <h2 className="text-2xl font-bold mt-14 mb-6 text-gray-100">
        five threads, one pipeline
      </h2>

      <p className="mb-6">
        The whole system runs as five threads connected by{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          bounded crossbeam channels
        </span>
        :
      </p>

      <ol className="mb-6 space-y-1.5 pl-1">
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] font-bold text-sm mt-1">1.</span>
          <span>
            <span className="text-gray-100">chunker</span>{" "}
            splits the input and compresses each chunk with Huffman
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] font-bold text-sm mt-1">2.</span>
          <span>
            <span className="text-gray-100">packetizer</span>{" "}
            fragments each frame into MTU-sized packets
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] font-bold text-sm mt-1">3.</span>
          <span>
            <span className="text-gray-100">network simulator</span>{" "}
            applies latency, jitter, loss, and reordering
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] font-bold text-sm mt-1">4.</span>
          <span>
            <span className="text-gray-100">receiver</span>{" "}
            reassembles packets back into chunk frames in order
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#6c6499] font-bold text-sm mt-1">5.</span>
          <span>
            <span className="text-gray-100">decoder</span>{" "}
            decompresses and writes the final output
          </span>
        </li>
      </ol>

      <p className="mb-6">
        Bounded channels give you natural backpressure: if the receiver falls
        behind, the network simulator blocks on send, which backs up the
        packetizer, which backs up the chunker. No thread can overwhelm another.{" "}
        <span className="italic">
          Rust made the concurrency surprisingly manageable. The ownership
          system prevents data races at compile time, so the bugs I hit were
          logical ordering issues, not memory corruption.
        </span>
      </p>

      <p className="mb-6">
        I structured the project as a{" "}
        <span className="underline underline-offset-4 decoration-slate-500/70 text-gray-100">
          Rust workspace with a core library and a thin application binary
        </span>
        . The core crate contains all the reusable logic: bit I/O, Huffman
        codec, framing, packetization, network simulation, reassembly, and
        metrics. The app crate handles CLI parsing, file I/O, and pipeline
        orchestration. This split made testing straightforward. Every module has
        unit tests, and the integration tests run complete
        compress-transmit-reassemble-decompress round trips.
      </p>

      <h2 className="text-2xl font-bold mt-14 mb-6 text-gray-100">
        what building from scratch actually teaches you
      </h2>

      <p className="mb-6">
        The project taught me more about compression, networking, and
        concurrency than any course did. Not because the courses were bad, but
        because building forces you to confront every edge case that a lecture
        can skip over. What happens when two symbols have the same frequency?
        What if the last byte of compressed data has padding bits? What if a
        packet arrives for a chunk that already timed out?{" "}
        <span className="italic">
          These are the questions you only discover when you are the one writing
          the code, and they are exactly the questions that make you actually
          understand the system.
        </span>
      </p>

      <p className="italic text-lg mb-6">
        Check it out:{" "}
        <Link
          href="https://github.com/ArshanKaudinya/Huffman-encoder-sim"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          github.com/ArshanKaudinya/Huffman-encoder-sim
        </Link>
      </p>
    </article>
  );
}
