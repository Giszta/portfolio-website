// EmailSection.tsx
"use client";
import React, { useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";

const EmailSection = () => {
	const formRef = useRef<HTMLFormElement | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const data = {
			email: formData.get("email"),
			subject: formData.get("subject"),
			message: formData.get("message"),
		};

		if (!data.email || !data.subject || !data.message) {
			toast.error("⚠️ Please fill in all fields before sending!");
			return;
		}

		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const result = await response.json();
				throw new Error(
					result.error || "Something went wrong. Try again later."
				);
			}

			toast.success("Message sent successfully! I'll get back to you soon.");
			formRef.current?.reset();
		} catch (error: any) {
			toast.error(`Oops! ${error.message}`);
		}
	};

	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative"
		>
			<Toaster position="top-right" reverseOrder={false} />
			<div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-2/3"></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					I&apos;m currently looking for new opportunities, my inbox is always
					open. Whether you have a question or just want to say hi, I&apos;ll
					try my best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link
						href="https://github.com/Giszta"
						target="_blank"
						className="transition-transform duration-300 hover:scale-110"
					>
						<Image src={GithubIcon} alt="Github Icon" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/adam-giszter/"
						target="_blank"
						className="transition-transform duration-300 hover:scale-110"
					>
						<Image src={LinkedinIcon} alt="Linkedin Icon" />
					</Link>
				</div>
			</div>
			<div>
				<form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block mb-2 text-sm font-medium"
						>
							Your email
						</label>
						<input
							name="email"
							type="email"
							id="email"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="example@email.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="text-white block mb-2 text-sm font-medium"
						>
							Subject
						</label>
						<input
							name="subject"
							type="text"
							id="subject"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Just saying hi"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block text-sm mb-2 font-medium"
						>
							Message
						</label>
						<textarea
							name="message"
							id="message"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Let's talk about..."
						/>
					</div>
					<button
						type="submit"
						className="bg-primary-500 hover:bg-secondary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
