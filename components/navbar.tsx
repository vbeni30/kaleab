"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
]

const PILL_WIDTH = 80

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("/#")) return pathname === "/"
    return pathname.startsWith(href)
  }

  const activeIndex = navLinks.findIndex((link) => isActive(link.href))

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-fit"
      >
        <nav className="flex items-center justify-between gap-8 px-8 py-4 rounded-full bg-background/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-accent/5 hover:border-white/20 transition-all duration-500">
          <Link href="/" className="group flex items-center gap-3">
            <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
              <Image
                src="/logo.png"
                alt="Kaleab Tamiru Logo"
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="relative flex items-center bg-white/[0.03] rounded-full border border-white/[0.08] p-0.5">
              {/* Animated pill indicator - moves horizontally */}
              <motion.div
                className="absolute top-1 bottom-1 rounded-full bg-accent"
                initial={false}
                animate={{
                  x: activeIndex * PILL_WIDTH,
                  width: PILL_WIDTH,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
                style={{
                  boxShadow: "0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.2)",
                }}
              />

              {/* Nav links */}
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative z-10 font-mono text-[10px] tracking-[0.12em] transition-colors duration-300"
                    style={{ width: PILL_WIDTH, textAlign: "center", padding: "8px 0" }}
                  >
                    <span className={active ? "text-white font-medium" : "text-white/40 hover:text-white/70"}>
                      {link.label.toUpperCase()}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2 ml-4 pl-4 border-l border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-[9px] tracking-wider text-accent whitespace-nowrap">AVAILABLE</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white/5 rounded-full border border-white/10"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-4 h-0.5 bg-foreground origin-center"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="w-4 h-0.5 bg-foreground"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-4 h-0.5 bg-foreground origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, index) => {
                const active = isActive(link.href)
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-64"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative block text-center text-3xl font-sans tracking-tight py-4 rounded-full transition-all ${
                        active ? "bg-accent text-white" : "text-white/50 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 mt-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="font-mono text-xs tracking-wider text-accent">AVAILABLE FOR PROJECTS</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
