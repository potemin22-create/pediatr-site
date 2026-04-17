"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/reviews";
import Image from "next/image";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(index * perPage, index * perPage + perPage);

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-mint-600 font-semibold uppercase text-sm tracking-widest mb-3">Отзывы</p>
          <h2 className="section-title">Что говорят родители</h2>
          <p className="section-subtitle">
            Более 5000 семей доверяют своих детей Ирине Викторовне.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visible.map((r) => (
            <div key={r.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-mint-100 flex-shrink-0">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{r.name}</div>
                  {r.childAge && <div className="text-xs text-gray-400">{r.childAge}</div>}
                </div>
              </div>
              <StarRating rating={r.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-3">{r.text}</p>
              <div className="text-xs text-gray-400">{r.date}</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-mint-500 hover:text-mint-500 disabled:opacity-30 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-mint-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((i) => Math.min(pages - 1, i + 1))}
            disabled={index === pages - 1}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-mint-500 hover:text-mint-500 disabled:opacity-30 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
