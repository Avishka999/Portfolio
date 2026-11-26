# Avishka Priyashan — Portfolio

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Personalise

- Add a profile photo at `src/assets/profile.jpg` and set `profileImage` in `src/data/personalInfo.js`.
- The downloadable CV is served from `public/Avishka-CV.pdf`; replace that file with the latest CV while keeping the filename unchanged.
- Update the GitHub, LinkedIn and email values in `src/data/personalInfo.js` if they change.
- The Flood Detection project displays the supplied preview in `src/assets/flood-detection-feature.png`; Yum Yard and NULL POINT previews are also included. Add other screenshots there and update `src/data/projects.js`.
- Complete AuraFinance's project description and technology list in `src/data/projects.js` when those details are ready.
- Add deployed project URLs only when they are available.

## Motion and accessibility

GSAP ScrollTrigger powers the scroll reveals, featured-project updates and desktop-only pinned project gallery. On smaller screens the gallery uses native horizontal scrolling, and reduced-motion preferences disable the animated scroll effects.

## Deploy

Push the repository to GitHub, import it into Vercel, keep the default Vite settings, and deploy. Vercel will provide a public URL that can be shared on a CV or LinkedIn profile.
