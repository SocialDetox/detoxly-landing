import { HeroSection } from "@/components/HeroSection"
import { MetricsStrip } from "@/components/MetricsStrip"
import { FeatureGrid } from "@/components/FeatureGrid"
import { ModesSection } from "@/components/ModesSection"
import { VibeConnectTeaser } from "@/components/VibeConnectTeaser"
import { Footer } from "@/components/Footer"
import { StickyHeader } from "@/components/StickyHeader"
import { InstallCTA } from "@/components/InstallCTA"
import { FeatureBanner } from "@/components/FeatureBanner"

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main className="relative min-h-screen bg-slate-950 overflow-x-hidden">
        {/* Global background gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 pt-16 md:pt-20">
          <FeatureBanner />
          <HeroSection />
          <MetricsStrip />
          <FeatureGrid />
          <InstallCTA />
          <ModesSection />
          <VibeConnectTeaser />
          <Footer />
        </div>
      </main>
    </>
  )
}
