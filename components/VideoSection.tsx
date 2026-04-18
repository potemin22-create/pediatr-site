"use client";
import { useState } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    id: "D2i0lXS_rFc",
    title: "Профилактика ОРВИ и гриппа у детей",
    description: "Рекомендации опытного педиатра: как защитить ребёнка в сезон простуд и что делать при первых симптомах.",
    thumbnail: "https://img.youtube.com/vi/D2i0lXS_rFc/hqdefault.jpg",
  },
  {
    id: "0bzhHBFbw1Q",
    title: "Как укрепить иммунитет ребёнка",
    description: "Подкаст с педиатром: как поддержать естественный иммунитет ребёнка без лишних таблеток.",
    thumbnail: "https://img.youtube.com/vi/0bzhHBFbw1Q/hqdefault.jpg",
  },
  {
    id: "beIZj6AEirg",
    title: "Как лечить ОРВИ у ребёнка",
    description: "Педиатр объясняет: что помогает, а что лишнее при лечении простуды у детей разного возраста.",
    thumbnail: "https://img.youtube.com/vi/beIZj6AEirg/hqdefault.jpg",
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
