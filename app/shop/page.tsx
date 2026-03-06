"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Bell } from "lucide-react"
import { useState } from "react"

export default function ShopPage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/media/111_00086402.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/5" />
        </div>

        <section className="relative z-10 min-h-screen flex items-center justify-center px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-12"
            >
              <div className="w-32 h-32 mx-auto border border-accent/30 rounded-full flex items-center justify-center relative">
                <div
                  className="absolute inset-0 border border-accent/20 rounded-full animate-ping"
                  style={{ animationDuration: "3s" }}
                />
                <div className="absolute inset-4 border border-accent/10 rounded-full" />
                <Bell className="w-12 h-12 text-accent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="font-mono text-xs tracking-[0.4em] text-accent mb-6">DIGITAL PRODUCTS</p>
              <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8">
                Coming <span className="italic text-accent">Soon</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
                Premium digital assets, templates, and tools to elevate your creative workflow. Be the first to know
                when we launch.
              </p>
            </motion.div>

            {/* Email Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {!subscribed ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-6 py-4 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-accent transition-colors"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="font-mono text-xs tracking-widest uppercase bg-accent text-background px-8 py-4 rounded-full hover:bg-accent/90 transition-colors"
                  >
                    Notify Me
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/10 border border-accent/30 rounded-full px-8 py-4 inline-block"
                >
                  <p className="font-mono text-sm tracking-widest text-accent">YOU'RE ON THE LIST!</p>
                </motion.div>
              )}
            </motion.div>

            {/* Upcoming Products Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-24"
            >
              <p className="font-mono text-xs tracking-widest text-muted-foreground mb-8">WHAT'S COMING</p>
              <div className="flex flex-wrap justify-center gap-4">
                {["3D Assets", "LUT Packs", "Motion Templates", "VFX Elements", "Presets"].map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="font-mono text-xs tracking-widest px-4 py-2 border border-white/10 rounded-full text-muted-foreground"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Decorative Grid */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </div>
      </main>
    </SmoothScroll>
  )
}
