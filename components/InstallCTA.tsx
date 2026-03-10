"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.anirudhlabs.detoxly"

export function InstallCTA() {
  return (
    <section className="px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto my-12 md:my-20 p-10 md:p-12 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Take Back Control of Your Attention?
        </h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Commit to focused, verified time off your phone and turn your digital detox into a game you can actually win.
        </p>

        <motion.a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#00838F] via-[#00ACC1] to-[#6C63FF] whitespace-nowrap text-white font-semibold text-base sm:text-lg shadow-lg shadow-[#00838F]/40 hover:shadow-[#00838F]/60 transition-shadow"
        >
          <Play className="w-5 h-5 hidden sm:inline-block" />
          <span>Get Detoxly on Google Play</span>
        </motion.a>
      </motion.div>
    </section>
  )
}

