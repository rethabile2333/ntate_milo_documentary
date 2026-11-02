# Ntate Milo Documentary Website

A cinematic, responsive React + Vite website documenting Monamoli Lucas Mahlekele (Ntate Milo), based on the interview provided for the project.

## Run locally

Requirements: a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To make a production build, run `npm run build`.

## Pages

- `/` — documentary home
- `/childhood` — Leropong, family, hardship, community support and values
- `/music-career` — musical beginnings, collaborators and the 2021 breakthrough
- `/achievements` — education, Dozen Brains, Milo Music Entertainment and milestones
- `/inspiration` — life lessons, faith, discipline and community work
- `/gallery` — photos and video slots
- `/contact` — documentary contributions

## Add photographs and videos

Existing supplied photos are in `public/images/`.

Suggested additional folders:

```text
public/media/
├── childhood/
├── music/
├── achievements/
├── community/
└── videos/
```

The Gallery page includes optional image slots using these example paths:
- `/media/childhood/young-milo.jpg`
- `/media/music/live-performance.jpg`
- `/media/achievements/milo-music-entertainment.jpg`
- `/media/community/community-tournament.jpg`

It also includes MP4 video slots at:
- `/media/videos/documentary-trailer.mp4`
- `/media/videos/interview.mp4`

Place the matching files in the folders above. Use reasonably compressed images and videos; for longer films, consider hosting on YouTube or a video platform and embedding the video instead. Only publish media you have permission to use.

## Content and accuracy

The biographical content is based on Ntate Milo's supplied interview. Check names, dates, translations and public-facing details with him before publishing. Some personal topics are sensitive; respect his consent and boundaries. The contact form prepares an email and does not store submissions on a server.
