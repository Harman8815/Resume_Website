# Harman Deep Singh — Portfolio

A responsive editorial portfolio built with Next.js App Router, React,
TypeScript, and CSS. Pages are server-rendered; a small client-side layer powers
the accessible project disclosures and optional scroll reveals. Content remains
visible when JavaScript is unavailable, and reveals respect reduced-motion
preferences.

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

- `/` — profile, skills, coding profiles, projects, education, and contact details.
- `/achievements` — coding profile snapshots and the certificate titles listed in
  the legacy data.

Project content is maintained in `data.json`. The achievements route reads
`achievements/certificates.json`; add the referenced image assets to a `public`
directory if certificate artwork is restored. Existing image files were not
present in this repository checkout, so the app does not render broken image
references.

Project disclosures show the descriptions and usable links present in
`data.json`. Add verified architecture, technology, testing, and outcome details
to the project data before presenting them as case-study claims.

Profile details and social links are maintained in `app/page.tsx` and
`app/achievements/page.tsx`. Update those values when profile information changes.

## Production

Run `npm run build` and then `npm run start` to test the production server locally.
The project can be deployed to a Node.js hosting provider that supports Next.js.
