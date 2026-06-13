# Muñoz Academy — Project Brief for Claude Code

## What This Project Is
A premium website for **Muñoz Academy**, a tennis, pádel and pickleball academy.
Built with **Next.js (App Router, no TypeScript, no Tailwind)** and **Sanity CMS**.
The site is primarily in **Spanish** with an English language toggle.
Tone: **formal, premium, elegant**.

---

## Approved Design System

### Colors
```css
--green-deep:  #1a4a2e;   /* Primary background — nav, hero, about section */
--green-mid:   #1e5c38;   /* Secondary green — hero right panel */
--green-court: #2d7a4f;   /* Accent green — CTA section, hover states */
--cream:       #f5f0e8;   /* Primary text on dark backgrounds, button text */
--cream-light: #faf7f2;   /* Page background */
--gold:        #c9a84c;   /* Accent — eyebrows, highlights, borders */
--text-dark:   #0d2818;   /* Body text on light backgrounds */
--text-muted:  #4a6355;   /* Secondary body text */
```

### Typography
- **Headlines:** `Cormorant Garamond` — serif, weights 300/400/600, italic for accents
- **Body / UI:** `Jost` — sans-serif, weights 300/400/500/600
- Both loaded from Google Fonts

### Button Styles
- **Primary (gold):** background `#c9a84c`, text `#f5f0e8` (cream)
- **Outline (on dark):** transparent background, cream text, cream border
- **CTA solid:** background `#f5f0e8`, text `#2d7a4f`
- **CTA outline:** transparent, cream text, cream border
- All buttons: `font-family Jost`, `font-size 11px`, `font-weight 500`, `letter-spacing 0.15em`, `text-transform uppercase`

### Design Principles
- Generous whitespace — sections use `padding: 80px 48px`
- Gold used sparingly as accent only
- Section structure: small uppercase label in gold → large serif heading → body text
- Headings often use italic em tags for accent words in gold or green-court
- Border-left gold accent on quote blocks and hover states on cards

---

## Site Structure & Pages

| Page | Route | Notes |
|------|-------|-------|
| Inicio (Home) | `/` | Full landing page — all sections below |
| Historia | `/historia` | Academy history, founders story |
| Profesores | `/profesores` | Full coaches listing |
| Programas | `/programas` | All 5 programs detail |
| Tienda | `/tienda` | Tennis products store |
| Recursos | `/recursos` | Photos, documents, videos |
| Contacto | `/contacto` | Contact form |

---

## Homepage Sections (in order)

### 1. Language Bar
- Thin bar above nav
- Background: `--green-deep`
- Spain flag SVG + "Español" (active) | UK flag SVG + "English"
- Right-aligned

### 2. Navbar
- Background: `--green-deep`, height `110px`
- Left: Logo image (`Green_Bold_Modern_Tennis_Club_Logo.png`) — `height: 110px, width: auto`
- Center: Nav links — Inicio, Historia, Profesores, Programas, Tienda, Recursos, Contacto
- Right: Gold CTA button "Inscríbete" — separated from links with `margin: 0 40px` on links
- Active link has gold bottom border
- Nav is `position: relative` (not sticky for now)

### 3. Hero Section
- Two-column grid: `55% / 45%`
- **Left column** (centered): eyebrow text → H1 → subtitle → description → two buttons
  - Eyebrow: "Bienvenidos a la Academia" in gold uppercase
  - H1: "Eleva tu *juego* al siguiente nivel" — *juego* in gold italic
  - Subtitle: "Tennis · Pádel · Pickleball" — muted cream uppercase
  - Body: Lorem ipsum (placeholder until real content)
  - Buttons: "Ver Programas" (gold primary) + "Nuestra Historia" (outline)
- **Right column:** background `--green-mid`
  - Tennis court SVG lines as decorative background (opacity 0.15)
  - 3 stat pills bottom-right:
    - `15+` Años de experiencia
    - `5` Disciplinas
    - `200+` Alumnos activos
  - Stat pills: `min-width 190px`, number `font-size 42px`, dark semi-transparent bg, gold border

### 4. Marquee Bar
- Gold background, scrolling text
- Items: Tennis ◆ Pádel ◆ Pickleball ◆ Clases para Adultos ◆ Clases para Niños ◆ Silla de Ruedas
- CSS animation, duplicated for seamless loop

