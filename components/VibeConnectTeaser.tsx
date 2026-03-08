"use client"

import { motion } from "framer-motion"
import { Users, Sparkles, Heart } from "lucide-react"

export function VibeConnectTeaser() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Deep purple background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6C63FF]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9D4EDD]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6C63FF]/15 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Glassmorphic card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-16 text-center">
          {/* Floating icons */}
          <div className="flex justify-center gap-6 mb-8">
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-[#6C63FF]/20 flex items-center justify-center"
            >
              <Users className="w-6 h-6 text-[#6C63FF]" />
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-[#9D4EDD]" />
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-[#6C63FF]/20 flex items-center justify-center"
            >
              <Heart className="w-6 h-6 text-[#6C63FF]" />
            </motion.div>
          </div>

          {/* Badge */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(108, 99, 255, 0.3)",
                "0 0 40px rgba(108, 99, 255, 0.5)",
                "0 0 20px rgba(108, 99, 255, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30"
          >
            <span className="text-[#9D4EDD] text-sm font-medium uppercase tracking-wider">
              Coming Soon
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-white mb-6">
            VIBE{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#9D4EDD] bg-clip-text text-transparent">
              CONNECT
            </span>
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Digital detox doesn&apos;t have to be lonely. Soon, you will match with users who share 
            your digital habits. Find your focus tribe and hold each other accountable.
          </p>

          {/* Decorative elements */}
          <div className="mt-10 flex justify-center gap-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1] 
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                className="w-2 h-2 rounded-full bg-[#6C63FF]"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
