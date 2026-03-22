# illite.fotos — Website Style Guide v2.0

---

## 1. Brand Essence & Visual Identity

The **illite.fotos** brand operates at the intersection of street culture, athletic prestige, and high-end editorial photography. The work spans professional wrestling (WWE, AEW, NXT), fitness, and lifestyle — but the throughline is always the same: **unapologetic, larger-than-life portraiture with a culture-forward edge.**

The brand has a distinct personality that goes beyond "dramatic photography." Think: a luxury sneaker brand and a wrestling pay-per-view program raised by a fashion magazine. It's exclusive but accessible, polished but raw.

**Brand Keywords:** Edgy · Dramatic · Powerful · Polished · Cinematic · Culture-Forward · Unapologetic · Street Prestige

**Target Audience:** Pro-athletes, wrestling talent, fitness models, talent agencies, editorial magazines, and brands operating in the sports/entertainment space.

**Active Markets:** Orlando · Tampa · Miami (and available for travel bookings)

---

## 2. Color Palette

The site uses a dark, sophisticated base to let high-contrast photography breathe. Every color choice should reinforce the premium-but-gritty aesthetic.

| Role | Hex | Name | Usage |
|---|---|---|---|
| **Primary Background** | `#0A0A0A` | Deep Obsidian | Main site background |
| **Secondary Background** | `#121212` | Eerie Black | Cards, panels, overlays |
| **Primary Accent** | `#A8A9AD` | Chrome Silver | Borders, dividers, UI highlights, hover states |
| **CTA Accent** | `#E31B23` | Crimson | Booking buttons, active states, urgent CTAs only |
| **Tertiary Accent** | `#00E5FF` | Electric Cyan | Optional: sparingly for modern edge (tags, icons) |
| **Primary Text** | `#E0E0E0` | Platinum | Body copy, nav labels |
| **Muted Text** | `#757575` | Carbon Gray | Captions, metadata, timestamps |

