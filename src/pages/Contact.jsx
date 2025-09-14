// import { useId, useState } from "react"
// import { Button } from "../components/ui/Button"

// export default function ContactPage() {
//   const idName = useId()
//   const idEmail = useId()
//   const idMsg = useId()
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [message, setMessage] = useState("")

//   const isValid = name.trim() && /\S+@\S+\.\S+/.test(email) && message.trim()
//   const mailto = `mailto:hello@example.com?subject=Kontak%20dari%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nEmail: " + email)}`

//   return (
//     <section className="py-12">
//       <div className="container max-w-2xl">
//         <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
//         <p className="text-muted mt-2">Kirim pesan—tanpa backend, menggunakan <code>mailto:</code> sebagai fallback.</p>

//         <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); if (isValid) window.location.href = mailto }}>
//           <div>
//             <label htmlFor={idName} className="text-sm">Nama</label>
//             <input id={idName} value={name} onChange={e=>setName(e.target.value)} required
//               className="mt-1 w-full rounded-xl bg-card border border-white/10 px-3 py-2" />
//           </div>
//           <div>
//             <label htmlFor={idEmail} className="text-sm">Email</label>
//             <input id={idEmail} value={email} onChange={e=>setEmail(e.target.value)} required type="email"
//               className="mt-1 w-full rounded-xl bg-card border border-white/10 px-3 py-2" />
//           </div>
//           <div>
//             <label htmlFor={idMsg} className="text-sm">Pesan</label>
//             <textarea id={idMsg} rows={5} value={message} onChange={e=>setMessage(e.target.value)} required
//               className="mt-1 w-full rounded-xl bg-card border border-white/10 px-3 py-2"></textarea>
//           </div>
//           <div className="flex gap-3">
//             <Button type="submit" disabled={!isValid}>Kirim via Email</Button>
//             <a href={isValid ? mailto : "#"} className="underline text-muted">atau buka mailto</a>
//           </div>
//         </form>
//       </div>
//     </section>
//   )
// }
