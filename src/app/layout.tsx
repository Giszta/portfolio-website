import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
	title: "Adam Giszter | Frontend Developer",
	description: "Portfolio Website of Adam Giszter",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="hide-scrollbar">
			<body className={jetbrainsMono.variable}>
				<Toaster
					position="top-right"
					toastOptions={{
						style: {
							background: "#1e1e2e",
							color: "#fff",
							borderRadius: "8px",
							padding: "12px",
						},
					}}
				/>
				{children}
			</body>
		</html>
	);
}
