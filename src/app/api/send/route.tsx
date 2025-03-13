import { NextResponse } from "next/server";
import { Resend } from "resend";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

console.log("Resend API Key:", process.env.RESEND_API_KEY ? "OK" : "MISSING");
console.log("From Email:", process.env.FROM_EMAIL);
console.log("To Email:", process.env.TO_EMAIL);


const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;
const toEmail = process.env.TO_EMAIL as string;

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { email, subject, message } = body;

		if (!email || !subject || !message) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		const data = await resend.emails.send({
			from: fromEmail,
			to: [toEmail, email],
			subject: subject,
			html: `
				<h1>${subject}</h1>
				<p>Thank you for contacting me!</p>
				<p><strong>New message submitted:</strong></p>
				<p>${message}</p>
			`,
		});

		if (!data || data.error) {
			throw new Error("Email sending failed");
		}

		return NextResponse.json({
			status: 200,
			message: "Email sent successfully",
			data,
		});
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
