"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex items-center gap-3">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PlayStoreAppIcon_ChatGPT-EMsjRpkUZNgQcevnl1MFT8bmVt6VPg.png"
              alt="Detoxly Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="text-slate-400 text-sm">
              © 2026 Detoxly.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="/privacy"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="mailto:anirudhlabs@gmail.com"
              className="text-slate-400 hover:text-[#00ACC1] text-sm transition-colors"
            >
              Contact: anirudhlabs@gmail.com
            </a>
          </div>
        </div>

        {/* Decorative gradient line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#00838F]/30 to-transparent" />
        
        {/* Tagline */}
        <p className="mt-6 text-center text-xs text-slate-600">
          Built with focus. For those who want it back.
        </p>
      </motion.div>
    </footer>
  )
}
