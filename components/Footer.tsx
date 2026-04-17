import { Stethoscope, Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacts" className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
              <Stethoscope className="w-6 h-6 text-mint-400" />
              <span className="font-serif text-lg font-semibold">Потёмина И.В.</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Педиатр с 40-летним стажем. Врач первой квалификационной категории. Индивидуальный подход к каждому ребёнку.
            </p>
            <a href="#booking" className="btn-primary text-sm inline-block">
              Записаться на приём
            </a>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-mint-400 transition-colors">
                <Phone className="w-4 h-4 text-mint-400 flex-shrink-0" />
                +7 (999) 123-45-67
              </a>
              <a href="mailto:potemina@pediatr.ru" className="flex items-center gap-2 hover:text-mint-400 transition-colors">
                <Mail className="w-4 h-4 text-mint-400 flex-shrink-0" />
                potemina@pediatr.ru
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-mint-400 flex-shrink-0 mt-0.5" />
                <span>г. Москва, ул. Примерная, д. 1, оф. 205</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-mint-400 flex-shrink-0 mt-0.5" />
                <span>Пн–Пт: 9:00–19:00<br />Сб: 10:00–15:00</span>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#about", label: "О враче" },
                { href: "#services", label: "Услуги" },
                { href: "#reviews", label: "Отзывы" },
                { href: "#video", label: "Видео" },
                { href: "#blog", label: "Блог" },
                { href: "#booking", label: "Запись на приём" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-mint-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© {year} Потёмина Ирина Викторовна. Все права защищены.</span>
          <span>Информация на сайте носит ознакомительный характер и не заменяет консультацию врача.</span>
        </div>
      </div>
    </footer>
  );
}
