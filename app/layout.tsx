import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Playfair_Display } from "next/font/google";
import type React from "react";
import "./globals.css";

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});

const siteUrl = "https://kaleab-tam.vercel.app";
const defaultTitle = "Kaleab Tamiru - Portfolio";
const defaultDescription =
	"Multidisciplinary Visual Artist - 3D, VFX, Video Editing & Compositing";
/** Social preview image — replace path if you add a dedicated 1200x630 OG asset */
const ogImagePath = "/web/me.jpeg";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: defaultTitle,
	description: defaultDescription,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: siteUrl,
		title: defaultTitle,
		description: defaultDescription,
		siteName: defaultTitle,
		locale: "en_US",
		images: [
			{
				url: ogImagePath,
				alt: "Kaleab Tamiru",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: defaultTitle,
		description: defaultDescription,
		images: [ogImagePath],
	},
};

export const viewport: Viewport = {
	themeColor: "#1a1a1a",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${playfair.variable} ${geistMono.variable}`}>
			<body className="font-sans antialiased overflow-x-hidden">
				<div className="noise-overlay" />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
