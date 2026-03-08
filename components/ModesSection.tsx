"use client"

import { motion } from "framer-motion"
import { Briefcase, Brain, Users, Settings } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Mode {
  icon: LucideIcon
  title: string
  color: string
}

const modes: Mode[] = [
  {
    icon: Briefcase,
    title: "Work",
    color: "#00838F",
  },
  {
    icon: Brain,
    title: "Deep Focus",
    color: "#6C63FF",
  },
  {
    icon: Users,
    title: "Social Detox",
    color: "#00ACC1",
  },
  {
    icon: Settings,
    title: "Custom",
    color: "#9D4EDD",
  },
]

export function ModesSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-[#00838F] to-[#6C63FF] bg-clip-text text-transparent">
              Battle Mode
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Pre-configured profiles designed for different focus scenarios. Or create your own.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full">
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                  style={{ backgroundColor: `${mode.color}30` }}
                />
                
                {/* Card */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center group-hover:border-white/20 transition-colors">
                  <div 
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${mode.color}20` }}
                  >
                    <mode.icon 
                      className="w-7 h-7 lg:w-8 lg:h-8" 
                      style={{ color: mode.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-white">
                    {mode.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
