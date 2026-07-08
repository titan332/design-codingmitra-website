import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

export async function POST(req: Request) {
    try {
        const { name, email, phone, interest, message } = await req.json();

        const brevo = new BrevoClient({
            apiKey: process.env.BREVO_API_KEY!,
        });

        await brevo.transactionalEmails.sendTransacEmail({
            sender: {
                name: process.env.EMAIL_SENDER_NAME!,
                email: process.env.EMAIL_SENDER_ADDRESS!,
            },

            to: [
                {
                    email: process.env.EMAIL_RECIPIENT_ADDRESS!,
                    name: process.env.EMAIL_RECIPIENT_NAME!,
                },
            ],

            replyTo: {
                email,
                name,
            },

            subject: process.env.EMAIL_SUBJECT!,

            htmlContent: `
        <h2>New Contact Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested In:</strong> ${interest}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({
            success: true,
        });
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            {
                success: false,
            },
            { status: 500 }
        );
    }
}