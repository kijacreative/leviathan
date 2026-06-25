# Leviathan AI Systems — Design System

> Enterprise AI infrastructure built for scale. A deep-sea intelligence that became a technology company — commanding, ancient power channeled into modern precision.

Leviathan AI Systems builds enterprise AI infrastructure for complex legal and operational environments. The brand is named for the mythological sea creature, and the identity leans fully into that: the **abyss** (near-black ocean), **god rays** descending from a far-off surface, **bioluminescent** cyan glow, and **metallic chrome** drawn from the logo. Everything should feel like precision engineering emerging from immense depth and pressure.

## Products represented
The **Leviathan Platform** is a suite of AI solutions for complex enterprise operations:
- **Leviathan Intake AI** — automate legal intake & case evaluation
- **Leviathan Litigation Engine** — AI-powered litigation intelligence
- **Leviathan Analytics** — advanced data & risk analytics
- **Leviathan Vendor Network** — optimize vendor management and compliance

Underlying capability pillars ("Technology Powered by the Deep"): **AI Infrastructure** (enterprise architecture built for scalability), **Generative Intelligence** (models that understand and generate complex legal work), and **Adaptive Systems** (continuously learning AI tailored to evolving enterprise needs).

## Sources given
- `uploads/Leviathan-Logo.webp` — primary logo lockup (mark + wordmark).
- `uploads/screencapture-leviathanaisystems-ai-2026-06-23-15_30_18.png` — full homepage screenshot of **leviathanaisystems.ai** (the live marketing site). All colors, layout, and the product-card imagery in this system were derived from it.
- Brand brief: "commanding, intelligent, ancient power channeled into modern precision … what would happen if a deep-sea intelligence became a technology company."

No codebase or Figma file was provided. The website UI kit is therefore reconstructed from the screenshot + brand brief; product-card imagery is cropped directly from the screenshot (see Caveats).

---

## CONTENT FUNDAMENTALS — how Leviathan writes

**Voice:** authoritative, precise, and quietly powerful. Leviathan speaks like enterprise infrastructure that has seen everything and is not impressed easily. Confident, never hype-y; technical without jargon soup.

**Tone:** commanding and calm. Short declarative statements. The depth/ocean metaphor is used sparingly and with restraint — "Powered by the Deep," "command the depth of your data" — never cartoonish (no sea-creature puns, no emoji).

**Person:** addresses the customer as **you / your enterprise**; refers to the company as **Leviathan** or **we**. Product names always carry the **Leviathan** prefix in full ("Leviathan Intake AI", not "Intake").

**Casing:**
- Headlines & section titles: **Title Case** ("AI Solutions for Complex Enterprise Operations", "Technology Powered by the Deep").
- Eyebrows / overlines / metadata / badges: **UPPERCASE** with wide tracking, set in mono ("LEVIATHAN PLATFORM", "PRIVATE DEMO").
- Body: sentence case.
- CTAs: Title Case in copy ("Request a Private Demo"); buttons render the label **UPPERCASE** automatically via the component.

**Length:** headlines are 3–7 words. Product descriptions are a single capability phrase ("AI-Powered Litigation Intelligence"). Body paragraphs stay under ~2 lines.

**Emoji:** never. **Exclamation points:** effectively never. Numbers/stats are used only when real and meaningful (confidence %, match counts) — no decorative data.

**Example copy:**
- Hero: *Enterprise AI Infrastructure Built for Scale* → *Request a Private Demo*
- Platform eyebrow: *Leviathan Platform* / *AI Solutions for Complex Enterprise Operations*
- Footer CTA: *Command the depth of your data.* / *See how Leviathan turns enterprise complexity into precise, defensible intelligence.*

---

## VISUAL FOUNDATIONS

**Overall vibe.** Deep-sea command center. Dark, pressurized, luminous. Content floats as glass panels over an abyssal gradient lit by distant god rays. Light reads as *bioluminescence* — cool cyan glow — never warm.

