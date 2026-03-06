"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
	ArrowUpRight,
	ExternalLink,
	ImageIcon,
	Palette,
	Play,
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

const heroProjects = [
	{
		title: "Neon Dreams",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "VFX",
	},
	{
		title: "Digital Horizons",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "3D",
	},
	{
		title: "Motion Flow",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "Animation",
	},
	{
		title: "Color Symphony",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "Editing",
	},
	{
		title: "Abstract Reality",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "VFX",
	},
	{
		title: "Future Visions",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "3D",
	},
	{
		title: "Dynamic Pulse",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "Animation",
	},
	{
		title: "Cinematic Grade",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "Editing",
	},
	{
		title: "Particle Storm",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "VFX",
	},
	{
		title: "Geometric Dreams",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "3D",
	},
	{
		title: "Kinetic Energy",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "Animation",
	},
	{
		title: "Visual Poetry",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "Editing",
	},
	{
		title: "Holographic",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "VFX",
	},
	{
		title: "Dimensional Shift",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "3D",
	},
	{
		title: "Rhythm & Motion",
		link: "#",
		thumbnail: "/media/111_00086402.png",
		category: "Animation",
	},
];

// Featured Images - No category
const featuredImages = [
	{
		id: 1,
		title: "Ethereal Light",
		aspect: "portrait",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 2,
		title: "Urban Decay",
		aspect: "landscape",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 3,
		title: "Neon Nights",
		aspect: "square",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 4,
		title: "Abstract Form",
		aspect: "portrait",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 5,
		title: "Digital Dreams",
		aspect: "landscape",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 6,
		title: "Color Burst",
		aspect: "square",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 7,
		title: "Shadow Play",
		aspect: "landscape",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 8,
		title: "Light Traces",
		aspect: "portrait",
		thumbnail: "/media/111_00086402.png",
	},
];

// Personal Projects
const personalProjects = [
	{
		id: 1,
		title: "Behind The Scenes - VFX Breakdown",
		views: "125K",
		duration: "12:34",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 2,
		title: "Color Grading Tutorial",
		views: "89K",
		duration: "18:22",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 3,
		title: "3D Animation Process",
		views: "203K",
		duration: "24:15",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 4,
		title: "Motion Graphics Showreel 2024",
		views: "56K",
		duration: "03:45",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 5,
		title: "VFX Breakdown Reel",
		views: "98K",
		duration: "08:12",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 6,
		title: "Creative Studio Tour",
		views: "145K",
		duration: "15:30",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 7,
		title: "Advanced Color Grading",
		views: "72K",
		duration: "22:45",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 8,
		title: "3D Character Design",
		views: "164K",
		duration: "19:20",
		thumbnail: "/media/111_00086402.png",
	},
];

const visualizers = [
	{
		id: 1,
		title: "Cosmic Waves Visualizer",
		artist: "Electronic Dreams",
		views: "45K",
		duration: "04:32",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 2,
		title: "Particle Symphony",
		artist: "Bass Collective",
		views: "78K",
		duration: "05:18",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 3,
		title: "Geometric Pulse",
		artist: "Synthwave Radio",
		views: "92K",
		duration: "03:45",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 4,
		title: "Neon Frequency",
		artist: "Night Drive",
		views: "61K",
		duration: "04:02",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 5,
		title: "Digital Aurora",
		artist: "Ambient Souls",
		views: "33K",
		duration: "06:15",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 6,
		title: "Crystal Formation",
		artist: "Deep House Mix",
		views: "87K",
		duration: "05:42",
		thumbnail: "/media/111_00086402.png",
	},
];

const videoPosters = [
	{
		id: 1,
		title: "Midnight Run",
		client: "Sony Music",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 2,
		title: "Electric Dreams",
		client: "Universal",
		thumbnail: "/media/111_00086402.png",
	},
	{
		id: 3,
		title: "Neon Paradise",
		client: "Warner Bros",
		thumbnail: "/media/111_00086402.png",
	},
];

