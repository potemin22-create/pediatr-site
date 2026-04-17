"use client";
import { CheckCircle, Quote } from "lucide-react";

const achievements = [
  "Врач первой квалификационной категории",
  "Более 40 лет клинической практики",
  "Специализация: неонатология, аллергология, иммунология",
  "Регулярное участие в профессиональных конференциях",
  "Повышение квалификации каждые 5 лет",
  "Тысячи успешно вылеченных маленьких пациентов",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80"
                alt="Педиатр Потёмина И.В. на приёме"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-6 -right-6 bg-mint-500 text-white rounded-2xl p-5 max-w-xs shadow-xl hidden md:block">
              <Quote className="w-6 h-6 mb-2 opacity-80" />
              <p className="text-sm leading-relaxed italic">
                «Каждый ребёнок уникален. Моя задача — не просто вылечить, а помочь расти здоровым и счастливым.»
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-mint-600 font-semibold uppercase text-sm tracking-widest mb-3">О враче</p>
            <h2 className="section-title">Потёмина Ирина Викторовна</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ирина Викторовна начала свою медицинскую карьеру в 1984 году и с тех пор посвятила жизнь детской медицине. За эти годы она стала настоящим другом для тысяч семей, помогая детям в самые ответственные периоды их развития.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Её подход основан на принципах доказательной медицины, внимательном отношении к каждому пациенту и постоянном профессиональном развитии. Ирина Викторовна убеждена: здоровый ребёнок — это прежде всего грамотный и спокойный родитель.
            </p>

            <div className="space-y-3 mb-8">
              {achievements.map((a) => (
                <div key={a} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mint-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{a}</span>
                </div>
              ))}
            </div>

            <a href="#booking" className="btn-primary inline-block">
              Записаться на приём
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
