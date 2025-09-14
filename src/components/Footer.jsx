import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-sm">
        <p>© 2025 Nouval. All rights reserved.</p>
        <div className="flex gap-4">
          <a aria-label="Email" href="mailto:mnouval990@gmail.com"><Mail /></a>
          <a aria-label="GitHub" href="https://github.com/Muhammad-Nouval-Pro" target="_blank" rel="noreferrer"><Github /></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/muhammad-nouval" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a aria-label="Instagram" href="https://www.linkedin.com/in/muhammad-nouval" target="_blank" rel="noreferrer"><Instagram /></a>
        </div>
      </div>
    </footer>
  )
}
