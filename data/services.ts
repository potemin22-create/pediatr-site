export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  price?: string;
}

export const services: Service[] = [
  {
    id: "primary",
    icon: "Stethoscope",
    title: "Первичный приём",
    description: "Осмотр, сбор анамнеза, постановка диагноза и назначение лечения.",
    price: "от 1 500 ₽",
  },
  {
    id: "repeat",
    icon: "RefreshCw",
    title: "Повторный приём",
    description: "Контроль динамики лечения, корректировка назначений.",
    price: "от 1 000 ₽",
  },
  {
    id: "newborn",
    icon: "Baby",
    title: "Консультация новорождённых",
    description: "Осмотр малышей до 1 месяца, рекомендации по уходу и вскармливанию.",
    price: "от 2 000 ₽",
  },
  {
    id: "vaccination",
    icon: "Syringe",
    title: "Вакцинация",
    description: "Планирование прививочного календаря, подготовка и наблюдение после вакцинации.",
    price: "по прейскуранту",
  },
  {
    id: "kindergarten",
    icon: "ClipboardList",
    title: "Справка в детский сад",
    description: "Медицинский осмотр, оформление документов для поступления в ДОУ.",
    price: "от 800 ₽",
  },
  {
    id: "school",
    icon: "GraduationCap",
    title: "Справка в школу",
    description: "Профилактический осмотр перед учебным годом, выдача справок.",
    price: "от 800 ₽",
  },
  {
    id: "sports",
    icon: "Activity",
    title: "Допуск к спорту",
    description: "Осмотр и оформление справки для занятий физкультурой и спортивных секций.",
    price: "от 1 000 ₽",
  },
  {
    id: "home",
    icon: "Home",
    title: "Вызов на дом",
    description: "Выезд к заболевшему ребёнку — без очередей и лишнего стресса.",
    price: "от 3 000 ₽",
  },
  {
    id: "chronic",
    icon: "Heart",
    title: "Ведение хронических болезней",
    description: "Долгосрочное наблюдение детей с хроническими заболеваниями.",
    price: "индивидуально",
  },
  {
    id: "online",
    icon: "Video",
    title: "Онлайн-консультация",
    description: "Консультация по видеосвязи — удобно в любое время из дома.",
    price: "от 800 ₽",
  },
];
