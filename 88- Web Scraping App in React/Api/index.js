// app.js
import express from "express"
import axios from "axios"
import * as cheerio from "cheerio"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// helper: validate URL
function isValidUrl(str) {
  try {
    const url = new URL(str)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

// POST /api/images
// body: { "url": "https://example.com" }
app.use(cors())
app.post("/api/images", async (req, res) => {
  const { url } = req.body
  if (!url || !isValidUrl(url)) {
    return res.status(400).json({ error: "Please provide a valid URL" })
  }

  try {
    const { data } = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; ImageGrabber/1.0; +https://example.com)",
      },
    })

    const $ = cheerio.load(data)
    const base = new URL(url)
    const images = new Set()

    const add = (src) => {
      if (!src || src.startsWith("data:")) return
      try {
        const abs = new URL(src, base).href
        images.add(abs)
      } catch {}
    }

    // <img src> and srcset
    $("img").each((_, el) => {
      add($(el).attr("src"))
      const srcset = $(el).attr("srcset")
      if (srcset)
        srcset.split(",").forEach((item) => add(item.trim().split(/\s+/)[0]))
    })

    // <source src> and srcset
    $("source").each((_, el) => {
      add($(el).attr("src"))
      const srcset = $(el).attr("srcset")
      if (srcset)
        srcset.split(",").forEach((item) => add(item.trim().split(/\s+/)[0]))
    })

    // <link rel="image_src"> and favicons
    $('link[rel="image_src"], link[rel="icon"], link[rel="shortcut icon"]').each(
      (_, el) => add($(el).attr("href"))
    )

    // meta OG/twitter
    $('meta[property="og:image"], meta[name="twitter:image"]').each((_, el) =>
      add($(el).attr("content"))
    )

    return res.json([...images])
  } catch (err) {
    console.error(err.message)
    return res.status(500).json({ error: "Failed to fetch page or parse HTML" })
  }
})

app.listen(8080, () =>
  console.log("✅ Server running on http://localhost:8080")
)
