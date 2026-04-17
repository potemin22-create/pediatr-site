import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPreview() {
  const recent = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <p className="text-mint-600 font-semibold uppercase text-sm tracking-widest mb-3">Блог</p>
            <h2 className="section-title mb-0">Советы и статьи для родителей</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-mint-600 font-semibold hover:text-mint-700 mt-4 md:mt-0"
          >
            Все статьи <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recent.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="rounded-2xl overflow-hidden mb-4 aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-mint-100 text-mint-700 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-mint-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="text-xs text-gray-400 mt-3">{post.date}</div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