### 5. Programs Section (Nuestros Programas)
- Background: `--cream-light`
- 3×2 grid of cards
- Each card: icon image + title + Lorem ipsum desc + "Más información →" link
- Cards have `border-left: 3px solid transparent` → gold on hover
- **5 program cards:**
  1. **Clases para Adultos** — icon: `tennis__1_.png`
  2. **Clases para Niños** — icon: `tennis-ball.png`
  3. **Tennis en Silla de Ruedas** — icon: `wheelchair-tennis.png`
  4. **Clases de Pádel** — icon: `padel.png`
  5. **Clases de Pickleball** — icon: `pickleball.png`
- **6th card:** Dark green quote card with gold left border + "Contáctanos" button

### 6. Historia / About Section
- Two-column: dark green left (text) / `--green-mid` right (stats grid)
- Left: section label → heading ("Más de una década *formando* campeones") → body → pull quote
- Right: 2×2 grid of number cards — 15+ años / 5 disciplinas / 200+ alumnos / 8 profesores

### 7. Profesores / Coaches Section
- Background: `--cream`
- 3-column grid
- Each coach card: photo area (green bg with initials placeholder) + gold bottom bar + name + role + bio
- **Coaches:**
  1. **Mario Muñoz** — Director · Head Coach
  2. **Eduardo Muñoz** — Profesor · Tennis Coach
  3. **Aarón Acuña** — Profesor · Tennis Coach

### 8. CTA Section
- Background: `--green-court`
- Centered: label → heading ("Únete a la *Academia Muñoz* hoy mismo") → body → two buttons
- *Academia Muñoz* in gold italic so it reads on green
- Buttons: cream solid ("Ver Programas") + cream outline ("Contactar Ahora")

### 9. Footer
- Background: `--text-dark` (#0d2818)
- 4-column grid: logo + tagline | Navegación | Más | Contacto
- Logo same image as nav
- Gold column headings, muted cream links
- Bottom bar: copyright left, "Tennis · Pádel · Pickleball" right

---

## Image Assets
All images live in `/public/images/`:
- `Green_Bold_Modern_Tennis_Club_Logo.png` — main logo (black background, cream/white design)
- `tennis__1_.png` — adults tennis icon (black on transparent, use CSS filter to recolor)
- `tennis-ball.png` — kids tennis ball icon
- `wheelchair-tennis.png` — wheelchair tennis icon
- `padel.png` — padel racket icon
- `pickleball.png` — pickleball icon

**CSS filter to recolor black icons to green:**
```css
filter: invert(39%) sepia(40%) saturate(600%) hue-rotate(100deg) brightness(0.85);
```

---

## Component Architecture

```
app/
  layout.js          ← Google Fonts, global CSS variables, LanguageBar + Navbar
  page.js            ← Homepage — imports all section components
  globals.css        ← CSS variables, resets, global typography

components/
  LanguageBar.js
  Navbar.js
  Hero.js
  Marquee.js
  Programs.js
  About.js
  Coaches.js
  CTA.js
  Footer.js

public/
  images/            ← All image assets go here
```

---

## CSS Architecture
- **No Tailwind** — plain CSS modules or global CSS
- CSS variables defined in `:root` in `globals.css`
- Each component gets its own `.module.css` file
- `print-color-adjust: exact` on all elements for PDF export

---

## CMS Plan (Phase 2 — Sanity)
Content types to build:
- `program` — title, description, icon, slug
- `coach` — name, role, bio, photo
- `siteSettings` — academy name, contact info, social links
- `page` — Historia page content

---

## Tech Stack
- **Framework:** Next.js 16 (App Router, no TypeScript)
- **Styling:** CSS Modules
- **CMS:** Sanity (Phase 2)
- **Deployment:** Vercel
- **Fonts:** Google Fonts (Cormorant Garamond + Jost)

---

## How to Start a Claude Code Session
1. `cd munoz-academy`
2. `claude`
3. Start your first message with: *"Read PROJECT.md before we start"*
4. Then give your instruction

---

## Current Status
- [x] Design approved (homepage mockup as HTML file)
- [x] PDF proposal delivered to client
- [x] Next.js project scaffolded
- [x] Global styles and CSS variables
- [x] Layout with LanguageBar + Navbar (needs responsive tweaks)
- [ ] Hero component
- [ ] Marquee component
- [ ] Programs component
- [ ] About component
- [ ] Coaches component
- [ ] CTA component
- [ ] Footer component
- [ ] Sanity CMS integration
- [ ] Vercel deployment
