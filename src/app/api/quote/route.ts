import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, details } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Helper to escape HTML characters so user input won't break Telegram/HTML parsing
    const cleanText = (str: string) =>
      (str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // ------------------------------------------------------------------
    // 1. Send Telegram Mobile Notification
    // ------------------------------------------------------------------
    if (botToken && chatId) {
      const telegramMessage =
        `🚨 <b>NEW FREIGHT QUOTE REQUEST</b>\n\n` +
        `👤 <b>Name:</b> ${cleanText(name)}\n` +
        `📧 <b>Email:</b> ${cleanText(email)}\n` +
        `📞 <b>Phone:</b> ${cleanText(phone)}\n` +
        `📦 <b>Service:</b> ${cleanText(service)}\n` +
        `📝 <b>Details:</b> ${cleanText(details) || "None provided"}`;

      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId.trim(),
          text: telegramMessage,
          parse_mode: "HTML",
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("❌ Telegram API Error:", errData);
      }
    } else {
      console.warn("⚠️ Telegram credentials not configured.");
    }

    // ------------------------------------------------------------------
    // 2. Send Internal Email to sales@emajfreight.com via Resend
    // ------------------------------------------------------------------
    if (process.env.RESEND_API_KEY) {
      const emailResult = await resend.emails.send({
        from: "EMAJ Freight Leads <notifications@emajfreight.com>", // Custom verified domain sender
        to: "sales@emajfreight.com",
        subject: `New Lead Request: ${service} - ${name}`,
        html: `
          <h2>🚨 New Quote Request Received</h2>
          <p>A new lead was submitted on the website. Here are the details:</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 500px; font-family: sans-serif;">
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${cleanText(name)}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${cleanText(email)}">${cleanText(email)}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${cleanText(phone)}">${cleanText(phone)}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Service:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${cleanText(service)}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Details:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${cleanText(details) || "None provided"}</td></tr>
          </table>
        `,
      });

      if (emailResult.error) {
        console.error("❌ Resend Email Error:", emailResult.error);
      }
    } else {
      console.warn("⚠️ Resend API Key not configured.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Server Error in /api/quote:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}