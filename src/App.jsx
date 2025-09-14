import { ThemeProvider } from "./lib/theme"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import HomePage from "./pages/Home"
// import { AnimatePresence, motion } from "framer-motion"

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-dvh bg-bg text-fg">
        <Navbar />
        <main id="main-content" className="pt-20">
          <HomePage />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
