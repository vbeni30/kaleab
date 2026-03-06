"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      const milliseconds = now.getMilliseconds().toString().padStart(3, "0")
      setTime(`${hours}:${minutes}:${seconds}.${milliseconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="contact" className="relative">
      {/* Main CTA - Updated to link to contact page */}
      <Link
        href="/contact"
        data-cursor-hover
        className="relative block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Curtain - Changed to red accent */}
        <motion.div
          className="absolute inset-0 bg-accent"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Content */}
        <div className="relative py-16 md:py-24 px-8 md:px-12 border-t border-white/10">
          <div className="flex flex-col gap-4 mb-8">
            <motion.h2
              className="font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight"
              animate={{
                color: isHovered ? "#050505" : "#fafafa",
              }}
              transition={{ duration: 0.3 }}
            >
              Let's Create Something <span className="italic">Extraordinary</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl max-w-2xl"
              animate={{
                color: isHovered ? "#050505" : "rgba(250,250,250,0.6)",
              }}
              transition={{ duration: 0.3 }}
            >
              Interested in collaboration, project inquiries, or just want to say hello? I'm always open to exploring
              new creative horizons.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <motion.span
              className="font-mono text-sm tracking-widest uppercase border border-current px-8 py-4 rounded-full"
              animate={{
                color: isHovered ? "#050505" : "#fafafa",
                borderColor: isHovered ? "#050505" : "rgba(255,255,255,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              Hit Me Up
            </motion.span>

            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
                color: isHovered ? "#050505" : "#fafafa",
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          </div>
        </div>
      </Link>

      {/* Footer Info */}
      <div className="px-8 md:px-12 py-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Local Time */}
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            <span className="mr-2">LOCAL TIME</span>
            <span className="text-foreground tabular-nums">{time}</span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {["LinkedIn", "Instagram", "Behance"].map((link) => (
              <a
                key={link}
                href="#"
                data-cursor-hover
                className="font-mono text-xs tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} KALEAB TAMIRU
          </p>
        </div>

        {/* Developer Credit */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            Developed by{" "}
            <a
              href="https://vbeni.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="text-accent hover:text-accent/80 transition-colors duration-300"
            >
              vbeni
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
