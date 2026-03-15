# Yusuke Osoegawa Personal Website

A minimal text-first personal website built with Next.js, TypeScript, and MDX.

## Stack

- Next.js (App Router)
- TypeScript
- MDX content from `/content/writing`
- Static generation where possible
- Ready for Vercel deployment

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Add a new article

1. Create a new `.mdx` file inside `content/writing`.
2. Use this frontmatter shape:

```mdx
---
title: "Article Title"
date: "2026-03-16"
summary: "A short summary."
tags:
  - Tag One
  - Tag Two
draft: false
---
```

3. The filename becomes the slug. Example:

- File: `my-new-note.mdx`
- URL: `/writing/my-new-note`

Set `draft: true` to hide a post from the writing index and home page.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Vercel will detect Next.js automatically.
4. Deploy.

## Set the custom domain

In Vercel:

1. Open the project.
2. Go to **Settings → Domains**.
3. Add `yusukeosoegawa.com`.
4. Point the domain from your registrar to Vercel as instructed in the Vercel dashboard.

## Update external profile links

Edit the `links` array in:

- `app/links/page.tsx`

## Update site-wide metadata

Edit:

- `app/layout.tsx`

## Main content locations

- Home page: `app/page.tsx`
- About page: `app/about/page.tsx`
- Writing index: `app/writing/page.tsx`
- Writing posts: `content/writing/*.mdx`