**Color.** Backgrounds are abyssal: pure black header (`--ink`) into deep navy (`--abyss-900/800/700`). The brand blue ladder runs ocean → CTA → primary (`--leviathan-500 #2c6bb3`). Highlights and glow come from **bioluminescent cyan** (`--biolume-300/400`, the logo's `#81c3e0`) and **metallic chrome** (`--chrome-100/300`). Neutrals are cool steel-blue grays, never warm gray. Status colors are cool-shifted. See the Colors cards.

**Type.** Display = **Jura** (geometric, futuristic, wide) set with generous `0.04em` tracking — feels engineered and slightly alien. Body = **Hanken Grotesk** (neutral, highly readable). Technical/data = **JetBrains Mono**, used for eyebrows, badges, metrics, and metadata in UPPERCASE with wide tracking. Headlines are medium weight, never heavy.

**Spacing & layout.** 4px grid. Generous vertical rhythm; content centered in a ≤1320px column. The marketing site is a single tall scroll; sections are centered with an eyebrow + title pattern. Grids use `gap`, not margins. Header is fixed at 72px.

**Backgrounds.** The signature is the **abyss + god rays**: a radial depth gradient (`--grad-depth`) with soft vertical light beams and drifting "marine snow" particles (see `ui_kits/website/Atmosphere.jsx`). Generated in CSS so it scales; never a flat color. Product imagery is dark, cool, slightly desaturated tech photography with cyan data-viz overlays.

**Corners & cards.** Sharp and engineered — radii are restrained (cards 4–6px, never pill-rounded except true pills). Cards are **glass**: translucent deep-ocean fill, hairline cyan-tinted border, backdrop blur. Interactive cards lift 3px and gain a bioluminescent glow on hover.

**Borders.** Hairlines are bioluminescent rim light — `rgba(129,195,224,0.10–0.38)`, not gray. 1px default, 2px for emphasis.

**Shadows.** Deep and cool (`rgba(0,0,0,0.4–0.6)`), plus a separate **glow** system (`--glow-sm/md/lg`, cyan) layered on top for emphasis and depth. Metallic edges use inner rim-light (`--rim-top`).

**Transparency & blur.** Used deliberately for glass surfaces (cards, header, modals) — backdrop blur 8–24px over the abyss. Overlays dim to `rgba(2,6,12,0.72)`.

**Motion.** Slow and weighty, like moving through water — `--ease-deep` cubic-bezier(0.22,1,0.36,1), durations 220–420ms. Hero logo and god rays drift on long loops. Modals rise + fade. Respect `prefers-reduced-motion`. No bounces, no snappy overshoot.

**Hover / press.** Hover = brighten + add/intensify glow (primary button gains glow; cards lift). Press/active = settle (no large shrink). Links shift from `--text-secondary` to `--text-primary`. Focus draws a cyan ring (`--ring`).

**Imagery color.** Cool, deep, slightly desaturated — blues and blacks with cyan accents. Warm tones (the wooden desks, leather books in product tiles) appear only inside source photography, never in UI chrome.

---

## ICONOGRAPHY

The site uses **thin-line outline icons** (≈1.5px stroke, rounded joins, no fill) — edit/pencil, brain, monitor-with-chart, people, server-stack, book. This system standardizes on **[Lucide](https://lucide.dev)** (loaded via CDN: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`), whose thin-line outline style matches the source exactly. Render with `<i data-lucide="name"></i>` then call `lucide.createIcons()`.

- **No emoji**, ever. **No unicode glyph icons.**
- Icons are monochrome, inheriting `currentColor` (typically `--text-secondary` or `--biolume-300` for accents). Never multicolor.
- Small inline SVGs are hand-written only for trivial chrome (chevrons, the ✕ close, checkmarks) where loading an icon font is overkill.
- The **logo mark** (`assets/leviathan-mark.png`) is the brand's hero glyph — a metallic chrome "L" — used in the header and footer. Do not recolor or flatten it.

**Substitution flag:** Lucide is a substitute for the site's (unidentified) icon set. The match is very close in weight and style; swap to the real set if/when source SVGs are provided.

---

## INDEX — what's in this system

**Root**
- `styles.css` — entry point; `@import`s every token + font file. Consumers link this one file.
- `readme.md` — this guide. `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css` (Jura / Hanken Grotesk / JetBrains Mono via Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (shadows, glow, blur, motion, signature gradients).

**`assets/`** — `leviathan-logo-full.png` (lockup), `leviathan-mark.png` (mark), `abyss-rays.png` + `ocean-band.png` (texture refs), `products/*.png` (7 product/capability tiles cropped from the source site).

**`components/core/`** — reusable primitives (each `.jsx` + `.d.ts` + `.prompt.md`):
`Button`, `IconButton`, `Card`, `Badge`, `Tag`, `Input`, `Select`, `Checkbox`, `Switch`, `Tabs`, `Avatar`, `ProgressBar`. Showcase: `core.card.html`. Namespace: `window.LeviathanAIDesignSystem_f4b286`.

**`guidelines/`** — foundation specimen cards (Design System tab): color ladders, type specimens & scale, spacing/radii/elevation/glow, logo & mark.

**`ui_kits/website/`** — high-fidelity interactive recreation of the marketing homepage. See its `README.md`.

---

## CAVEATS — please help me make this perfect
- **Fonts are a best-guess substitution.** The site's headline face is unidentified; **Jura** is the closest geometric-futuristic match, loaded from Google Fonts (not shipped as local `@font-face` files). **If you have the real brand fonts, send them** and I'll wire them in.
- **Product/capability tiles are screenshot crops** (icon + title baked into each image, low-res). No source images, codebase, or Figma were available. Send production art and I'll rebuild the cards as live text over clean imagery.
- **No codebase/Figma** — the website UI kit is reconstructed from one screenshot + the brief. If a repo or Figma exists, share it and I'll tighten the recreation to source.
- **Icons are Lucide (substitute)** — close in style; swap to the real set if provided.

**My ask:** confirm the **fonts**, send **real product imagery** + any **codebase/Figma**, and tell me which **other products/surfaces** (app dashboard? docs?) you want UI kits for next.
