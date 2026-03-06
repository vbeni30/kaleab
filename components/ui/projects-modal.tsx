"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface Project {
	id?: number;
	title: string;
	thumbnail?: string;
	artist?: string;
	client?: string;
	views?: string;
	duration?: string;
}

interface ProjectsModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	projects: Project[];
	type: "all" | "personal" | "visualizers" | "posters" | "skins";
}

export function ProjectsModal({
	isOpen,
	onClose,
	title,
	projects,
	type,
}: ProjectsModalProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.3 },
		},
		exit: {
			opacity: 0,
			transition: { duration: 0.3 },
		},
	};

	const modalVariants: Variants = {
		hidden: { scale: 0.95, opacity: 0, y: 20 },
		visible: {
			scale: 1,
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, ease: "easeOut" },
		},
		exit: {
			scale: 0.95,
			opacity: 0,
			y: 20,
			transition: { duration: 0.2 },
		},
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="fixed inset-0 z-50 flex items-center justify-center p-4"
					onClick={onClose}
				>
					{/* Backdrop */}
					<motion.div
						className="absolute inset-0 bg-black/60 backdrop-blur-sm"
						onClick={onClose}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					/>

					{/* Modal */}
					<motion.div
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="relative w-full max-w-6xl max-h-[90vh] bg-background border border-white/10 rounded-3xl flex flex-col"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header */}
						<div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-white/10 px-8 py-6 flex items-center justify-between">
							<div>
								<p className="font-mono text-xs text-accent mb-2">
									ALL {title.toUpperCase()}
								</p>
								<h2 className="text-3xl md:text-4xl font-light">{title}</h2>
							</div>
							<motion.button
								whileHover={{ scale: 1.1, rotate: 90 }}
								whileTap={{ scale: 0.95 }}
								onClick={onClose}
								className="p-2 hover:bg-white/10 rounded-full transition-colors"
							>
								<X className="w-6 h-6" />
							</motion.button>
						</div>

						{/* Content - Independent Scroll */}
						<div className="overflow-y-auto flex-1 px-8 py-8 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent">
							<div
								className={`grid gap-6 ${
									type === "posters"
										? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
										: type === "skins"
											? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
											: "grid-cols-1 md:grid-cols-2 gap-8"
								}`}
							>
								{projects.map((project, index) => (
									<motion.div
										key={project.id || index}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: index * 0.05 }}
										className="group"
									>
										<div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-accent/50 transition-all duration-300">
											<Image
												src={project.thumbnail || "/media/111_00086402.png"}
												alt={project.title}
												fill
												sizes="(max-width: 768px) 100vw, 25vw"
												className="object-cover"
											/>

											{/* Hover Glow */}
											<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/5" />
										</div>
										<div className="mt-4">
											<h3 className="text-lg font-light group-hover:text-accent transition-colors">
												{project.title}
											</h3>
											{project.artist && (
												<p className="text-sm text-muted-foreground mt-1">
													{project.artist}
												</p>
											)}
											{project.client && (
												<p className="text-sm text-muted-foreground mt-1">
													{project.client}
												</p>
											)}
											{project.views && (
												<p className="font-mono text-xs text-muted-foreground mt-1">
													{project.views} views
												</p>
											)}
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
