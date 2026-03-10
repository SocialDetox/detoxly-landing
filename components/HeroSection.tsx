"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 lg:py-0">
      {/* Background glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00838F]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00838F]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-8 items-center pt-16 md:pt-20 pb-6 md:pb-10">

        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="flex flex-col items-start text-left relative z-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              <span className="bg-gradient-to-r from-[#00838F] via-[#00ACC1] to-[#6C63FF] bg-clip-text text-transparent">
                Imagine Your Phone Quiet.
              </span>
              <br />
              <span className="text-white">And Your Mind Louder.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl text-pretty">
              Detoxly turns screen-time into a game you actually want to win.
              Make a promise, build willpower, prove your focus, and let your friends
              see the version of you that isn&apos;t glued to a feed.
            </p>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.anirudhlabs.detoxly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00838F] to-[#006064] rounded-full text-white font-semibold text-lg shadow-lg shadow-[#00838F]/30 hover:shadow-[#00838F]/50 transition-shadow"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
              </svg>
              Get Detoxly on Google Play
            </motion.a>
            <p className="mt-3 text-sm text-slate-400 font-medium">
              Start your first 15-minute detox session today.
            </p>
          </div>
        </motion.div>

        {/* Right Side - Phone mockup only (no banner) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative origin-bottom scale-[0.7] sm:scale-75 md:scale-90 lg:scale-100"
          >
            {/* Glow effect behind phone */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00838F]/40 to-[#6C63FF]/40 blur-3xl scale-150 pointer-events-none" />

            {/* Phone frame */}
            <div className="relative w-72 h-[530px] bg-slate-950 rounded-[2.5rem] border-4 border-slate-800 shadow-2xl shadow-cyan-500/30 overflow-hidden flex flex-col">

              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-10" />

              {/* Screen content */}
              <div className="flex-1 flex flex-col p-4 pt-8 bg-gradient-to-b from-slate-950 via-[#0a0a0f] to-slate-950 overflow-hidden">

                {/* Daily Focus Section */}
                <div className="mb-3">
                  <p className="text-white/70 text-xs font-medium mb-2">Daily Focus</p>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3">
                    <p className="text-3xl font-bold text-white tracking-tight">0h 30m</p>
                    <p className="text-white/50 text-xs mt-0.5">Saved Today</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-orange-500 text-xs">🔥</span>
                      <span className="text-white/60 text-xs">4 Days</span>
                    </div>
                    <button className="w-full mt-2 py-2 bg-[#6C63FF] hover:bg-[#5B54E8] rounded-lg text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>

                {/* Detox Modes Section */}
                <div className="mb-3">
                  <p className="text-white/70 text-xs font-medium mb-2">Detox Modes</p>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      {/* Circular Dial */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-slate-800/80 border border-slate-700" />
                        <div className="absolute inset-2 rounded-full bg-slate-900/90 flex items-center justify-center">
                          <span className="text-[#FF6B35] text-[8px] font-bold uppercase tracking-wider">Modes</span>
                        </div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0.5 w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full border-2 border-white" />
                        </div>
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-0.5 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        </div>
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-0.5 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-slate-500" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }} />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0.5 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-slate-500" />
                        </div>
                      </div>

                      {/* Mode Info */}
                      <div className="flex-1">
                        <p className="text-[#FF6B35] font-semibold text-sm">Deep Focus</p>
                        <button className="mt-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white text-[10px] font-medium transition-colors">
                          Start Mode
                        </button>
                        <p className="text-white/40 text-[9px] mt-1.5 leading-tight">Maximal blocking for deep focus.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Protected Apps Section */}
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-medium mb-2">Protected Apps</p>
                  <div className="flex gap-2">
                    {/* Twitter Card */}
                    <div className="flex-1 bg-white/5 backdrop-blur-xl border-l-2 border-l-[#00838F] border border-white/10 rounded-xl p-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-5 h-5 rounded-full bg-[#1DA1F2] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </div>
                        <span className="text-white text-[10px] font-medium">Twitter</span>
                      </div>
                      <p className="text-white/40 text-[8px]">Mindful: 0h 0m</p>
                      <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-[#00838F] to-[#00ACC1] rounded-full" />
                      </div>
                      <div className="flex items-center justify-center mt-2">
                        <Shield className="w-8 h-8 text-amber-600" fill="rgba(217, 119, 6, 0.3)" strokeWidth={1.5} />
                      </div>
                      <p className="text-white/40 text-[7px] text-center mt-0.5">123m to Silver Shield</p>
                      <div className="w-full h-0.5 bg-rose-500/50 rounded-full mt-1" />
                    </div>

                    {/* Snapchat Card */}
                    <div className="flex-1 bg-white/5 backdrop-blur-xl border-l-2 border-l-[#6C63FF] border border-white/10 rounded-xl p-2">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-5 h-5 rounded-full bg-[#FFFC00] flex items-center justify-center">
                          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.032.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.076-.375-.09-.84-.181-1.441-.181-.453 0-.915.06-1.38.18-1.35.36-2.4 1.695-3.42 1.695-.03 0-.06 0-.089 0h-.06c-1.021 0-2.07-1.335-3.42-1.695-.48-.12-.944-.18-1.395-.18-.601 0-1.066.091-1.441.18-.225.045-.405.075-.54.075h-.03c-.285 0-.48-.135-.57-.419-.062-.194-.106-.376-.135-.554-.044-.194-.104-.479-.165-.57-1.873-.283-2.92-.702-3.16-1.271-.03-.075-.045-.149-.045-.225-.015-.239.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-.809-.315-1.212-.705-1.212-1.154 0-.36.284-.69.734-.84.149-.06.328-.089.509-.089.12 0 .3.015.449.09.374.18.733.284 1.034.3.21 0 .33-.044.404-.089l-.016-.18-.016-.164c-.135-2.67-.255-5.14 1.245-7.138C7.83 1.269 10.19.793 12.206.793z" />
                          </svg>
                        </div>
                        <span className="text-white text-[10px] font-medium">Snapchat</span>
                      </div>
                      <p className="text-white/40 text-[8px]">Mindful: 0h 0m</p>
                      <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                        <div className="h-full w-1/2 bg-gradient-to-r from-[#6C63FF] to-[#8B83FF] rounded-full" />
                      </div>
                      <div className="flex items-center justify-center mt-2">
                        <Shield className="w-8 h-8 text-amber-600" fill="rgba(217, 119, 6, 0.3)" strokeWidth={1.5} />
                      </div>
                      <p className="text-white/40 text-[7px] text-center mt-0.5">165m to Silver Shield</p>
                      <div className="w-full h-0.5 bg-rose-500/50 rounded-full mt-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="h-14 bg-slate-900/90 border-t border-slate-800 flex items-center justify-around px-2">
                <div className="flex flex-col items-center gap-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <span className="text-white text-[8px]">Home</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-white/50 text-[8px]">Insights</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[9px] font-bold bg-gradient-to-r from-[#FF6B35] via-[#FF8E53] to-[#FFB347] bg-clip-text text-transparent italic">VIBE</span>
                  <span className="text-[9px] font-bold bg-gradient-to-r from-[#6C63FF] to-[#00ACC1] bg-clip-text text-transparent">CONNECT</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-white/50 text-[8px]">Leaderboard</span>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <motion.div
              animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-4 h-4 bg-[#00838F] rounded-full blur-sm"
            />
            <motion.div
              animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/3 -left-6 w-3 h-3 bg-[#6C63FF] rounded-full blur-sm"
            />
            <motion.div
              animate={{ y: [-5, 15, -5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-20 -right-8 w-5 h-5 bg-[#00ACC1] rounded-full blur-sm"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
