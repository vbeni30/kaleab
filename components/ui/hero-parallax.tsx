"use client";

import {
	type MotionValue,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import Image from "next/image";
import React from "react";

const HeroParallax = ({
	products,
}: {
	products: {
		title: string;
		link: string;
		thumbnail: string;
		category?: string;
	}[];
}) => {
	const firstRow = products.slice(0, 5);
	const secondRow = products.slice(5, 10);
	const thirdRow = products.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const springConfig = { stiffness: 260, damping: 38, bounce: 0 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig,
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig,
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig,
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig,
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig,
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig,
	);

	return (
		<div
			ref={ref}
			className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
		>
			<Header />
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=""
			>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((product, i) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
							priority={i < 2}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row mb-20 space-x-20">
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</motion.div>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
					{thirdRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

const Header = () => {
	return (
		<div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="font-mono text-xs tracking-[0.3em] text-accent mb-6"
			>
				VISUAL PORTFOLIO
			</motion.p>
			<motion.h1
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.1 }}
				className="text-4xl md:text-7xl font-bold text-foreground"
			>
				Creative <span className="italic text-accent">Visions</span>
				<br />
				Brought to Life
			</motion.h1>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="max-w-2xl text-base md:text-xl mt-8 text-muted-foreground"
			>
				Explore a curated collection of 3D artistry, visual effects, and motion
				design that pushes the boundaries of digital creativity.
			</motion.p>
		</div>
	);
};

const ProductCard = ({
	product,
	translate,
	priority = false,
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
		category?: string;
	};
	translate: MotionValue<number>;
	priority?: boolean;
}) => {
	return (
		<motion.div
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className="group/product h-96 w-[30rem] relative shrink-0"
		>
			<a
				href={product.link}
				className="block group-hover/product:shadow-2xl group-hover/product:shadow-accent/20"
			>
				<div className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
					<Image
						src={product.thumbnail}
						alt={product.title}
						fill
						sizes="(max-width: 768px) 80vw, 30rem"
						className="object-cover"
						priority={priority}
					/>
				</div>
			</a>
			<div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none rounded-xl transition-opacity duration-300"></div>
			{product.category && (
				<span className="absolute top-4 left-4 font-mono text-[10px] tracking-wider px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
					{product.category}
				</span>
			)}
			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-foreground text-xl font-light transition-opacity duration-300">
				{product.title}
			</h2>
		</motion.div>
	);
};

export { Header, HeroParallax, ProductCard };
