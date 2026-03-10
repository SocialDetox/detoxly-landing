"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.anirudhlabs.detoxly"

export function StickyHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo + wordmark */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/app-icon.png"
            alt="Detoxly app icon"
            width={32}
            height={32}
            className="rounded-xl"
          />
          <span className="text-xl sm:text-2xl font-semibold tracking-tight bg-gradient-to-r from-[#00838F] via-[#00ACC1] to-[#6C63FF] bg-clip-text text-transparent">
            Detoxly
          </span>
        </div>

        {/* Play Store button */}
        <motion.a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 shadow-lg shadow-[#00838F]/30 transition-colors whitespace-nowrap"
        >
          <Play className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Get Detoxly on Google Play</span>
        </motion.a>
      </div>
    </motion.header>
  )
}

