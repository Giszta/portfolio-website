//import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req, res) {
	// const { body } = await req.json();
	const { email, subject, message } = body;
	console.log(email, subject, message);
	try {
		const data = await resend.emails.send({
			from: fromEmail,
			to: [fromEmail, email],
			subject: subject,
			react: (
				<>
					<h1>{subject}</h1>
					<p>Thank you for contacting me!</p>
					<p>New message submitted</p>
					<p>{message}</p>
				</>
			),
		});

		// if (error) {
		// 	return Response.json({ error }, { status: 500 });
		// }

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
