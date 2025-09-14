import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "../lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock scroll ketika menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => (document.body.style.overflow = "")
  }, [open])

  const linkCls = "px-3 py-2 rounded-xl text-sm hover:bg-card focus:outline-none focus:ring-2 focus:ring-ring"

  // Tutup menu saat pindah hash (klik anchor)
  const onNav = () => setOpen(false)

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 bg-bg/80 backdrop-blur border-b border-black/10 dark:border-white/10"
    >
      <nav className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="font-bold tracking-tight">
          Nouval<span className="text-primary">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" aria-label="Primary">
          <li><a href="#hero" className={cn(linkCls)}>Home</a></li>
          <li><a href="#about" className={cn(linkCls)}>About</a></li>
          <li><a href="#projects" className={cn(linkCls)}>Projects</a></li>
          <li><a href="#contact" className={cn(linkCls)}>Contact</a></li>
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-card focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-black/10 dark:border-white/10"
          >
            <div className="container py-3">
              <ul className="grid gap-1" aria-label="Mobile">
                <li>
                  <a href="#hero" onClick={onNav} className={cn("block", linkCls)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={onNav} className={cn("block", linkCls)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={onNav} className={cn("block", linkCls)}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={onNav} className={cn("block", linkCls)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
