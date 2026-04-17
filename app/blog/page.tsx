import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог педиатра | Потёмина Ирина Викторовна",
  description: "Полезные статьи о детском здоровье, питании, развитии и профилактике болезней от педиатра с 40-летним стажем.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-mint-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-mint-600 font-medium mb-6 hover:text-mint-700">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-3">
            Блог педиатра
          </h1>
          <p className="text-gray-500 text-lg">
            Советы и статьи о детском здоровье от Ирины Викторовны Потёминой
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group grid md:grid-cols-5 gap-6 items-start">
              <Link href={`/blog/${post.slug}`} className="md:col-span-2 block rounded-2xl overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-mint-100 text-mint-700 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-mint-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-mint-600 font-semibold text-sm hover:text-mint-700"
                >
                  Читать полностью →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
