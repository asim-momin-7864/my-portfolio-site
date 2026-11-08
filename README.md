# Asim Momin - Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4. One page. No database.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # check before deploy
```

## Edit content
Open `lib/data.ts`. All text, links, projects, certificates and photos are there.
If a link is `""`, its button is hidden.

## Add images
1. Copy the file into `public/images/<folder>/` (folders: `projects`, `achievements`, `moments`, root for profile).
2. Use WebP or JPG. Width 1200 px or less. Under 300 KB each.
3. In `lib/data.ts`, set the path WITHOUT "public", for example `/images/projects/feature-flow.webp`.
4. Delete the old `.svg` placeholder.

## Add resume
Put your PDF at `public/resume/Asim_Momin_Resume.pdf` (same name replaces the placeholder).

## Deploy
Push to GitHub, import the repo in Vercel, click Deploy. No environment variables needed.
