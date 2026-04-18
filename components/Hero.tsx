"use client";
import { useEffect, useRef, useState } from "react";
import { Award, Clock, Users, ChevronDown } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const step = target / 60;
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("ru")}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-white via-mint-50 to-sky-soft">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-mint-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-mint-100 text-mint-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" />
              Врач первой категории
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Потёмина{" "}
              <span className="text-mint-500">Ирина</span>{" "}
              Викторовна
            </h1>
            <p className="text-xl text-gray-500 font-light mb-2">Педиатр · Детский врач</p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-lg">
              Более 40 лет я помогаю детям расти здоровыми, а их родителям — не бояться каждого чиха. Записывайтесь — разберёмся вместе.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#booking" className="btn-primary text-base px-8 py-4">
                Записаться на приём
              </a>
              <a href="#about" className="btn-outline text-base px-8 py-4">
                Узнать больше
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-mint-600 mb-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="font-serif text-3xl font-bold text-gray-800">
                  <Counter target={40} suffix="+" />
                </div>
                <div className="text-sm text-gray-500">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-mint-600 mb-1">
                  <Users className="w-5 h-5" />
                </div>
                <div className="font-serif text-3xl font-bold text-gray-800">
                  <Counter target={5000} suffix="+" />
                </div>
                <div className="text-sm text-gray-500">пациентов</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-mint-600 mb-1">
                  <Award className="w-5 h-5" />
                </div>
                <div className="font-serif text-3xl font-bold text-gray-800">
                  <Counter target={85000} suffix="+" />
                </div>
                <div className="text-sm text-gray-500">часов практики</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-mint-100 overflow-hidden shadow-2xl ring-8 ring-white">
                <img
                  src="/doctor-hero.png"
                  alt="Потёмина Ирина Викторовна — педиатр"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Принимает пациентов</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-mint-500 transition-colors animate-bounce">
            <span className="text-xs mb-1">Листать вниз</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
