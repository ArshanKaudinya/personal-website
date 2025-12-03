"use client";

import Link from "next/link";
import { CaretRight } from "phosphor-react";

type BlogItem = {
  slug: string;
  title: string;
  subtitle?: string;
};

const BLOGS: BlogItem[] = [
  {
    slug: "building-promptly",
    title: "Building Promptly",
    subtitle: "Building a SaaS in College."
  },
];

export default function Blogs() {
  return (
    <section className="mx-auto mt-10 mb-8 max-w-3xl">
        <h2 className="text-xl font-semibold mb-4 ml-[0.1rem]">
          Blog
        </h2>

        <div className="space-y-3">
          {BLOGS.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center justify-between
                rounded-md px-4 py-3
              hover:bg-white/2
                border border-white/10 hover:border-white/20
                transition-colors
              "
            >
              <div className="flex-1">
                <p className="text-sm md:text-base font-medium text-gray-200 group-hover:underline">
                  {post.title}
                </p>
                {post.subtitle && (
                  <p className="mt-0.5 text-xs md:text-sm text-gray-400">
                    {post.subtitle}
                  </p>
                )}
              </div>

              <CaretRight className="ml-3 h-4 w-4 opacity-60 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
    </section>
  );
}
