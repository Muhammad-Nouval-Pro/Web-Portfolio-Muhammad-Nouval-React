// import { motion } from "framer-motion"

// const skills = ["React", "JavaScript", "Tailwind", "Framer Motion", "Vite", "Accessibility", "SEO"]

// const timeline = [
//   { year: "2025", text: "Frontend Engineer — Fokus animasi & performance."},
//   { year: "2024", text: "Freelance — Landing page & dashboard interaktif."},
//   { year: "2023", text: "Belajar mendalam React + UI/UX."},
// ]

// export default function AboutPage() {
//   return (
//     <section className="py-12 space-y-10">
//       <div className="container">
//         <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-semibold">
//           Tentang Saya
//         </motion.h2>
//         <motion.p className="mt-3 text-muted max-w-2xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
//           Saya membangun antarmuka halus, cepat, dan mudah diakses—dengan perhatian pada detail dan micro-interactions.
//         </motion.p>

//         <div className="mt-8 flex flex-wrap gap-2">
//           {skills.map((s, i) => (
//             <motion.span key={s} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }} transition={{ delay: i * 0.05 }}
//               className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm">
//               {s}
//             </motion.span>
//           ))}
//         </div>

//         <div className="mt-10 grid gap-4">
//           {timeline.map((t, i) => (
//             <motion.div key={t.year} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }} transition={{ delay: i * 0.08 }}
//               className="rounded-xl bg-card border border-white/5 p-4">
//               <div className="text-primary font-semibold">{t.year}</div>
//               <div className="text-sm text-muted">{t.text}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