const kowlSkins = [
	{ id: 1, title: "Crimson Blaze", thumbnail: "/media/111_00086402.png" },
	{ id: 2, title: "Arctic Frost", thumbnail: "/media/111_00086402.png" },
	{ id: 3, title: "Shadow Walker", thumbnail: "/media/111_00086402.png" },
	{ id: 4, title: "Neon Striker", thumbnail: "/media/111_00086402.png" },
	{ id: 5, title: "Golden Phoenix", thumbnail: "/media/111_00086402.png" },
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
	const { scrollYProgress } = useScroll();
	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
				return personalProjects;
			case "visualizers":
				return visualizers;
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
					<motion.div
						style={{ y: backgroundY }}
						className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"
					/>

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

										{/* Hover Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
											<div className="absolute bottom-0 left-0 right-0 p-4">
												<p className="font-mono text-xs text-accent mb-1">
													0{image.id}
												</p>
												<h3 className="text-lg font-light">{image.title}</h3>
											</div>
										</div>

										{/* Corner Accents */}
										<div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
										<div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent/0 group-hover:border-accent/50 transition-all duration-300" />
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Section 02: Personal Projects */}
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
											PERSONAL PROJECTS
										</p>
									</div>
									<h2 className="text-4xl md:text-5xl font-light">
										My Projects
									</h2>
								</div>
							</div>
							<motion.button
								whileHover={{ scale: 1.05, x: 5 }}
								onClick={() => openModal("personal", "Personal Projects")}
								className="hidden md:flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors"
							>
								VIEW ALL <ArrowUpRight className="w-4 h-4" />
							</motion.button>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
							{personalProjects.slice(0, 2).map((video, index) => (
								<motion.div
									key={video.id}
									initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="group relative"
								>
									<div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/50 transition-all duration-500 hover:border-accent/50">
										<Image
											src={video.thumbnail}
											alt={video.title}
											fill
											sizes="(max-width: 768px) 100vw, 50vw"
											className="object-cover"
										/>
										{/* Play Button Overlay */}
										<div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 flex items-center justify-center">
											<motion.div
												whileHover={{ scale: 1.1 }}
												className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center cursor-pointer shadow-lg shadow-accent/30"
											>
												<div className="w-0 h-0 border-l-[16px] border-l-background border-y-[10px] border-y-transparent ml-1" />
											</motion.div>
										</div>

										{/* Duration Badge */}
										<div className="absolute bottom-4 right-4 font-mono text-xs bg-background/90 px-3 py-1 rounded-full">
											{video.duration}
										</div>

										{/* Scanline Effect */}
										<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
									</div>

									{/* Info */}
									<div className="mt-4 flex items-start justify-between">
										<div>
											<h3 className="text-lg font-light group-hover:text-accent transition-colors">
												{video.title}
											</h3>
											<p className="font-mono text-xs text-muted-foreground mt-1">
												{video.views} views
											</p>
										</div>
										<motion.div
											whileHover={{ scale: 1.1, rotate: 45 }}
											className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all cursor-pointer"
										>
											<ExternalLink className="w-4 h-4" />
										</motion.div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Section 03: Music Visualizers */}
				<section className="py-32 px-8 md:px-12 relative">
					<motion.div
						style={{ y: backgroundY }}
						className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"
					/>

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
										<Play className="w-5 h-5 text-accent" />
										<p className="font-mono text-xs tracking-[0.3em] text-accent">
											AUDIO VISUAL
										</p>
									</div>
									<h2 className="text-4xl md:text-5xl font-light">
										Music Visualizers
									</h2>
								</div>
							</div>
							<motion.button
								whileHover={{ scale: 1.05, x: 5 }}
								onClick={() => openModal("visualizers", "Music Visualizers")}
								className="hidden md:flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors"
							>
								VIEW ALL <ArrowUpRight className="w-4 h-4" />
							</motion.button>
						</motion.div>

						{/* Video Grid for Visualizers - One Row */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
							{visualizers.slice(0, 3).map((viz, index) => (
								<motion.div
									key={viz.id}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="group"
								>
									<div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-500 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20">
										<Image
											src={viz.thumbnail}
											alt={viz.title}
											fill
											sizes="(max-width: 768px) 100vw, 33vw"
											className="object-cover"
										/>
										{/* Play Overlay */}
										<div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 flex items-center justify-center">
											<motion.div
												whileHover={{ scale: 1.15 }}
												className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center cursor-pointer shadow-lg shadow-accent/40"
											>
												<Play
													className="w-6 h-6 text-background ml-1"
													fill="currentColor"
												/>
											</motion.div>
										</div>

										{/* Duration Badge */}
										<div className="absolute bottom-3 right-3 font-mono text-xs bg-background/90 px-2 py-1 rounded-full">
											{viz.duration}
										</div>

										{/* Hover Glow */}
										<div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />

										{/* Scanline Effect */}
										<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
									</div>

									<div className="mt-4 flex items-start justify-between">
										<div>
											<h3 className="text-base font-light group-hover:text-accent transition-colors">
												{viz.title}
											</h3>
											<p className="font-mono text-xs text-muted-foreground mt-1">
												for {viz.artist}
											</p>
										</div>
										<span className="font-mono text-xs text-muted-foreground">
											{viz.views} views
										</span>
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

										{/* Info Overlay */}
										<div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background to-transparent">
											<p className="font-mono text-xs text-accent mb-2">
												{poster.client}
											</p>
											<h3 className="text-xl font-light">{poster.title}</h3>
										</div>

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

					<motion.div
						style={{ y: backgroundY }}
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px] pointer-events-none"
					/>

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

						{/* 5 Image Grid */}
						<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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

										{/* Hover Overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
											<div className="absolute bottom-0 left-0 right-0 p-4 text-center">
												<h3 className="text-sm font-light">{skin.title}</h3>
											</div>
										</div>

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
