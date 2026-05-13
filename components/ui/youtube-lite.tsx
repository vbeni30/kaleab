"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

type YouTubeLiteProps = {
	youtubeId: string;
	title: string;
	className?: string;
	/** When true, fills a parent that already sets aspect ratio (e.g. modal card). */
	embedded?: boolean;
};

/**
 * Click-to-play: loads the heavy YouTube iframe only after the user taps play.
 * Keeps the page smooth when many videos are listed.
 */
export function YouTubeLite({
	youtubeId,
	title,
	className,
	embedded = false,
}: YouTubeLiteProps) {
	const [active, setActive] = useState(false);
	const activate = useCallback(() => setActive(true), []);

	const thumbSrc = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
	const embedSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

	if (active) {
		return (
			<div
				className={cn(
					"relative w-full overflow-hidden bg-black",
					embedded ? "h-full min-h-0" : "aspect-video",
					className,
				)}
			>
				<iframe
					src={embedSrc}
					title={title}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					className="absolute inset-0 h-full w-full"
				></iframe>
			</div>
		);
	}

	return (
		<div
			className={cn(
				"relative w-full overflow-hidden bg-black group/yt",
				embedded ? "h-full min-h-0" : "aspect-video",
				className,
			)}
		>
			<button
				type="button"
				onClick={activate}
				className="absolute inset-0 z-10 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[inherit]"
				aria-label={`Play video: ${title}`}
			>
				<span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-accent/25 transition-transform duration-200 group-hover/yt:scale-110 md:h-16 md:w-16">
					<Play
						className="h-6 w-6 translate-x-0.5 md:h-7 md:w-7"
						fill="currentColor"
					/>
				</span>
			</button>
			<Image
				src={thumbSrc}
				alt=""
				fill
				className="object-cover"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
				loading="lazy"
			/>
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
		</div>
	);
}
