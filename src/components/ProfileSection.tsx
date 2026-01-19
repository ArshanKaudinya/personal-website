import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="flex flex-col md:flex-row items-start gap-10 mb-12">
       <Image
          src="/pfp.jpg"
          alt="Arshan Kaudinya"
          width={140}
          height={140}
          className="rounded-sm object-cover transition-all duration-300"
          priority
        />
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl md:text-6xl font-grotesk font-bold tracking-tight leading-none">
          arshan kaudinya
        </h1>
        <p className="text-gray-400 text-base md:text-lg font-mono">
          founder & student | cs 28&apos;
        </p>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
          completing the incomplete.
        </p>
      </div>
    </section>
  );
}
