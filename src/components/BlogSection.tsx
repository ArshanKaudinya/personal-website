"use client";

import Link from "next/link";
import { ArrowRight } from "phosphor-react";

type BlogItem = {
  slug: string;
  title: string;
  subtitle?: string;
};

const BLOGS: BlogItem[] = [
  {
    slug: "building-promptly",
    title: "building promptly",
    subtitle: "building a saas in college."
  },
  {
    slug: "huffman-encoder",
    title: "why i built a huffman encoder with rust from scratch (coming soon)",
    subtitle: "because textbook learning is boring."
  }
];

export default function Blogs() {
  return (
    <section className="mx-auto mb-16 max-w-3xl">
        <h2 className="text-2xl font-grotesk font-bold mb-6 tracking-tight flex items-center gap-2">
          <span className="text-[#6c6499]">&gt;</span> writing
        </h2>

        <div className="space-y-0">
          {BLOGS.map((post) => {
            const isComingSoon = post.slug === "huffman-encoder";

            if (isComingSoon) {
              return (
                <div
                  key={post.slug}
                  className="
                    flex items-center justify-between
                    py-4 border-b border-gray-800
                    cursor-default
                    transition-all duration-300
                  "
                >
                  <div className="flex-1">
                    <p className="text-base font-medium text-gray-500 transition-colors duration-300">
                      {post.title}
                    </p>
                    {post.subtitle && (
                      <p className="mt-1 text-sm text-gray-500">
                        {post.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center justify-between
                  py-4 border-b border-gray-800
                  hover:border-[#6c6499]
                  transition-all duration-300
                "
              >
                <div className="flex-1">
                  <p className="text-base font-medium text-gray-200 group-hover:text-[#6c6499] transition-colors duration-300">
                    {post.title}
                  </p>
                  {post.subtitle && (
                    <p className="mt-1 text-sm text-gray-500">
                      {post.subtitle}
                    </p>
                  )}
                </div>

                <ArrowRight className="ml-3 h-5 w-5 text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#6c6499]" />
              </Link>
            );
          })}
        </div>
    </section>
  );
}