> **Note on Gold:** Metallic gold (#D4AF37) has been removed. It reads as generic "championship" kitsch and doesn't reflect the cool, desaturated tones of the actual photography. Chrome Silver better mirrors the editorial retouching style.

---

## 3. Typography

Typography should feel like a poster, a magazine cover, and a streetwear drop all at once — bold, intentional, and premium.

### Fonts

| Role | Font | Weight | Style |
|---|---|---|---|
| **Headings / Display** | Bebas Neue | 400 (Regular) | All-caps, wide tracking |
| **Subheadings / Labels** | Oswald | 600 (SemiBold) | All-caps, tight tracking |
| **Body Copy** | Space Grotesk | 400 / 500 | Sentence case, relaxed leading |
| **Captions / Accent** | Playfair Display | 400 Italic | Sparingly — "As Seen In," pull quotes |

All fonts are available on Google Fonts.

### Type Scale

| Element | Font | Size | Notes |
|---|---|---|---|
| Hero Title | Bebas Neue | 96–120px | Full-bleed, stacked, cinematic |
| Section Header | Bebas Neue | 48–64px | Left-aligned |
| Card / Shoot Title | Oswald SemiBold | 18–24px | All-caps, letter-spacing: 0.1em |
| Body / Bio | Space Grotesk | 15–17px | Line-height: 1.7 |
| Press Logos / Meta | Playfair Display Italic | 13–15px | Muted color, centered |

### Letter Spacing Rules

- **Headings:** `letter-spacing: 0.05em` — gives room to breathe at large sizes
- **Subheads/Labels:** `letter-spacing: 0.15em` — premium, airy feel
- **Body:** `letter-spacing: 0` — natural reading

---

## 4. Layout & User Experience (UX)

The site should function like a **backstage pass** — the imagery is the interface, and every section should feel curated, not catalogued.

### Page Structure (Top to Bottom)

1. **Sticky Nav** — Minimalist, dark, transparent over hero
2. **Hero — Full-Bleed Slider** — Signature shots, one at a time, autoplay with manual control
3. **Signature Series** — Featured shoot spotlights (2–3 hero clients)
4. **Masonry Gallery** — Full portfolio by category
5. **"As Seen In" Ticker** — Press/brand logos
6. **Behind the Lens** — BTS video section
7. **About** — Brief, punchy bio with location and philosophy
8. **Booking** — Streamlined contact form
9. **Footer** — Social links, copyright, minimal

### Navigation

Minimalist top bar, transparent over hero, dark background on scroll.

Labels: `Gallery` · `Signature` · `Press` · `About` · `Book Now`

Use a hamburger/slide-out menu on mobile. "Book Now" should always be a Crimson button — the one hard CTA on the page.

### Whitespace

Use generous **dark space** (not white) around images — think fine art gallery, not social media grid. Images should breathe.

---

## 5. Hero Section

Full-screen slider featuring the highest-profile work. No text clutter — just the image, the client name in Bebas Neue (bottom-left), and a subtle category label.

- **Transition:** Slow cross-fade (1.2s ease-in-out)
- **Aspect Ratio:** 16:9 on desktop, 9:16 (portrait crop) on mobile
- **Overlay:** Subtle gradient at bottom (transparent → `#0A0A0A`) to blend into the next section
- **Autoplay Interval:** 5–6 seconds

---

## 6. Signature Series Section

> *This is the most important addition to the original guide.*

Above the general gallery, dedicate a section to **2–3 hero shoots** — the work that defines the brand. Each entry should feel like an editorial spread.

### Structure per Shoot

- Full-bleed image (or split: image left / text right)
- **Shoot Title** in Bebas Neue (e.g., *"BONNIE & CLYDE"*)
- **Client Name** in Oswald SemiBold
- **One-line concept** in Space Grotesk (e.g., *"A modern retelling. Karrion Kross x Scarlett Bordeaux."*)
- Optional: Press mention in Playfair Italic (e.g., *"As featured in Fitness Gurls"*)

### Suggested Spotlight Clients

- Karrion Kross & Scarlett Bordeaux — *Bonnie & Clyde*
- Harley Cameron
- Jakara Jackson
- Matt Riddle

---

## 7. Masonry Gallery

The main portfolio grid. Mix of vertical hero shots and horizontal action shots — no forced cropping.

### Specs

- **Layout:** Masonry (CSS columns or JS library like Masonry.js or Packery)
- **Column Count:** 3 on desktop · 2 on tablet · 1 on mobile
- **Gap:** 8–12px (tight, editorial)
- **Border Radius:** 0 (hard edges only — softness doesn't fit the brand)

### Hover Effects

- **Scale:** `transform: scale(1.03)` on hover (subtle zoom-in)
- **Overlay:** Dark overlay fades in with client name + category label
- **Transition:** `all 0.3s ease`

### Categories (Filter Tabs)

`All` · `Theatrical / Wrestling` · `Fitness / Editorial` · `Lifestyle`

Filter tabs styled in Oswald, all-caps, with Crimson underline on active state.

---

## 8. Image Presentation & Style

The site must support **high-fidelity assets**. Compression should never be visible.

- **Format:** WebP with JPEG fallback
- **Resolution:** Serve at minimum 1400px wide for hero images
- **Editing Tone:** High-contrast, "airbrushed" finish — the site's presentation should match the retouching style of the work itself (dark, punchy, clean skin)
- **No filters applied by CSS** — the images already carry the aesthetic

---

## 9. "As Seen In" / Press Section

A horizontally scrolling ticker (infinite loop) or static logo grid featuring:

- WWE
- AEW
- NXT
- Fitness Gurls
- Playboy
- (Add others as applicable)

Logos should be white/platinum on dark background (`filter: brightness(0) invert(1)` if needed). Use Playfair Display Italic for the section label: *"As Seen In"*

---

## 10. Behind the Lens (BTS Video Section)

> *New section — not in original guide.*

Short-form video content (Instagram Reels or TikTok embeds, or self-hosted MP4) showing the production process. This is a major brand differentiator.

- **Format:** 2–4 embedded vertical videos in a horizontal scroll row, OR a single featured autoplay reel (muted, looping)
- **Section Headline:** `BEHIND THE LENS` in Bebas Neue
- **Subhead:** *"Where the magic happens."* in Space Grotesk

---

## 11. Booking Section

The booking section should feel like a **premium intake form**, not a generic contact page.

### Copy

**Headline:** `LET'S CREATE SOMETHING ICONIC`
**Subhead:** *Serious inquiries only. Tell me your vision and let's get to work.*

### Form Fields

- Name
- Email
- Phone (optional)
- Project Type: `Studio Session` · `On-Location` · `Event / Live` · `Editorial`
- Market: `Orlando` · `Tampa` · `Miami` · `Other / Travel`
- Tell me your vision *(open text — required)*
- How did you hear about us?

**CTA Button:** `SEND IT` — Crimson background, Bebas Neue, all-caps

> Avoid sterile language like "Submit Form." Keep the voice consistent with the brand.

---

## 12. About Section

Brief, punchy. Not a resume — a statement.

**Structure:**
- One strong portrait of the photographer (or a behind-the-scenes shot)
- 2–3 short paragraphs max
- Emphasize: markets served (Orlando · Tampa · Miami), industries (wrestling, fitness, editorial), and the brand's philosophy
- Tone: confident, first-person, no filler

---

## 13. Mobile Experience

- All hero imagery must have portrait-oriented crops prepared
- Navigation collapses to hamburger (slide from right)
- Gallery becomes single-column masonry
- Booking form is full-width, single column
- "Book Now" sticky button pinned to bottom on mobile

---

## 14. Performance & Technical Notes

- Use lazy loading on all gallery images (`loading="lazy"`)
- Implement smooth scroll behavior (`scroll-behavior: smooth`)
- Dark mode is the only mode — no light mode toggle needed
- Ensure Open Graph meta tags are set (title, description, and a hero image) for social sharing
- Google Fonts load: Bebas Neue · Oswald · Space Grotesk · Playfair Display

---

## Developer Summary

> *"Build a dark-mode, high-contrast site using Bebas Neue for display headers, Oswald for labels, and Space Grotesk for body copy. Lead with a full-bleed hero slider, then a Signature Series section spotlighting 2–3 hero shoots before the masonry gallery. Use Chrome Silver (#A8A9AD) as the primary accent and Crimson (#E31B23) exclusively for booking CTAs. Include a BTS video section and a booking form that feels like a premium creative intake — not a contact page. The site should feel like a luxury streetwear lookbook crossed with a wrestling pay-per-view program. Every design decision should serve the photography."*