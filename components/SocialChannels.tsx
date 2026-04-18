import { Send } from "lucide-react";

const channels = [
  {
    name: "Telegram-канал",
    handle: "@dr_potemina",
    description: "Советы педиатра, ответы на частые вопросы и новости о детском здоровье — каждую неделю.",
    href: "https://t.me/dr_potemina",
    color: "bg-[#2CA5E0]",
    hoverColor: "hover:bg-[#1a94cf]",
    icon: <Send className="w-6 h-6 fill-white text-white" />,
    subscribers: "Скоро открытие",
    gradient: false,
  },
  {
    name: "MAX",
    handle: "max.ru/dr_potemina",
    description: "Статьи, видео и прямые эфиры. Задавайте вопросы и общайтесь с другими родителями.",
    href: "https://max.ru/dr_potemina",
    color: "",
    hoverColor: "",
    icon: <img src="/max-logo.webp" alt="MAX" className="w-10 h-10 rounded-xl" />,
    subscribers: "Скоро открытие",
    gradient: true,
  },
];

export default function SocialChannels() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-mint-600 font-semibold uppercase text-sm tracking-widest mb-3">Соцсети</p>
          <h2 className="section-title">Будьте в курсе</h2>
          <p className="section-subtitle">
            Подписывайтесь на каналы Ирины Викторовны — полезные советы всегда под рукой.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl p-8 bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-opacity ${ch.gradient ? "bg-transparent" : `${ch.color} ${ch.hoverColor}`}`}>
                {ch.icon}
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-800 text-lg">{ch.name}</h3>
                  <span className="text-xs bg-mint-100 text-mint-700 px-2 py-0.5 rounded-full font-medium">
                    {ch.subscribers}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{ch.handle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{ch.description}</p>
              </div>

              {/* CTA */}
              <div
                className={`inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-full self-start transition-opacity hover:opacity-90 ${ch.gradient ? "" : `${ch.color} ${ch.hoverColor}`}`}
                style={ch.gradient ? { background: "linear-gradient(135deg, #5B8EF5 0%, #9B5DE5 100%)" } : undefined}
              >
                Подписаться
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
