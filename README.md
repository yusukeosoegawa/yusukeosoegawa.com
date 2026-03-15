# Yusuke Osoegawa Personal Website

A minimal personal website.

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
