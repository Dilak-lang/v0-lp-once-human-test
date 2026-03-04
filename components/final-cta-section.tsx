"use client"

import { motion } from "framer-motion"

const AFFILIATE_LINK = "https://to.wendiro.com/u?k=24c3cf9a5dde4dd896352d1314e9aacd&via=26561"

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Red glow effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-red/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-balance text-4xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Start Playing Now
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Create your character and get in-game rewards. Join thousands of
            survivors fighting to reclaim the contaminated world.
          </p>

          <a
            href={AFFILIATE_LINK}
            id="cta-final"
            className="cta-urgent relative inline-flex items-center gap-3 rounded-lg bg-neon-red px-10 py-5 text-lg font-bold uppercase tracking-wider text-primary-foreground sm:text-xl"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            Get In-Game Rewards — Play Free
          </a>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {'Free on Steam \u2022 Windows Only \u2022 Create your character to earn rewards'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
