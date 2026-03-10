"use client"

import { motion } from "framer-motion"
import { Trophy, Flame, Clock } from "lucide-react"

const metrics = [
  {
    icon: Trophy,
    title: "Global Points",
    description: "Earn points for every focused minute.",
  },
  {
    icon: Flame,
    title: "Current Streak",
    description: "Build unbreakable daily habits.",
  },
  {
    icon: Clock,
    title: "Total Focus Time",
    description: "Track your lifetime mindfulness.",
  },
]

export function MetricsStrip() {
  return (
    <section className="relative py-14 md:py-16 px-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00838F]/5 via-transparent to-[#6C63FF]/5" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Glassmorphic container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00838F]/20 to-[#6C63FF]/20 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon className="w-8 h-8 text-[#00ACC1]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-slate-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Footer text */}
          <p className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-[#00838F] rounded-full animate-pulse" />
            Your data securely backed up to the cloud via Supabase.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
