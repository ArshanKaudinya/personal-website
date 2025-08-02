import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-8 mt-8 mb-8">
       <Image
          src="https://vsqruzzlzbuyzgatbzeo.supabase.co/storage/v1/object/sign/misc/pfp.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGNiZDIzMi1iMjhhLTQwZDktOGYxNS1iNDMxMDQxMTJiNWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtaXNjL3BmcC5qcGciLCJpYXQiOjE3NTQxMTgwNTEsImV4cCI6MTg0ODcyNjA1MX0.eavAC-EHwBiy4_--Gw9_cpwJRvvKf0IoOzy4WH45mRE"
          alt="Arshan Kaudinya"
          width={160}
          height={160}
          className="rounded-full border-2 border-accent object-cover"
          priority
        />
      <div className="flex flex-col md:mt-1 items-center md:items-start gap-1">
        <h1 className="text-3xl md:text-5xl font-grotesk-400 font-bold">
          Arshan&nbsp;Kaudinya
        </h1>
        <p className="text-accent text-lg md:text-lg">
          Building PromptlyAI&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;CS 28&apos;&nbsp;
        </p>
        <p className="max-w-xl text-center md:text-left text-gray-400">
          Relentless tech founder and engineer turning his vision into products.
        </p>
      </div>
    </section>
  );
}
