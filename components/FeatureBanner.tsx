"use client"

import Image from "next/image"

export function FeatureBanner() {
  return (
    <section className="relative z-10 px-4 mt-4">
      <div className="max-w-5xl mx-auto flex justify-center">
        <Image
          src="/feature-banner.png"
          alt="Detoxly feature banner"
          width={1024}
          height={500}
          priority
          sizes="(min-width: 1280px) 768px, (min-width: 768px) 640px, 100vw"
          className="w-full h-auto rounded-xl shadow-2xl shadow-purple-500/20 object-cover"
        />
      </div>
    </section>
  )
}

