"use client";

import { motion } from "framer-motion";
import {
	ArrowUpRight,
	ExternalLink,
	ImageIcon,
	Palette,
	Youtube,
} from "lucide-react";
import Image from "next/image";
import { type ComponentType, useState } from "react";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ProjectsModal } from "@/components/ui/projects-modal";
import { YouTubeLite } from "@/components/ui/youtube-lite";

const heroProjects = [
	{
		title: "Neon Dreams",
		link: "#",
		thumbnail: "/web/car 1.jpeg",
		category: "VFX",
	},
	{
		title: "Digital Horizons",
		link: "#",
		thumbnail: "/web/matrix ship frame.jpeg",
		category: "3D",
	},
	{
		title: "Motion Flow",
		link: "#",
		thumbnail: "/web/flow poster.jpeg",
		category: "Animation",
	},
	{
		title: "Color Symphony",
		link: "#",
		thumbnail: "/web/chromokopia .jpeg",
		category: "Editing",
	},
	{
		title: "Abstract Reality",
		link: "#",
		thumbnail: "/web/nerliv 3.jpeg",
		category: "VFX",
	},
	{
		title: "Future Visions",
		link: "#",
		thumbnail: "/web/cyber poster.jpeg",
		category: "3D",
	},
	{
		title: "Dynamic Pulse",
		link: "#",
		thumbnail: "/web/v2 4k.jpeg",
		category: "Animation",
	},
	{
		title: "Cinematic Grade",
		link: "#",
		thumbnail: "/web/CTRLD 1 all dj poster.jpeg",
		category: "Editing",
	},
	{
		title: "Particle Storm",
		link: "#",
		thumbnail: "/web/poster nomad.jpeg",
		category: "VFX",
	},
	{
		title: "Geometric Dreams",
		link: "#",
		thumbnail: "/web/nerliv 1.jpeg",
		category: "3D",
	},
	{
		title: "Kinetic Energy",
		link: "#",
		thumbnail: "/web/pool guy.jpeg",
		category: "Animation",
	},
	{
		title: "Visual Poetry",
		link: "#",
		thumbnail: "/web/shells.jpeg",
		category: "Editing",
	},
	{
		title: "Holographic",
		link: "#",
		thumbnail: "/web/dotphic.jpeg",
		category: "VFX",
	},
	{
		title: "Dimensional Shift",
		link: "#",
		thumbnail: "/web/car 2.jpeg",
		category: "3D",
	},
	{
		title: "Rhythm & Motion",
		link: "#",
		thumbnail: "/web/hollow passage POSTER .jpeg",
		category: "Animation",
	},
];

// Featured Images - No category
const featuredImages = [
	{
		id: 1,
		title: "Ethereal Light",
		aspect: "portrait",
		thumbnail: "/web/afro girl.jpeg",
	},
	{
		id: 2,
		title: "Urban Decay",
		aspect: "landscape",
		thumbnail: "/web/beach 2 tone.jpeg",
	},
	{
		id: 3,
		title: "Neon Nights",
		aspect: "square",
		thumbnail: "/web/nerliv 4.jpeg",
	},
	{
		id: 4,
		title: "Abstract Form",
		aspect: "portrait",
		thumbnail: "/web/afro girl 2.jpeg",
	},
	{
		id: 5,
		title: "Digital Dreams",
		aspect: "landscape",
		thumbnail: "/web/nerliv 5.jpeg",
	},
	{
		id: 6,
		title: "Color Burst",
		aspect: "square",
		thumbnail: "/web/adwa shirt design.jpeg",
	},
	{
		id: 7,
		title: "Shadow Play",
		aspect: "landscape",
		thumbnail: "/web/car 3.jpeg",
	},
	{
		id: 8,
		title: "Light Traces",
		aspect: "portrait",
		thumbnail: "/web/Figure Seven.jpeg",
	},
];

