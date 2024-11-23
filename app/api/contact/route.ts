import { NextResponse } from "next/server";
import Botpoison from "@botpoison/node";

// Initialize Botpoison with secret key
const botpoison = new Botpoison({
  secretKey: process.env.BOTPOISON_SECRET_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, subject, message, _botpoison } = body;

    // Verify Botpoison solution
    const { ok } = await botpoison.verify(_botpoison);
    if (!ok) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Send to Discord webhook
    const webhookUrl = process.env.DISCORD_WEBHOOK!;
    
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "New Contact Form Submission",
            color: 0x0099ff,
            fields: [
              {
                name: "Email",
                value: email,
                inline: true,
              },
              {
                name: "Subject",
                value: subject,
                inline: true,
              },
              {
                name: "Message",
                value: message,
              },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send to Discord webhook");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}