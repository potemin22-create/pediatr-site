"use client";
import {
  Stethoscope, RefreshCw, Baby, ClipboardList,
  GraduationCap, Activity, Home, Heart, Video, Syringe,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, RefreshCw, Baby, ClipboardList,
  GraduationCap, Activity, Home, Heart, Video, Syringe,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-sky-soft/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-mint-600 font-semibold uppercase text-sm tracking-widest mb-3">Услуги</p>
          <h2 className="section-title">Что я лечу и чем помогаю</h2>
          <p className="section-subtitle">
            Полный спектр педиатрической помощи — от первого осмотра новорождённого до справок для школы.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Stethoscope;
            return (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-mint-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-mint-500 transition-colors">
                  <Icon className="w-6 h-6 text-mint-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">{s.description}</p>
                {s.price && (
                  <span className="text-mint-600 font-semibold text-sm">{s.price}</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a href="#booking" className="btn-primary inline-block">
            Записаться на приём
          </a>
        </div>
      </div>
    </section>
  );
}