// My Works — embedded YouTube pieces
const myWorks = [
	{
		id: 1,
		title: "Nerliv - Addis Ketema || አዲስ ከተማ (Official Visualizer)",
		youtubeId: "tbTdvUkvUoA",
	},
	{
		id: 2,
		title: "Nerliv - Yetal II የታል (Official Visualizer)",
		youtubeId: "esrY_m2QcpU",
	},
	{
		id: 3,
		title: "Nerliv - Chewata || ጨዋታ (Official Visualizer)",
		youtubeId: "kls9-2GSiEk",
	},
	{
		id: 4,
		title: "Nerliv - Chis II ጭስ (Official Visualizer)",
		youtubeId: "8h_sa3UaNyE",
	},
	{
		id: 5,
		title: "Nerliv - Ereft II እረፍት (Official Visualizer)",
		youtubeId: "xC9d284PZiI",
	},
	{
		id: 6,
		title: "Hewan Gebreweld - Hewan || ሔዋን (Nerliv Remix) [Official Audio]",
		youtubeId: "xKhG6ultq-c",
	},
	{
		id: 7,
		title: "Nerliv - Emetalhu || እመጣለሁ feat. NUBA",
		youtubeId: "bL7UowEGuKU",
	},
	{
		id: 8,
		title: "Lastarock - Hayloga || ሃይሎጋ (Nerliv Remix) [Official Video]",
		youtubeId: "b_auXQql-ts",
	},
	{
		id: 9,
		title: "Dotphic - Belomi Bena",
		youtubeId: "WhZVnsqmiaM",
	},
	{
		id: 10,
		title: "Mikaya Behailu - Lante Sel | ላንተ ስል (Dotphic Remix)",
		youtubeId: "2JdN1O09T7s",
	},
	{
		id: 11,
		title: "Dotphic - One II አንድ",
		youtubeId: "vAg069S6sEI",
	},
	{
		id: 12,
		title: "Dotphic - Life of Frank",
		youtubeId: "MlgjnIOVYpM",
	},
	{
		id: 13,
		title: "Dotphic - Beza",
		youtubeId: "_R_ApSImyKk",
	},
	{
		id: 14,
		title: "Dotphic - Dying",
		youtubeId: "h3v1voTVl6I",
	},
	{
		id: 15,
		title: "Dotphic - Akkam",
		youtubeId: "76q0r5Fl6WU",
	},
	{
		id: 16,
		title: "Samon ሣሞን - TESASATEN ተሳሳትን (Visualizer)",
		youtubeId: "Pcl417q5krY",
	},
	{
		id: 17,
		title: "Samon ሣሞን - TIZITA ትዝታ (Visualizer)",
		youtubeId: "K6aT4Uzvh1o",
	},
	{
		id: 18,
		title: "Laeke | ላዕከ - Shimel Ena Zeng | ሽመል እና ዘንግ (Official Lyric Video)",
		youtubeId: "7JZ3CxjDqwc",
	},
	{
		id: 19,
		title: "Nerliv - Alawkem || አላውቅም feat. Hayu",
		youtubeId: "KvAHX0dROAs",
	},
];

const vfxMusicVideos = [
	{
		id: 1,
		title:
			"Leul Sisay - አልቻልኩም - Alchalkum | New Ethiopian Music 2024 (Official Music Video)",
		youtubeId: "Re2ojCldPVY",
	},
	{
		id: 2,
		title: "Evared - No Capping (Official Music Video)",
		youtubeId: "fU5Lb2MuNmU",
	},
	{
		id: 3,
		title:
			"Estifanos Tomas - ባንቺ አይደል እንዴ ft. Richo - New Ethiopian Music 2025 (Official Video)",
		youtubeId: "rmPL_KSY-V8",
	},
];

const videoPosters = [
	{
		id: 1,
		title: "Midnight Run",
		client: "Sony Music",
		thumbnail: "/web/poster adwa v6.jpeg",
	},
	{
		id: 2,
		title: "Electric Dreams",
		client: "Universal",
		thumbnail: "/web/CTRLD2.0.jpeg",
	},
	{
		id: 3,
		title: "Neon Paradise",
		client: "Warner Bros",
		thumbnail: "/web/Phelixyos v2.jpeg",
	},
];

