import { cn } from "../../lib/utils"
import { forwardRef } from "react"

export const Button = forwardRef(function Button(
  { className, variant = "primary", size = "md", ...props },
  ref
) {
  const base = "inline-flex items-center justify-center rounded-2xl transition shadow-soft focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    ghost: "bg-transparent hover:bg-card"
  }
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-12 px-6 text-lg"
  }
  return (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  )
})
