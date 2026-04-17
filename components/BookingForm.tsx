"use client";
import { useState } from "react";
import { CheckCircle, Calendar, Phone, User, Mail, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  service: string;
  message: string;
}

const serviceOptions = [
  "Первичный приём",
  "Повторный приём",
  "Консультация новорождённого",
  "Вакцинация",
  "Справка в детский сад/школу",
  "Вызов на дом",
  "Онлайн-консультация",
  "Другое",
];

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", date: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Введите имя";
    if (!form.phone.trim()) newErrors.phone = "Введите телефон";
    else if (!/^[\d\s\-+()]{7,}$/.test(form.phone)) newErrors.phone = "Неверный формат телефона";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Неверный email";
    if (!form.date) newErrors.date = "Выберите дату";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-mint-50">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <CheckCircle className="w-16 h-16 text-mint-500 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">
              Заявка отправлена!
            </h3>
            <p className="text-gray-500 mb-6">
              Мы свяжемся с вами в ближайшее время для подтверждения записи.
            </p>
            <button
              className="btn-outline"
              onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", date: "", service: "", message: "" }); }}
            >
              Записаться снова
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-mint-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-mint-600 font-semibold uppercase text-sm tracking-widest mb-3">Запись</p>
          <h2 className="section-title">Запишитесь на приём</h2>
          <p className="section-subtitle">
            Заполните форму — мы перезвоним для подтверждения в течение часа.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl p-8 shadow-xl space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 inline mr-1" />Ваше имя *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Иванова Анна Петровна"
              className={`w-full border rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mint-400 transition ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Phone className="w-4 h-4 inline mr-1" />Телефон *
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+7 (999) 123-45-67"
              className={`w-full border rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mint-400 transition ${
                errors.phone ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4 inline mr-1" />Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="example@mail.ru"
              className={`w-full border rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mint-400 transition ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Date + Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Calendar className="w-4 h-4 inline mr-1" />Желаемая дата *
              </label>
              <input
                type="date"
                min={today}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={`w-full border rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-mint-400 transition ${
                  errors.date ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Услуга
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-mint-400 transition bg-white"
              >
                <option value="">Выберите...</option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MessageSquare className="w-4 h-4 inline mr-1" />Комментарий
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Кратко опишите жалобы или вопрос..."
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mint-400 transition resize-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full text-base py-4">
            Отправить заявку
          </button>

          <p className="text-xs text-gray-400 text-center">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </form>
      </div>
    </section>
  );
}