const kowlSkins = [
	{
		id: 1,
		title: "Robel",
		thumbnail: encodeURI("/media/hog new/robel with background.png"),
	},
	{
		id: 2,
		title: "Eden",
		thumbnail: encodeURI("/media/hog new/IMG_20241121_115910_698.png"),
	},
	{
		id: 3,
		title: "Portrait",
		thumbnail: encodeURI("/media/hog new/IMG_20241120_123939_871.png"),
	},
	{
		id: 4,
		title: "Dagi",
		thumbnail: encodeURI("/media/hog new/dagi 1-min.png"),
	},
	{
		id: 5,
		title: "Chromakopia",
		thumbnail: encodeURI("/media/hog new/chromokopia .png"),
	},
	{ id: 6, title: "Me", thumbnail: "/web/me.jpeg" },
];

// Section Header Component
interface SectionHeaderProps {
	label: string;
	title: string;
	icon: ComponentType<{ className?: string }>;
	index: string;
}

function SectionHeader({
	label,
	title,
	icon: Icon,
	index,
}: SectionHeaderProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className="flex items-end justify-between mb-12 border-b border-white/10 pb-8"
		>
			<div className="flex items-center gap-6">
				<span className="font-mono text-8xl font-bold text-accent/10">
					{index}
				</span>
				<div>
					<div className="flex items-center gap-3 mb-2">
						<Icon className="w-5 h-5 text-accent" />
						<p className="font-mono text-xs tracking-[0.3em] text-accent">
							{label}
						</p>
					</div>
					<h2 className="text-4xl md:text-5xl font-light">{title}</h2>
				</div>
			</div>
			<motion.button
				whileHover={{ scale: 1.05, x: 5 }}
				className="hidden md:flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors"
			>
				VIEW ALL <ArrowUpRight className="w-4 h-4" />
			</motion.button>
		</motion.div>
	);
}

