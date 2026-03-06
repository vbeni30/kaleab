"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Send, ArrowUpRight, Mail, MapPin, Zap } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "hello@kaleabtamiru.com",
      link: "mailto:hello@kaleabtamiru.com",
    },
    {
      icon: MapPin,
      label: "BASED IN",
      value: "Ethiopia",
      link: "#",
    },
    {
      icon: Zap,
      label: "STATUS",
      value: "Available for Projects",
      link: "#",
    },
  ]

  const socials = [
    { name: "LinkedIn", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Behance", url: "#" },
  ]

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen relative pt-32">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/media/111_00086402.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/90" />
          
          {/* Animated accent blobs */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none"
          />
        </div>

        {/* Content */}
        <section className="relative z-10 pb-20 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">GET IN TOUCH</p>
              <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 text-balance">
                Let's Create <span className="italic text-accent block mt-2">Something Extraordinary</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Ready to collaborate on your next big project? I'm here to help bring your creative vision to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* Contact Methods */}
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={index}
                    href={method.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-accent/30 hover:bg-white/10 transition-all duration-500">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">{method.label}</p>
                      <p className="text-xl md:text-2xl font-light group-hover:text-accent transition-colors duration-300">
                        {method.value}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="font-mono text-xs">Connect</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left - Social Links and Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-3xl font-light mb-8">Let's Connect</h2>
                
                <div className="space-y-4 mb-12">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="group flex items-center justify-between p-4 rounded-2xl border border-white/10 hover:border-accent/30 bg-white/5 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-mono text-sm tracking-wider">{social.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                  <p className="font-mono text-xs tracking-widest text-muted-foreground mb-4">QUICK RESPONSE</p>
                  <p className="text-lg text-white leading-relaxed">
                    I typically respond within 24 hours. For urgent projects, mention it in your message and I'll prioritize accordingly.
                  </p>
                </div>
              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-mono text-xs tracking-widest text-muted-foreground mb-3 block">NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl focus:border-accent focus:bg-white/10 px-6 py-4 text-lg outline-none transition-all duration-300 placeholder:text-muted-foreground/40"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs tracking-widest text-muted-foreground mb-3 block">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl focus:border-accent focus:bg-white/10 px-6 py-4 text-lg outline-none transition-all duration-300 placeholder:text-muted-foreground/40"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs tracking-widest text-muted-foreground mb-3 block">
                      PROJECT TYPE
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl focus:border-accent focus:bg-white/10 px-6 py-4 text-lg outline-none transition-all duration-300 cursor-pointer"
                      required
                    >
                      <option value="" className="bg-background">
                        Select a service
                      </option>
                      <option value="3d-vfx" className="bg-background">
                        3D / VFX Production
                      </option>
                      <option value="video-editing" className="bg-background">
                        Video & Color Editing
                      </option>
                      <option value="compositing" className="bg-background">
                        Compositing
                      </option>
                      <option value="motion-graphics" className="bg-background">
                        Motion Graphics
                      </option>
                      <option value="other" className="bg-background">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-xs tracking-widest text-muted-foreground mb-3 block">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl focus:border-accent focus:bg-white/10 px-6 py-4 text-lg outline-none transition-all duration-300 resize-none placeholder:text-muted-foreground/40"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group w-full flex items-center justify-center gap-3 font-mono text-sm tracking-widest uppercase font-semibold px-8 py-5 rounded-2xl transition-all duration-300 ${
                      isSubmitted
                        ? "bg-accent/20 border border-accent text-accent"
                        : "bg-accent text-background hover:bg-accent/90 border border-accent"
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <span>✓ Message Sent</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative z-10 px-8 md:px-12 py-8 border-t border-white/10 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-mono text-xs tracking-widest text-muted-foreground">
              Available for freelance & full-time opportunities
            </p>
            <p className="font-mono text-xs tracking-widest text-muted-foreground">
              © {new Date().getFullYear()} KALEAB TAMIRU
            </p>
          </div>
        </motion.div>
      </main>
    </SmoothScroll>
  )
}
