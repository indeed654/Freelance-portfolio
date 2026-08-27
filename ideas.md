# Yashu Portfolio — Design Direction

## Three initial approaches

### Approach 1
**Theme Name:** Editorial Signal

**Very Brief Intro:** A refined digital-magazine aesthetic that pairs ink-black structure with warm paper tones, sharp typography, and selective citrus color. It positions Yashu as a thoughtful design engineer whose portfolio is itself a piece of editorial craft.

**Probability:** 0.07

### Approach 2
**Theme Name:** Quiet Luxury Studio

**Very Brief Intro:** An art-directed, gallery-like portfolio with soft stone backgrounds, generous whitespace, restrained serif type, and muted brass accents. The feeling is premium, calm, and highly considered.

**Probability:** 0.03

### Approach 3
**Theme Name:** Kinetic Night Market

**Very Brief Intro:** A dark, energetic creative-coding direction with saturated electric accents, modular UI panels, and animated browser windows. It feels experimental and fast-moving while still anchored in business outcomes.

**Probability:** 0.09

## Chosen approach: Editorial Signal

### Design Movement
Contemporary Swiss editorial design remixed for the web: asymmetrical composition, disciplined typographic hierarchy, visible grid logic, and an art-directed rhythm that feels like a print feature made interactive.

### Core Principles
1. **Lead with proof, not claims.** The interface should show what a polished website can look like before explaining the service.
2. **Structure with contrast.** Use an ink-black canvas, warm paper surfaces, hairline rules, oversized numerals, and one high-energy accent to create a clear reading order.
3. **Make the portfolio feel authored.** Each demo project gets its own visual identity, crop, color world, and interaction treatment rather than living inside one repeated card template.
4. **Keep conversion close to the craft.** Every major visual statement should resolve into a clear next step: explore work, discuss a project, or contact Yashu.

### Color Philosophy
The base is **Ink** (#10100f), a confident near-black that gives interface previews and type an exhibition-like presence. **Paper** (#f3f0e8) provides warmth and reading comfort without looking like a generic white SaaS page. **Signal Citrus** (#d9ff62) is the ownable brand spark: optimistic, energetic, and useful for action states without resorting to neon cyberpunk. Supporting tones include rust, mist, and muted olive for project-specific accents. Color is used as editorial punctuation, not decoration.

### Layout Paradigm
Use a split editorial frame rather than a centered marketing stack. A sticky left rail introduces the section and its oversized index; the right side carries staggered content, case-study panels, and edge-to-edge visual crops. On mobile, the rail becomes a compact section marker and the composition remains intentionally layered instead of simply collapsing into equal cards.

### Signature Elements
- Oversized section indices such as `01 / WORK` and compact mono labels that make the page feel catalogued and collectible.
- Browser-window mockups and cropped interface canvases that reveal the demo brands as artifacts of the work.
- Thin ruled dividers, citrus underlines, and small “built for…” labels that reinforce the editorial system.

### Interaction Philosophy
Interactions should feel like turning a page or focusing a lens: quick, directional, and informative. Hovering a project reveals the industry and a clear action; buttons use a slight lift and citrus fill; navigation highlights the current section without excessive motion. Clicks should always expose a useful next layer, never decorative motion without meaning.

### Animation
Use scroll reveals with 30–60ms staggered delays, translating content on the Y axis by 12–18px and fading in over 220–320ms with a strong ease-out. Browser previews can use a slow 2–4px float and subtle image-scale on hover. The hero mark gets a one-time line-draw reveal, while the marquee uses a restrained 22s linear loop only where it adds orientation. Respect `prefers-reduced-motion`; replace parallax and float with opacity-only transitions. Avoid animating layout properties.

### Typography System
- **Display:** `DM Serif Display`, used sparingly for intimate editorial statements such as the hero kicker and final CTA line.
- **Sans:** `Space Grotesk`, for headlines, navigation, buttons, labels, and project names; use 500–700 weights for confident hierarchy.
- **Mono:** `IBM Plex Mono`, for metadata, section indices, pricing labels, and technical microcopy.
- Hierarchy rule: one dominant line per viewport, supporting copy capped at readable widths, and metadata always smaller with increased letter spacing. Never use bold for every line; contrast weight, case, and family instead.

### Brand Essence
**Yashu makes modern websites for businesses that want to look as capable online as they are in real life — combining sharp design, clean development, and commercial clarity.**

**Personality:** considered, energetic, dependable.

### Brand Voice
Headlines are direct and memorable. CTAs are invitations to collaborate, never hype. Microcopy sounds observant, practical, and specific. Avoid filler and unsupported claims.

Example lines:
- “Your website is often the first room your business invites people into.”
- “Bring me the rough idea. I’ll bring the structure, polish, and momentum.”

### Wordmark & Logo
Create a compact symbol from a custom **Y-shaped route mark**: two angled strokes converge into a single vertical stem, suggesting a page fold, a cursor path, and the letter Y at once. Pair it with a spaced uppercase `YASHU` wordmark in Space Grotesk, but treat the symbol as the primary recognition device. Use the symbol at a clearly visible size in the header and favicon.

### Signature Brand Color
**Signal Citrus — #D9FF62.** It is the visual trigger for action and optimism: bright enough to be owned, warm enough to sit next to paper, and disciplined enough to avoid the common purple-gradient portfolio look.

## Build commitments

The portfolio will use structured data for services, projects, packages, and contact configuration so the editable values live in one place. The six demo brands will share the same navigation shell but not the same visual identity: SOLEVA will use graphite and acid green, ARVANA sand and cobalt, AURELIA cream and oxblood, SHREE MITHAS saffron and maroon, EMBER & BEAN charcoal and terracotta, and NOVA INTERIORS pale stone and olive. All project claims will be clearly marked as conceptual/demo work, with no fabricated testimonials, client names, awards, revenue, or performance statistics.

## Style Decisions

- Signal Citrus #D9FF62 is primarily editorial punctuation: reserve it for CTAs, section markers, key numerals, underlines, and rare hero-level panels rather than using it as a repeated default background.
- The custom Y route mark appears as a recognizable brand device across section indices, the hero stamp, the work footer line, header, footer, and favicon, paired with the spaced uppercase YASHU wordmark.
- Project presentations vary in crop, scale, and layout rhythm so each conceptual brand reads as its own designed artifact rather than a repeated portfolio card.
