"use client";
import { useState } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "О враче: 40 лет в педиатрии",
    description: "Ирина Викторовна рассказывает о своём пути в медицине и принципах работы с детьми и родителями.",
    thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=640&q=80",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Советы родителям: первые симптомы ОРВИ",
    description: "Как распознать первые признаки болезни у ребёнка и когда нужно срочно обратиться к врачу.",
    thumbnail: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=640&q=80",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Как подготовиться к приёму педиатра",
    description: "Практические советы: что взять с собой, как успокоить ребёнка перед визитом к врачу.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&q=80",
  },
];

function VideoCard({ video }: { video: typeof videos[number] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {playing ? (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="aspect-video relative cursor-pointer group"
          onClick={() => setPlaying(true)}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-mint-600 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-semibold text-gray-800 mb-2">{video.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
}

export default function VideoSection() {
  return (
    <section id="video" className="py-24 bg-sky-soft/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-mint-600 font-semibold uppercase text-sm tracking-widest mb-3">Видео</p>
          <h2 className="section-title">Смотрите, узнавайте, доверяйте</h2>
          <p className="section-subtitle">
            Ирина Викторовна делится советами и рассказывает о своём подходе к педиатрии.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <VideoCard key={i} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
