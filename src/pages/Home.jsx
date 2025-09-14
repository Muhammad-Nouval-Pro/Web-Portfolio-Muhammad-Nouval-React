import { useState, useMemo, useId } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "../components/ui/Button"
import { LanyardCard } from "../components/LanyardCard"
import { ProjectCard } from "../components/ProjectCard"
import { Github, Linkedin, Mail } from "lucide-react"

export default function HomePage() {
  // Parallax halus di hero
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 400], [0, -40])
  const y2 = useTransform(scrollY, [0, 400], [0, 30])

  // ====== DATA ABOUT ======
  const skills = ["React", "JavaScript", "Tailwind", "Figma", "UI/UX Design", "Cisco Packet Tracer", "Jaringan Komputer"]
  const timeline = [
    { year: "2025", text: "Frontend Developer — Fokus animasi & performance."},
    { year: "2024", text: "Frontend Developer - Fokus belajar Javascript"},
    { year: "2020 - 2023", text: "Belajar mendalam Teknik Komputer Jaringan."},
  ]

  // ====== DATA PROJECTS ======
  const projects = [
    { title: "Web Perpustakaan dengan PHP", description: "Website Perpustakaan beserta Admin yang kompleks.", tags: ["PHP", "MySQL", "Tailwind"], repo: "https://github.com/Muhammad-Nouval-Pro/Projek-PHP-Perpustakaan-"},
    { title: "UI Design Website", description: "Landing page Website Skin care.", tags: ["UI Design", "Figma"], figma: "https://www.figma.com/design/6LkQuChK1RdMMI2z3sSkLc/Design-Web-Skin?node-id=0-1&t=dbDms06thZqHwalX-1"},
    { title: "Website Jasa Fotografer", description: "Website jasa Fotografer Wedding, Prewedding, dll.", tags: ["Javascript", "Tailwind"], repo: "https://github.com/Muhammad-Nouval-Pro/Web-Photo"},
    { title: "Mobile App Design", description: "Design mobile aplikasi Grocery NouFresh.", tags: ["UI/UX Design", "Figma"], figma: "https://www.figma.com/design/PPDj7iuZONIjVutWgQAqoB/-Grocery-?node-id=445-4022&t=PDu5KooQQqtWS1GF-1"},
    { title: "Web UI Design Concert Charity", description: "Desain website charity tema Music For Hope.", tags: ["UI/UX Design", "Figma"], figma: "https://www.figma.com/design/e6aLly0Iv8T5PQCScCAtyy/Projek-Test-Muhammad-Nouval?node-id=2-41&p=f&t=dbDms06thZqHwalX-0"},
    { title: "Design Aplikasi Lelang Online", description: "Design aplikasi mobile Lelang secara online.", tags: ["UI/UX Design", "Figma"], figma: "https://www.figma.com/design/TwTkNbBPN5T1F61CH89ciK/Project-UI-UX-Design?node-id=0-1&t=ChYO2ykMU1FrCk7c-1"},
    
  ]
  const [filter, setFilter] = useState("All")
  const tags = useMemo(() => ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))], [])
  const filtered = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter))

  // ====== FORM CONTACT ======
  const idName = useId()
  const idEmail = useId()
  const idMsg = useId()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const isValid = name.trim() && /\S+@\S+\.\S+/.test(email) && message.trim()
  const mailto = `mailto:hello@example.com?subject=Kontak%20dari%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nEmail: " + email)}`

  return (
    <>
      {/* ================= HERO ================= */}
      <section id="hero" className="py-12 md:py-16">
        <motion.div
          style={{ y: y1 }}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-primary/10 to-transparent"
        />
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .05 }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              Halo, Saya Muhammad Nouval 
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .15 }}
              className="text-lg text-muted"
            >
              Saya seorang mahasiswa Informatika yang tertarik pada Front-End Development dan UI/UX Design, menggabungkan logika pemrograman dengan estetika desain untuk menciptakan pengalaman web yang menyenangkan.
            </motion.p>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .25 }}
            >
              <a href="#projects"><Button size="lg">Lihat Projects</Button></a>
              <a href="#contact"><Button variant="secondary" size="lg">Hubungi Saya</Button></a>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .35 }}
            >
              <a aria-label="Email" href="mailto:mnouval990@gmail.com"><Mail /></a>
              <a aria-label="GitHub" href="https://github.com/Muhammad-Nouval-Pro" target="_blank" rel="noreferrer"><Github /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/muhammad-nouval" target="_blank" rel="noreferrer"><Linkedin /></a>
            </motion.div>
          </div>

          <motion.div style={{ y: y2 }} className="flex justify-center">
            <LanyardCard />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-16 space-y-10">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold"
          >
            Tentang Saya
          </motion.h2>

          <motion.p
            className="mt-3 text-muted max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Saya fokus pada Front-End Development, UI/UX Design, dan Komputer Jaringan, membangun website yang modern sekaligus memahami fondasi teknis dari sisi jaringan.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm"
              >
                {s}
              </motion.span>
            ))}
          </div>

          <div className="mt-10 grid gap-4">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-card border border-white/5 p-4"
              >
                <div className="text-primary font-semibold">{t.year}</div>
                <div className="text-sm text-muted">{t.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-16">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  aria-pressed={filter === t}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    filter === t ? "bg-primary text-white border-primary" : "bg-card border-white/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => <ProjectCard key={p.title} p={p} />)}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-16">
        <div className="container max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          {/* <p className="text-muted mt-2">
            Kirim pesan <code>mailto:</code> sebagai fallback.
          </p> */}

          <form
            className="mt-6 grid gap-4"
            onSubmit={(e) => { e.preventDefault(); if (isValid) window.location.href = mailto }}
          >
            <div>
              <label htmlFor={idName} className="text-sm">Nama</label>
              <input
                id={idName}
                value={name}
                onChange={e=>setName(e.target.value)}
                required
                className="mt-1 w-full rounded-xl bg-card border border-white/10 px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor={idEmail} className="text-sm">Email</label>
              <input
                id={idEmail}
                value={email}
                onChange={e=>setEmail(e.target.value)}
                required
                type="email"
                className="mt-1 w-full rounded-xl bg-card border border-white/10 px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor={idMsg} className="text-sm">Pesan</label>
              <textarea
                id={idMsg}
                rows={5}
                value={message}
                onChange={e=>setMessage(e.target.value)}
                required
                className="mt-1 w-full rounded-xl bg-card border border-white/10 px-3 py-2"
              ></textarea>
            </div>

            <div className="flex gap-3">
              <Button type="submit" disabled={!isValid}>Kirim via Email</Button>
              {/* <a href={isValid ? mailto : "#"} className="underline text-muted">atau buka mailto</a> */}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
