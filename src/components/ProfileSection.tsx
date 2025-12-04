import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="flex flex-col items-center md:flex-row md:items-left md:justify-left gap-8 mt-8 mb-8">
       <Image
          src="/pfp.jpg"
          alt="Arshan Kaudinya"
          width={160}
          height={160}
          className="rounded-md border-2 border-accent object-cover"
          priority
        />
      <div className="flex flex-col md:mt-1 items-center md:items-start gap-1">
        <h1 className="text-3xl md:text-5xl font-grotesk-400 font-bold">
          Arshan&nbsp;Kaudinya
        </h1>
        <p className="text-accent text-lg md:text-lg">
          Founder & Student&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;CS 28&apos;&nbsp;
        </p>
        <p className="max-w-xl text-center md:text-left text-gray-400">
          Completing the Incomplete. 
        </p>
      </div>
    </section>
  );
}
