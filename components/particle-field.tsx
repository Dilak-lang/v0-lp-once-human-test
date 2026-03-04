"use client"

import { useEffect, useRef } from "react"

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    interface Particle {
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      opacity: number
      color: string
      type: "dust" | "ember" | "spore"
      life: number
      maxLife: number
    }

    const particles: Particle[] = []
    const particleCount = 90

    const createParticle = (randomY = true): Particle => {
      const type = Math.random() > 0.7 ? (Math.random() > 0.5 ? "ember" : "spore") : "dust"
      const colors = type === "ember"
        ? ["#dc2626", "#ef4444", "#b91c1c"]
        : type === "spore"
        ? ["#06b6d4", "#0891b2"]
        : ["#dc2626", "#dc262680", "#06b6d4", "#06b6d480"]

      return {
        x: Math.random() * canvas.width,
        y: randomY ? Math.random() * canvas.height : canvas.height + 10,
        size: type === "ember" ? Math.random() * 3 + 1.5 : type === "spore" ? Math.random() * 1.5 + 0.5 : Math.random() * 2 + 0.5,
        speedY: type === "ember" ? -(Math.random() * 1.2 + 0.3) : -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * (type === "ember" ? 0.8 : 0.3),
        opacity: Math.random() * 0.6 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
        life: 0,
        maxLife: type === "ember" ? 150 + Math.random() * 100 : 300 + Math.random() * 200,
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life++

        // Fade in/out based on life
        const lifePct = p.life / p.maxLife
        const fadeIn = Math.min(lifePct * 10, 1)
        const fadeOut = lifePct > 0.8 ? 1 - (lifePct - 0.8) / 0.2 : 1
        const alpha = p.opacity * fadeIn * fadeOut

        if (p.type === "ember") {
          // Ember - bright core with large glow
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5)
          gradient.addColorStop(0, p.color + Math.floor(alpha * 255).toString(16).padStart(2, "0"))
          gradient.addColorStop(0.3, p.color + Math.floor(alpha * 120).toString(16).padStart(2, "0"))
          gradient.addColorStop(1, p.color + "00")
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()

          // Bright core
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = "#ffffff" + Math.floor(alpha * 200).toString(16).padStart(2, "0")
          ctx.fill()
        } else {
          // Dust / spore
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, "0")
          ctx.fill()

          // Glow
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
          ctx.fillStyle = p.color + Math.floor(alpha * 30).toString(16).padStart(2, "0")
          ctx.fill()
        }

        p.y += p.speedY
        p.x += p.speedX + Math.sin(p.life * 0.02) * 0.2

        // Recycle particles
        if (p.life >= p.maxLife || p.y < -20) {
          particles[i] = createParticle(false)
        }
        if (p.x < -20) p.x = canvas.width + 20
        if (p.x > canvas.width + 20) p.x = -20
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1]"
      aria-hidden="true"
    />
  )
}
