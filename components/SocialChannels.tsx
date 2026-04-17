import { Send } from "lucide-react";

const VkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.01-1.49-.96-1.743-.96-.356 0-.458.102-.458.593v1.566c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .779.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
  </svg>
);

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
  },
  {
    name: "ВКонтакте",
    handle: "vk.com/dr_potemina",
    description: "Статьи, видео и прямые эфиры. Задавайте вопросы и общайтесь с другими родителями.",
    href: "https://vk.com/dr_potemina",
    color: "bg-[#4C75A3]",
    hoverColor: "hover:bg-[#3d6191]",
    icon: <VkIcon />,
    subscribers: "Скоро открытие",
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
              <div className={`w-14 h-14 ${ch.color} ${ch.hoverColor} rounded-2xl flex items-center justify-center shadow-md transition-colors`}>
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
              <div className={`inline-flex items-center gap-2 text-sm font-semibold text-white ${ch.color} ${ch.hoverColor} px-5 py-2.5 rounded-full self-start transition-colors`}>
                Подписаться
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