export default function ProjectsPage() {
	const [modalState, setModalState] = useState<{
		isOpen: boolean;
		type: "all" | "personal" | "visualizers" | "posters" | "skins";
		title: string;
	}>({
		isOpen: false,
		type: "all",
		title: "",
	});
	const openModal = (
		type: "all" | "personal" | "visualizers" | "posters" | "skins",
		title: string,
	) => {
		setModalState({ isOpen: true, type, title });
	};

	const closeModal = () => {
		setModalState({ ...modalState, isOpen: false });
	};

	const getModalProjects = () => {
		switch (modalState.type) {
			case "personal":
				return myWorks;
			case "visualizers":
				return vfxMusicVideos;
			case "posters":
				return videoPosters;
			case "skins":
				return kowlSkins;
			default:
				return [];
		}
	};

	return (
		<SmoothScroll>
			<CustomCursor />
			<Navbar />
			<main className="min-h-screen bg-background overflow-hidden">
				{/* Hero Parallax Section */}
				<HeroParallax products={heroProjects} />

				{/* Section 01: Featured Images - No Category */}
				<section className="py-32 px-8 md:px-12 relative">
					{/* Background Elements */}
					<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

					<div className="max-w-7xl mx-auto relative">
						<SectionHeader
							label="FEATURED WORKS"
							title="Visual Gallery"
							icon={ImageIcon}
							index="01"
						/>

						{/* Masonry Grid */}
						<div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
							{featuredImages.map((image, index) => (
								<motion.div
									key={image.id}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.05 }}
									className="group relative break-inside-avoid"
								>
									<div
										className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 ${
											image.aspect === "portrait"
												? "aspect-[3/4]"
												: image.aspect === "landscape"
													? "aspect-[4/3]"
													: "aspect-square"
										}`}
									>
										<Image
											src={image.thumbnail}
											alt={image.title}
											fill
											sizes="(max-width: 768px) 50vw, 25vw"
											className="object-cover"
										/>

										{/* Corner Accents */}
										<div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
										<div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Section 02: My Works */}
				<section className="py-32 px-8 md:px-12 bg-white/[0.02] border-y border-white/10 relative overflow-hidden">
					{/* Decorative Lines */}
					<div className="absolute inset-0 pointer-events-none">
						{([20, 40, 60, 80, 100] as const).map((topPct) => (
							<div
								key={`decorative-line-${topPct}`}
								className="absolute h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent"
								style={{ top: `${topPct}%`, left: 0, right: 0 }}
							/>
						))}
					</div>

					<div className="max-w-7xl mx-auto relative">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="flex items-end justify-between mb-12 border-b border-white/10 pb-8"
						>
							<div className="flex items-center gap-6">
								<span className="font-mono text-8xl font-bold text-accent/10">
									02
								</span>
								<div>
									<div className="flex items-center gap-3 mb-2">
										<Youtube className="w-5 h-5 text-accent" />
										<p className="font-mono text-xs tracking-[0.3em] text-accent">
											PORTFOLIO
										</p>
									</div>
									<h2 className="text-4xl md:text-5xl font-light">My Works</h2>
								</div>
							</div>
							<motion.button
								whileHover={{ scale: 1.05, x: 5 }}
								onClick={() => openModal("personal", "My Works")}
								className="hidden md:flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors"
							>
								VIEW ALL <ArrowUpRight className="w-4 h-4" />
							</motion.button>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
							{myWorks.map((video, index) => (
								<motion.div
									key={video.id}
									initial={{ opacity: 0, y: 24 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{
										once: true,
										margin: "0px 0px -8% 0px",
										amount: 0.2,
									}}
									transition={{
										duration: 0.35,
										delay: Math.min(index * 0.02, 0.24),
										ease: [0.25, 0.1, 0.25, 1],
									}}
									className="group flex flex-col"
								>
									<YouTubeLite
										youtubeId={video.youtubeId}
										title={video.title}
										className="rounded-2xl border border-white/10 transition-colors duration-300 hover:border-accent/50"
									/>

									<div className="mt-4 flex items-start justify-between gap-3">
										<h3 className="text-base md:text-lg font-light group-hover:text-accent transition-colors leading-snug">
											{video.title}
										</h3>
										<a
											href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
											target="_blank"
											rel="noopener noreferrer"
											className="shrink-0"
											aria-label={`Watch on YouTube: ${video.title}`}
										>
											<span className="inline-flex w-10 h-10 rounded-full border border-white/20 items-center justify-center transition-transform duration-200 hover:scale-110 hover:rotate-45 hover:border-accent hover:bg-accent/10">
												<ExternalLink className="w-4 h-4" />
											</span>
										</a>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Section 03: VFX in music videos */}
				<section className="py-32 px-8 md:px-12 relative">
					<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

					<div className="max-w-7xl mx-auto relative">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="flex items-end justify-between mb-12 border-b border-white/10 pb-8"
						>
							<div className="flex items-center gap-6">
								<span className="font-mono text-8xl font-bold text-accent/10">
									03
								</span>
								<div>
									<div className="flex items-center gap-3 mb-2">
										<Youtube className="w-5 h-5 text-accent" />
										<p className="font-mono text-xs tracking-[0.3em] text-accent">
											CLIENT / COLLAB
										</p>
									</div>
									<h2 className="text-4xl md:text-5xl font-light">
										VFX in Music Videos
									</h2>
								</div>
							</div>
							<motion.button
								whileHover={{ scale: 1.05, x: 5 }}
								onClick={() => openModal("visualizers", "VFX in Music Videos")}
								className="hidden md:flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors"
							>
								VIEW ALL <ArrowUpRight className="w-4 h-4" />
							</motion.button>
						</motion.div>

						{/* Embedded official music videos */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
							{vfxMusicVideos.map((video, index) => (
								<motion.div
									key={video.id}
									initial={{ opacity: 0, y: 24 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{
										once: true,
										margin: "0px 0px -8% 0px",
										amount: 0.2,
									}}
									transition={{
										duration: 0.35,
										delay: index * 0.06,
										ease: [0.25, 0.1, 0.25, 1],
									}}
									className="group flex flex-col"
								>
									<YouTubeLite
										youtubeId={video.youtubeId}
										title={video.title}
										className="rounded-2xl border border-white/10 transition-colors duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/15"
									/>

									<div className="mt-4 flex items-start justify-between gap-3">
										<h3 className="text-base font-light group-hover:text-accent transition-colors leading-snug">
											{video.title}
										</h3>
										<a
											href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
											target="_blank"
											rel="noopener noreferrer"
											className="shrink-0"
											aria-label={`Watch on YouTube: ${video.title}`}
										>
											<span className="inline-flex w-10 h-10 rounded-full border border-white/20 items-center justify-center transition-transform duration-200 hover:scale-110 hover:rotate-45 hover:border-accent hover:bg-accent/10">
												<ExternalLink className="w-4 h-4" />
											</span>
										</a>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section className="py-32 px-8 md:px-12 bg-white/[0.02] border-y border-white/10">
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="flex items-end justify-between mb-12 border-b border-white/10 pb-8"
						>
							<div className="flex items-center gap-6">
								<span className="font-mono text-8xl font-bold text-accent/10">
									04
								</span>
								<div>
									<div className="flex items-center gap-3 mb-2">
										<ImageIcon className="w-5 h-5 text-accent" />
										<p className="font-mono text-xs tracking-[0.3em] text-accent">
											PRINT & DIGITAL
										</p>
									</div>
									<h2 className="text-4xl md:text-5xl font-light">
										Video Posters
									</h2>
								</div>
							</div>
							<motion.button
								whileHover={{ scale: 1.05, x: 5 }}
								onClick={() => openModal("posters", "Video Posters")}
								className="hidden md:flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors"
							>
								VIEW ALL <ArrowUpRight className="w-4 h-4" />
							</motion.button>
						</motion.div>

						{/* 3 Poster Grid */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{videoPosters.map((poster, index) => (
								<motion.div
									key={poster.id}
									initial={{ opacity: 0, y: 60 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.15 }}
									className="group"
								>
									<div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
										<Image
											src={poster.thumbnail}
											alt={poster.title}
											fill
											sizes="(max-width: 768px) 80vw, 25vw"
											className="object-cover"
										/>

										{/* Shine Effect */}
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

										{/* Corner Accents */}
										<div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
										<div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				<section className="py-32 px-8 md:px-12 relative overflow-hidden">
					{/* Animated Background Grid */}
					<div className="absolute inset-0 pointer-events-none opacity-20">
						<div
							className="absolute inset-0"
							style={{
								backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
								backgroundSize: "40px 40px",
							}}
						/>
					</div>

					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

					<div className="max-w-7xl mx-auto relative">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="flex items-end justify-between mb-12 border-b border-white/10 pb-8"
						>
							<div className="flex items-center gap-6">
								<span className="font-mono text-8xl font-bold text-accent/10">
									05
								</span>
								<div>
									<div className="flex items-center gap-3 mb-2">
										<Palette className="w-5 h-5 text-accent" />
										<p className="font-mono text-xs tracking-[0.3em] text-accent">
											GAME ASSETS
										</p>
									</div>
									<h2 className="text-4xl md:text-5xl font-light">
										Kowl Skins
									</h2>
								</div>
							</div>
							<motion.button
								whileHover={{ scale: 1.05, x: 5 }}
								onClick={() => openModal("skins", "Kowl Skins")}
								className="hidden md:flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors"
							>
								VIEW ALL <ArrowUpRight className="w-4 h-4" />
							</motion.button>
						</motion.div>

						{/* Kowl skins grid */}
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{kowlSkins.map((skin, index) => (
								<motion.div
									key={skin.id}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="group"
								>
									<div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1">
										<Image
											src={skin.thumbnail}
											alt={skin.title}
											fill
											sizes="(max-width: 768px) 50vw, 15vw"
											className="object-cover"
										/>

										{/* Corner Accents */}
										<div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
										<div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-32 px-8 md:px-12 border-t border-white/10">
					<div className="max-w-4xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							<p className="font-mono text-xs tracking-[0.3em] text-accent mb-6">
								READY TO CREATE?
							</p>
							<h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8">
								Let's bring your
								<br />
								<span className="italic text-accent">vision</span> to life
							</h2>
							<p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
								Have a project in mind? I'd love to hear about it and explore
								how we can create something extraordinary together.
							</p>
							<motion.a
								href="/contact"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center gap-3 bg-accent text-background font-mono text-sm tracking-widest px-10 py-5 rounded-full hover:shadow-lg hover:shadow-accent/30 transition-shadow"
							>
								START A PROJECT
								<ArrowUpRight className="w-5 h-5" />
							</motion.a>
						</motion.div>
					</div>
				</section>

				<Footer />
			</main>

			{/* Projects Modal */}
			<ProjectsModal
				isOpen={modalState.isOpen}
				onClose={closeModal}
				title={modalState.title}
				projects={getModalProjects()}
				type={modalState.type}
			/>
		</SmoothScroll>
	);
}
