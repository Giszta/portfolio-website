import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

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

		console.log("Sending email:", { email, subject, message });

		const data = await resend.emails.send({
			from: fromEmail,
			to: [fromEmail, email],
			subject: subject,
			react: (
				<>
					<h1>{subject}</h1>
					<p>Thank you for contacting me!</p>
					<p>New message submitted:</p>
					<p>{message}</p>
				</>
			),
		});

		return NextResponse.json({
			status: 200,
			message: "Email sent successfully",
			data,
		});
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ status: 500, error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
