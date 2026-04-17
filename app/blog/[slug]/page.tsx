import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Потёмина И.В.`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero image */}
      <div className="h-72 md:h-96 relative overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-3xl mx-auto px-4 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-white/80 text-xs">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>
          <h1 className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-mint-600 font-medium hover:text-mint-700">
            <ArrowLeft className="w-4 h-4" /> Все статьи
          </Link>
          <span className="flex items-center gap-1 text-sm text-gray-400">
            <Calendar className="w-4 h-4" /> {post.date}
          </span>
        </div>

        {/* Content rendered as prose */}
        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:font-serif prose-headings:text-gray-800
            prose-a:text-mint-600 prose-strong:text-gray-800
            prose-p:leading-relaxed prose-li:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />

        {/* Author block */}
        <div className="mt-12 p-6 bg-mint-50 rounded-2xl flex gap-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80"
            alt="Потёмина И.В."
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <div className="font-semibold text-gray-800">Потёмина Ирина Викторовна</div>
            <div className="text-sm text-gray-500">Педиатр, врач первой категории, 40 лет опыта</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link href="/#booking" className="btn-primary inline-block">
            Записаться на приём
          </Link>
        </div>

        {/* Other posts */}
        {others.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">Читайте также</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group">
                  <div className="rounded-xl overflow-hidden aspect-video mb-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-mint-600 transition-colors text-sm leading-snug">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function markdownToHtml(md: string): string {
  return md
    .trim()
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^\| (.+) \|$/gm, (_, row) => {
      const cells = row.split(" | ").map((c: string) => `<td class="border border-gray-200 px-3 py-2 text-sm">${c}</td>`).join("");
      return `<tr>${cells}</tr>`;
    })
    .replace(/^(\|[-| ]+\|)$/gm, "")
    .replace(/(<tr>[\s\S]+?<\/tr>)/g, '<table class="w-full border-collapse my-4">$1</table>')
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]+?<\/li>)/g, "<ul class='list-disc list-inside space-y-1 my-3'>$1</ul>")
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hultpo])/gm, "")
    .replace(/^(.+)$/gm, (line) =>
      line.startsWith("<") ? line : `<p>${line}</p>`
    );
}
