"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"

const skills = [
  { name: "3D & VFX", level: 90, icon: "◆" },
  { name: "Video Editing", level: 86, icon: "▲" },
  { name: "Compositing", level: 66, icon: "●" },
]

const tools = ["Blender", "After Effects", "DaVinci Resolve", "Premiere Pro", "Cinema 4D", "Nuke"]

const carouselImages = [
  "/Figure Seven.jpg",
  "/media/web/15.png",
  "/media/hog new/IMG_20250422_195511_256.png",
]

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" ref={containerRef} className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.span
          style={{ y: textY }}
          className="text-[20vw] font-sans font-bold text-white/[0.02] whitespace-nowrap select-none"
        >
          CREATIVE
        </motion.span>
      </div>

      <div className="relative px-8 md:px-12 w-full h-full flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 w-full items-center">
          {/* Left - Large image carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center"
          >
            <motion.div style={{ y: imageY }} className="relative w-full h-full">
              {/* Main image frame */}
              <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/5 to-transparent">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={carouselImages[currentImageIndex] || "/placeholder.svg"}
                      alt={`Portfolio work ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Carousel indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {carouselImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className="w-2 h-2 rounded-full bg-white/40 transition-all"
                      animate={{
                        backgroundColor: currentImageIndex === index ? "rgba(239, 68, 68, 1)" : "rgba(255, 255, 255, 0.4)",
                        width: currentImageIndex === index ? "24px" : "8px",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
              {/* Decorative offset frame */}
              <div className="absolute -bottom-4 -right-4 inset-0 border border-white/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-8 -right-8 inset-0 border border-white/5 rounded-2xl -z-20" />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center h-full">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 md:mb-8"
            >
              <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">01 — ABOUT ME</p>
            </motion.div>

            {/* Big statement */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-sans font-light leading-tight mb-6 md:mb-8"
            >
              Crafting <span className="italic text-accent">immersive</span> visual experiences
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base md:text-lg text-white/60 leading-relaxed mb-8 md:mb-10 max-w-xl"
            >
              A passion for visuals drives everything I create. From shaping immersive 3D worlds to refining the
              smallest details in post-production, I merge creativity with precision to tell stories that leave a mark.
            </motion.p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-accent text-sm">{skill.icon}</span>
                      <span className="font-mono text-sm tracking-wide">{skill.name}</span>
                    </div>
                    <span className="font-mono text-xs text-white/40">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full bg-gradient-to-r from-accent to-accent/50 rounded-full relative"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 mb-4">TOOLS I USE</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(239, 68, 68, 0.1)" }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-xs text-white/60 cursor-default transition-colors"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
