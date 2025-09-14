import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import profile from "../assets/new_mnopal.png"
import { useEffect } from "react"
import { cn } from "../lib/utils"

/**
 * Lanyard interaktif:
 * - Idle sway (loop)
 * - Drag vertikal, spring lembut, kembali ke netral
 * - Bayangan dinamis & refleksi
 */
export function LanyardCard({ className }) {
  const y = useMotionValue(0)
  const x = useMotionValue(0)
  const rotate = useMotionValue(0)

  const ys = useSpring(y, { stiffness: 80, damping: 10 })
  const xs = useSpring(x, { stiffness: 80, damping: 10 })
  const rot = useSpring(rotate, { stiffness: 50, damping: 12 })

  const shadowY = useTransform(ys, [ -60, 60 ], [ -6, 12 ])
  const blurAmount = useTransform(ys, [-60, 60], [10, 30])
  const filter = useMotionTemplate`blur(${blurAmount}px)`
  // const shadowBlur = useTransform(ys, [ -60, 60 ], [ 10, 30 ])

  useEffect(() => {
    let dir = 1
    const id = setInterval(() => {
      x.set(dir * 8)
      rotate.set(dir * 2.5)
      dir *= -1
    }, 1200)
    return () => clearInterval(id)
  }, [x, rotate])

  return (
    <div className={cn("relative w-64 select-none", className)} aria-label="Kartu lanyard interaktif">
      <motion.div
        style={{ rotate: rot }}
        className="absolute -top-10 left-1/2 h-10 w-1 -translate-x-1/2 origin-top bg-gradient-to-b from-primary/70 to-primary/20 rounded"
        aria-hidden
      />
      <motion.div
        drag="y"
        dragConstraints={{ top: -60, bottom: 60 }}
        dragElastic={0.3}
        onDrag={(e, info) => {
          y.set(info.point.y % 100)
          x.set(Math.max(-40, Math.min(40, info.delta.y)))
          rotate.set(Math.max(-10, Math.min(10, info.delta.y * 0.2)))
        }}
        onDragEnd={() => { y.set(0); x.set(0); rotate.set(0) }}
        style={{ y: ys, rotate: rot, transformOrigin: "top center" }}
        className="relative origin-top rounded-3xl bg-card border border-white/10 shadow-soft p-4"
        aria-roledescription="lanyard"
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{ background: "linear-gradient(120deg, rgba(255,255,255,.12), transparent 40%)" }}
          aria-hidden />
        <img src={profile} alt="Foto profil" className="rounded-2xl w-full h-auto" />
        <div className="mt-3">
          <p className="font-semibold">Muhammad Nouval</p>
          <p className="text-sm text-muted">Mahasiswa Informatika</p>
        </div>
      </motion.div>

      <motion.div
        style={{
          y: shadowY,
          filter, // MotionValue<string> dari useMotionTemplate
        }}
        className="mx-auto mt-6 h-4 w-40 rounded-full bg-black/25"
        aria-hidden
      />
    </div>
  )
}
