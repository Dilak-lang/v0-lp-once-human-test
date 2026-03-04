"use client"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-neon-red">
                <span className="text-xs font-bold text-primary-foreground">OH</span>
              </div>
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-foreground">
              Once Human
            </span>
          </div>

          {/* Disclaimer */}
          <div className="max-w-2xl space-y-2">
            <p className="text-xs leading-relaxed text-muted-foreground">
              This is an affiliate promotion. Once Human is a free-to-play game
              available on Steam. Must be 13+ to play. No VPN or datacenter
              traffic. Game content and trademarks belong to their respective
              owners.
            </p>
            <p className="text-xs text-muted-foreground/60">
              {'\u00A9'} {new Date().getFullYear()} Affiliate Landing Page. This site is not
              affiliated with or endorsed by the game developers. All game
              images and trademarks are property of their respective owners.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-red"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-red"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-neon-red"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
