import { Card, CardDesc, CardTitle } from "./ui/Card"
import { Github, ExternalLink, Figma } from "lucide-react"
import { motion } from "framer-motion"

export function ProjectCard({ p }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 16 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="flex flex-col">
        {p.image && (
          <div className="overflow-hidden rounded-xl mb-3">
            <img src={p.image} alt={p.title} className="w-full object-cover aspect-video hover:scale-105 transition" />
          </div>
        )}
        <CardTitle>{p.title}</CardTitle>
        <CardDesc className="mt-1">{p.description}</CardDesc>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {p.demo && <a className="inline-flex items-center gap-1 hover:underline" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16}/> Demo</a>}
          {p.repo && <a className="inline-flex items-center gap-1 hover:underline" href={p.repo} target="_blank" rel="noreferrer"><Github size={16}/> Repo</a>}
          {p.figma && <a className="inline-flex items-center gap-1 hover:underline" href={p.figma} target="_blank" rel="noreferrer"><Figma size={16}/> Figma</a>}
        </div>
      </Card>
    </motion.div>
  )
}
