import { createContext, useContext, useEffect, useMemo, useState } from "react"

const ThemeCtx = createContext(null)
const KEY = "theme-preference"

function getPreferred() {
  try {
    const stored = localStorage.getItem(KEY)
    if (stored) return stored
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches
    return prefersDark ? "dark" : "light"
  } catch {
    return "light"
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => (typeof window === "undefined" ? "light" : getPreferred()))

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") root.classList.add("dark")
    else root.classList.remove("dark")
    try { localStorage.setItem(KEY, theme) } catch {}
  }, [theme])

  const value = useMemo(() => ({
    theme,
    setTheme,
    toggle: () => setTheme(t => (t === "dark" ? "light" : "dark"))
  }), [theme])

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
