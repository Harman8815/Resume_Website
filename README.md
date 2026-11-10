# Harman Deep Singh — Portfolio

A responsive editorial portfolio built with Next.js App Router, React,
TypeScript, and CSS. Pages are server-rendered; a small client-side layer powers
smooth scrolling, scroll-triggered animations, and accessible project disclosures.
Content remains visible when JavaScript is unavailable, and animations respect
reduced-motion preferences.

## Requirements

- Node.js 20.9 or later
- npm

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint
npm run typecheck # Run the TypeScript checker
npm run build     # Create a production build
npm run start     # Serve the production build
```

## Routes and content

- `/` — profile, experience, education, skills, projects, achievements, and
  additional resume details.
- `/achievements` — competitive programming and community achievements.

Resume content is maintained in typed TypeScript modules under `data/`:

- `profile.ts` — objective and contact links.
- `experience.ts` and `education.ts` — work and academic history.
- `skills.ts` — grouped technical skills.
- `projects.ts` — project descriptions, dates, technologies, and outcomes.
- `achievements.ts` — competitive programming and community activities.
- `additional.ts` — languages, volunteering, interests, and soft skills.

The home page and `/achievements` route map these records into the interface.
Update the corresponding data module when resume details change. Reported
statistics are presented as supplied and are not live profile data.

## Animation architecture

The portfolio uses GSAP ScrollTrigger and Lenis smooth scroll for cinematic
scroll-driven animations:

- **Lenis smooth scroll** — buttery-smooth custom scroll with momentum and
  lerp-based interpolation.
- **GSAP ScrollTrigger** — scroll-linked animations including timeline drawing,
  parallax effects, masking reveals, and progress indicators.
- **IntersectionObserver** — lightweight section reveal triggers.

### Section animations

| Section     | Technique                    | Behaviour                                                    |
| ----------- | ---------------------------- | ------------------------------------------------------------ |
| Hero        | Clipping mask + parallax     | Heading reveals from bottom, background moves slower         |
| Experience  | Timeline drawing             | Vertical line draws progressively, markers activate         |
| Education   | Sequential markers           | Timeline markers activate in order with connecting lines     |
| Skills      | Scroll highlighting          | Categories highlight as their section enters view           |
| Projects    | Progress indicator           | Progress bar tracks current project position                 |
| Achievements| Progress bars                | Bars draw as rows become visible                            |
| Contact     | Typography expansion         | Letter-spacing animation with email underline drawing        |
| Footer      | Parallax depth               | Decorative elements move at different scroll speeds         |

All animations respect `prefers-reduced-motion` and skip entirely when the
preference is active.

## Production

Run `npm run build` and then `npm run start` to test the production server locally.
The project can be deployed to a Node.js hosting provider that supports Next.js.
