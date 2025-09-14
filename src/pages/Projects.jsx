// import { useMemo, useState } from "react"
// import { ProjectCard } from "../components/ProjectCard"

// const data = [
//   { title: "Dashboard Motion", description: "Dashboard dengan animasi halus.", tags: ["React", "Framer Motion"], demo: "#", repo: "#"},
//   { title: "Landing Vite", description: "Landing page cepat dengan Vite.", tags: ["Vite", "Tailwind"], demo: "#", repo: "#"},
//   { title: "Portfolio A11y", description: "Fokus aksesibilitas & SEO.", tags: ["A11y", "SEO"], demo: "#", repo: "#"},
// ]

// export default function ProjectsPage() {
//   const [filter, setFilter] = useState("All")
//   const tags = useMemo(() => ["All", ...Array.from(new Set(data.flatMap(p => p.tags)))], [])

//   const filtered = filter === "All" ? data : data.filter(p => p.tags.includes(filter))

//   return (
//     <section className="py-12">
//       <div className="container">
//         <div className="flex items-center justify-between gap-4">
//           <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
//           <div className="flex flex-wrap gap-2">
//             {tags.map(t => (
//               <button key={t} onClick={() => setFilter(t)} aria-pressed={filter === t}
//                 className={`px-3 py-1 rounded-full text-sm border ${filter === t ? "bg-primary text-white border-primary" : "bg-card border-white/10"}`}>
//                 {t}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map(p => <ProjectCard key={p.title} p={p} />)}
//         </div>
//       </div>
//     </section>
//   )
// }
