// src/app/api/subscriber/route.js
// MailerLite & Sender API Connection — JavaScript Version

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    const senderKey = process.env.SENDER_API_KEY;

    if (!senderKey) {
      console.error("❌ Missing SENDER_API_KEY environment variable");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.sender.net/v2/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${senderKey}`,
      },
      body: JSON.stringify({
        email,
        resubscribe: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Sender API error:", errorData);
      return NextResponse.json(
        {
          message:
            (errorData?.error?.message) || "Failed to subscribe with Sender API",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "✅ Subscription successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Subscription error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
