"use client"

import { motion } from "framer-motion"
import { Shield, Users, Star } from "lucide-react"

const stats = [
  { icon: Shield, label: "Free to Play", value: "100% Free" },
  { icon: Users, label: "Active Players", value: "10K+ Online Now" },
  { icon: Star, label: "Steam Rating", value: "Very Positive" },
]

export function TrustBar() {
  return (
    <section className="relative border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              {i > 0 && (
                <div className="hidden h-8 w-px bg-border sm:block" />
              )}
              <div className={`${i > 0 ? "sm:ml-6" : ""} flex items-center gap-3`}>
                <stat.icon className="h-5 w-5 text-neon-cyan" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
