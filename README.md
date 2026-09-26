# Suman OS — Developer Portfolio

A single-page, terminal-inspired developer portfolio for **Suman Bhattacharya**.

Dark theme · glass panels · neon accents · animated skill bars · scroll reveals.

---

## Quick start

Open `index.html` in a browser.

No build step. No dependencies to install.

```bash
# optional: local server
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:8000` (or the port shown).

---

## Files

| File         | Purpose                          |
|--------------|----------------------------------|
| `index.html` | Structure & content              |
| `styles.css` | Dark / neon / glass styling      |
| `script.js`  | Menu, scroll effects, animations |

Icons load from Lucide (CDN). Fonts from Google Fonts (Inter + JetBrains Mono).

---

## Sections

1. **Hero** — Name, tagline, live terminal, CTAs  
2. **About** — `curiosity.js` code block + mindset cards  
3. **Life timeline** — 2008 → 2026  
4. **Skill tree** — Languages / Web / Tools  
5. **Projects** — WeatherGPT, JEE PYQs, Amazon Clone, Roblox  
6. **Commit history** — Oneline-style log  
7. **Current processes** — Running / learning / exploring  
8. **Experimental filesystem** — Idea folders & notes  
9. **What's next** — Roadmap checklist  
10. **Connect** — GitHub, LinkedIn, Email  

---

## Customize

### Links
In `index.html`, update the contact cards:

```html
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_PROFILE" ...>
<a href="mailto:you@email.com" ...>
```

Also update project Demo / Code links under **Things I built**.

### Content
Edit text, years, skill percentages, commits, and roadmap items directly in `index.html`. Skill bar widths use `style="--level: 85%"` — change the number to match.

### Colors
In `styles.css`, under `:root`:

```css
--cyan: #22d3ee;
--purple: #a78bfa;
--bg: #06080f;
```

---

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge).  
Uses CSS grid, backdrop-filter, and Intersection Observer.

---

## License

Personal portfolio. Use or remix as you like.
