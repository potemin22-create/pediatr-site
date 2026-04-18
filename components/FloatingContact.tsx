"use client";
import { Send } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <a
        href="https://t.me/+79085354482"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#2CA5E0] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Написать в Telegram"
      >
        <Send className="w-5 h-5 text-white" />
      </a>
      <a
        href="https://max.ru/+79085354482"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform overflow-hidden"
        title="Написать в MAX"
      >
        <img src="/max-logo.webp" alt="MAX" className="w-12 h-12 object-cover" />
      </a>
    </div>
  );
}
