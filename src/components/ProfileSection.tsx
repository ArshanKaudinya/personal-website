import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="flex flex-col items-left md:flex-row md:items-center md:justify-left gap-8 mt-8 mb-8">
       <Image
          src="https://vsqruzzlzbuyzgatbzeo.supabase.co/storage/v1/object/sign/misc/pfp(1).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGNiZDIzMi1iMjhhLTQwZDktOGYxNS1iNDMxMDQxMTJiNWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtaXNjL3BmcCgxKS5qcGciLCJpYXQiOjE3NTQyMDgxNTUsImV4cCI6MTg0ODgxNjE1NX0.fH8zw4ZkbG7DQCFFGh36qoic6UKR6cJawRMIuavxoM8"
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
