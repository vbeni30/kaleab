"use client"

import type React from "react"
import { useState, useRef, memo } from "react"
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

const services = [
  {
    title: "3D & VFX Production",
    description: "Embark on a visual journey where creativity meets technical prowess.",
    icon: "◆",
  },
  {
    title: "Video & Color Editing",
    description: "From storytelling to advanced color grading, enhancing visuals into eye-catching productions.",
    icon: "▲",
  },
  {
    title: "Compositing",
    description: "Seamlessly blending elements to create cohesive visual narratives.",
    icon: "●",
  },
  {
    title: "Motion Graphics",
    description: "Dynamic visuals that bring stories and brands to life.",
    icon: "◇",
  },
]

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-white/5 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-white/60 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-white">
                A masterpiece of visual storytelling.
              </span>{" "}
              Crafted with precision and artistic vision, blending cutting-edge
              technology with creative excellence to deliver extraordinary visual
              experiences that captivate and inspire.
            </p>
          </div>
        );
      })}
    </>
  );
};

const carouselData = [
  {
    category: "3D & VFX",
    title: "Cinematic VFX Reel",
    src: "/media/beach 2 tone.png",
    content: <DummyContent />,
  },
  {
    category: "Video Editing",
    title: "Brand Film Production",
    src: "/media/hog new/IMG_20250422_195916_405.png",
    content: <DummyContent />,
  },
  {
    category: "3D Design",
    title: "3D Environment Creation",
    src: "/media/hog new/IMG_20250422_195511_256.png",
    content: <DummyContent />,
  },
  {
    category: "Motion Graphics",
    title: "Dynamic Motion Piece",
    src: "/Poster 7.png",
    content: <DummyContent />,
  },
  {
    category: "VFX",
    title: "Commercial Spot",
    src: "/Poster 8.png",
    content: <DummyContent />,
  },
  {
    category: "Video Editing",
    title: "Music Video Production",
    src: "/Poster 5.png",
    content: <DummyContent />,
  },
]

const showcaseItems = [
  { id: 1, category: "3D & VFX", title: "Cinematic VFX Reel", year: "2023" },
  { id: 2, category: "Video Editing", title: "Brand Film Production", year: "2022" },
  { id: 3, category: "3D Design", title: "3D Environment Creation", year: "2021" },
  { id: 4, category: "Motion Graphics", title: "Dynamic Motion Piece", year: "2023" },
  { id: 5, category: "VFX", title: "Commercial Spot", year: "2022" },
  { id: 6, category: "Video Editing", title: "Music Video Production", year: "2021" },
]

function WorksContent() {
  const [activeService, setActiveService] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -300])
  const marqueeX2 = useTransform(scrollYProgress, [0, 1], [-300, 0], { clamp: true })

  const cards = carouselData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ))

  return (
    <section id="works" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-8 md:px-12 mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">02 — FEATURED WORK</p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight">
          Selected <span className="italic text-accent">Works</span>
        </h2>
      </motion.div>

      <div className="relative mb-32">
        {/* Double marquee background text */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{ x: marqueeX }}
            className="absolute top-0 left-0 whitespace-nowrap text-[150px] md:text-[200px] font-bold text-white/[0.02] tracking-tighter leading-none"
          >
            VISUAL ARTIST • VFX • 3D • MOTION • CREATIVE •
          </motion.div>
          <motion.div
            style={{ x: marqueeX2 }}
            className="absolute bottom-0 left-0 whitespace-nowrap text-[150px] md:text-[200px] font-bold text-white/[0.02] tracking-tighter leading-none"
          >
            CINEMATIC • COMPOSITING • EDITING • STORYTELLING •
          </motion.div>
        </div>

        {/* Apple Cards Carousel */}
        <Carousel items={cards} />

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center px-8 md:px-12"
        >
          <Link href="/projects" className="group relative inline-flex items-center gap-4 px-10 py-5 overflow-hidden">
            <span className="absolute inset-0 border border-white/20 rounded-full transition-all duration-500 group-hover:border-accent group-hover:scale-105" />
            <span className="absolute inset-0 bg-accent/0 rounded-full transition-all duration-500 group-hover:bg-accent/10" />
            <span className="relative font-mono text-sm tracking-[0.2em]">VIEW ALL PROJECTS</span>
            <motion.span
              className="relative"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>

      {/* Services Section - unchanged */}
      <div className="px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">03 — SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-sans font-light">What I Do</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveService(index)}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                activeService === index
                  ? "bg-accent/10 border-accent/30"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20"
              }`}
            >
              <div
                className={`text-3xl mb-4 transition-colors duration-300 ${
                  activeService === index ? "text-accent" : "text-white/30"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-sans font-light mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>

              <motion.div
                animate={{
                  x: activeService === index ? 0 : -10,
                  opacity: activeService === index ? 1 : 0,
                }}
                className="absolute bottom-8 right-8"
              >
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>

              {activeService === index && <div className="absolute inset-0 rounded-2xl bg-accent/5 blur-xl -z-10" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Works = memo(WorksContent)
