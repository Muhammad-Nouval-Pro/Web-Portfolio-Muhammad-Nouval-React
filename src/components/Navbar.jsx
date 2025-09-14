import { ThemeToggle } from "./ThemeToggle"
import { cn } from "../lib/utils"

export function Navbar() {
  const linkCls = "px-3 py-2 rounded-xl text-sm hover:bg-card"

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-bg/70 backdrop-blur border-b border-white/5">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" className="font-bold tracking-tight">
          Muhammad <span className="text-primary" >Nouval</span>
        </a>
        <ul className="hidden md:flex items-center gap-1" aria-label="Primary">
          <li><a href="#hero" className={cn(linkCls)}>Home</a></li>
          <li><a href="#about" className={cn(linkCls)}>About</a></li>
          <li><a href="#projects" className={cn(linkCls)}>Projects</a></li>
          <li><a href="#contact" className={cn(linkCls)}>Contact</a></li>
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
