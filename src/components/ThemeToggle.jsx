import { useTheme } from "../lib/theme"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/Button"

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === "dark"
  return (
    <Button aria-label="Toggle theme" variant="ghost" onClick={toggle} className="gap-2">
      {isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
      <span className="sr-only">{isDark ? "Ubah ke terang" : "Ubah ke gelap"}</span>
    </Button>
  )
}
