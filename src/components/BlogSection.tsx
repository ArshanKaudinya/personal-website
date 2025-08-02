type Post = { title: string; href: string };

const posts: Post[] = [
  { title: "Shipping an MVP in 3 Weeks", href: "/blog/mvp-3-weeks" },
  { title: "Bootstrapping Promptly: Lessons Learned", href: "/blog/bootstrapping" }
];

export default function BlogSection() {
  if (!posts.length) return null;
  return (
    <section className="mt-16 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-8">Blog</h2>
      <ul className="space-y-4">
        {posts.slice(0, 3).map(({ title, href }) => (
          <li key={title}>
            <a
              href={href}
              className="text-gray-300 hover:text-accent transition"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
