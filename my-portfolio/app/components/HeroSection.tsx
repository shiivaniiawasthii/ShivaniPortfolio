import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Shivani Awasthi</span>
        </h1>
        <p className="text-lg text-gray-600">
          A passionate Frontend Developer crafting modern, user-friendly web experiences.
        </p>
        <Link
          href="/projects"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          View My Work
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
