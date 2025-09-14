import { cn } from "../../lib/utils"

export function Card(props) {
  const { className, ...rest } = props
  return <div className={cn("rounded-2xl bg-card shadow-soft border border-white/5 p-5", className)} {...rest} />
}

export function CardTitle(props) {
  const { className, ...rest } = props
  return <h3 className={cn("text-lg font-semibold", className)} {...rest} />
}

export function CardDesc(props) {
  const { className, ...rest } = props
  return <p className={cn("text-sm text-muted", className)} {...rest} />
}
