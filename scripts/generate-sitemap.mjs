import { writeFile } from "node:fs/promises"

const origin = "https://example.com" // ganti domain kamu
const routes = ["/", "/about", "/projects", "/contact"]

const urlset = routes.map(r => `
  <url>
    <loc>${origin}${r}</loc>
    <changefreq>weekly</changefreq>
    <priority>${r === "/" ? "1.0" : "0.7"}</priority>
  </url>
`).join("")

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`

await writeFile("public/sitemap.xml", xml.trim(), "utf8")
console.log("✅ Sitemap generated at public/sitemap.xml")
