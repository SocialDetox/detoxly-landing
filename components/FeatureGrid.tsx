"use client"

import { motion } from "framer-motion"
import { Activity, Shield, Ghost, Timer, Sword } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Feature {
  icons: LucideIcon[]
  title: string
  description: string
  gradient: string
}

const features: Feature[] = [
  {
    icons: [Activity, Shield],
    title: "Trust, But Verify.",
    description: "We don't hijack your phone. Commit to your time, and our smart background engine monitors your native usage stats. Cheat, and you lose your bonus. Focus, and you level up.",
    gradient: "from-[#00838F] to-[#00ACC1]",
  },
  {
    icons: [Ghost, Timer],
    title: "Ghost Protocol & 45s Grace Period.",
    description: "Initiate Exit Protocol. Get a tactical 45-second window to share your 'Offline' status card to WhatsApp or Instagram before the shield locks you in. Public commitment is the ultimate accountability hack.",
    gradient: "from-[#6C63FF] to-[#9D4EDD]",
  },
  {
    icons: [Shield, Sword],
    title: "Evolvable Shields.",
    description: "Your app lifetime minutes dictate your rank. Watch your protected apps level up from Bronze (60m) to Gold (1,500m) all the way to the elusive Amethyst Shield (9,000m).",
    gradient: "from-[#00838F] to-[#6C63FF]",
  },
]

export function FeatureGrid() {
  return (
    <section className="relative py-20 md:py-24 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00838F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built Different.{" "}
            <span className="bg-gradient-to-r from-[#00838F] to-[#6C63FF] bg-clip-text text-transparent">
              Works Different.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            No force-blocking. No frustration. Just intelligent accountability that respects your autonomy.
          </p>
        </motion.div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Icon display */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-2xl opacity-30 scale-150`} />
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center gap-4">
                    {feature.icons.map((Icon, i) => (
                      <Icon
                        key={i}
                        className={`w-12 h-12 sm:w-14 sm:h-14 ${
                          i === 0 ? "text-[#00ACC1]" : "text-[#6C63FF]"
                        }`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className={`flex-1 text-center ${
                index % 2 === 0 ? "lg:text-left" : "lg:text-right"
              }`}>
                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
