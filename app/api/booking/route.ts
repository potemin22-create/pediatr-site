import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, date, service, message } = await req.json();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text = [
    "📋 <b>Новая заявка на приём</b>",
    "",
    `👤 <b>Имя:</b> ${name}`,
    `📞 <b>Телефон:</b> ${phone}`,
    `📅 <b>Дата:</b> ${date}`,
    service ? `🩺 <b>Услуга:</b> ${service}` : null,
    message ? `💬 <b>Комментарий:</b> ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("Telegram error:", JSON.stringify(err));
    return NextResponse.json({ error: err }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
