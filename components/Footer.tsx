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
        {/* Final CTA */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Your time is your life. Protect it.
          </h3>
          <a
            href="https://play.google.com/store/apps/details?id=com.anirudhlabs.detoxly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#00838F]/60 text-sm font-semibold text-slate-100 hover:bg-[#00838F]/10 transition-colors"
          >
            Download Detoxly
          </a>
        </div>

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
              href="https://sumptuous-cake-765.notion.site/Privacy-Policy-Detoxly-301a49f3d5cd803f8dd5cca7ec3d4ca0"
              target="_blank"
              rel="noopener noreferrer"
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
