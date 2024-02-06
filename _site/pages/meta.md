---
title: "Meta (about this site)"
permalink: "/meta.html"
eleventyExcludeFromCollections: true
layout: page
---

# Meta (About This Site)

**Forgotten Notes** is created using [11ty](https://www.11ty.dev/), hosted on [GitHub](https://github.com/), deployed with [Vercel](https://vercel.com/), and facilitated by the GitHub [Publisher](https://github.com/ObsidianPublisher) plugin for [Obsidian](https://obsidian.md/). If interested, you can browse the [source](https://github.com/semanticdata/eleventy-garden) code.

## Background

Forgotten Notes has gone through many changes. I have not been shy about moving from technology to technology as I learn new things. Coming across the world of [[Static Site Generators|Static Site Generators]] was a game changer. I have ran my notes through [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), [MkDocs](https://squidfunk.github.io/mkdocs-material/), and most recently [Zola](https://www.getzola.org/).

However, this site is not specifically built with any of the aforementioned. Instead I have opted to follow in the footsteps of [Jacky Zhao](https://github.com/jackyzha0) and created my [[Digital Garden|Digital Garden]] using the new fully rewritten [Quartz](https://github.com/jackyzha0/quartz)—a set of tools that helps you publish your digital garden and notes as a website for free.

## Technology

All content for the site is written in [[Markdown|Markdown]] within [Obsidian](https://obsidian.md/)—an extensible, flexible note-taking app. To export the notes from Obsidian, I rely on the [GitHub Publisher](https://github.com/ObsidianPublisher) plugin.

The [source code](https://github.com/semanticdata/eleventy-garden) is hosted in [GitHub](https://github.com/).

## Features

- Fast Natural-Language Search
- Bidirectional Backlinks
- Floating Link Previews
- Admonition-style Callouts
- Markdown Links and Wikilinks Support
- Latex Support

## File Structure

```plaintext
.
├── .github/
│   └── workflows/
│       └── build-test.yml
├── src/
│   ├── _data/
│   │   └── site.json
│   ├── _includes/
│   │   ├── backlinks.html
│   │   ├── darkmode-toggle.html
│   │   └── head.html
│   ├── assets/
│   │   ├── avatar.png
│   │   ├── favicon.ico
│   │   ├── script.js
│   │   └── style.css
│   ├── layouts/
│   │   ├── default.html
│   │   ├── note.html
│   │   └── post.html
│   ├── notes/
│   │   ├── notes.md
│   │   ├── notes.11data.js
│   │   └── ...
│   ├── pages/
│   │   ├── about.md
│   │   ├── journal.md
│   │   ├── meta.md
│   │   └── uses.md
│   ├── posts/
│   │   ├── blog-posts.md
│   │   ├── posts.11tydata.js
│   │   └── ...
│   └── index.md
├── .eleventy.js
├── .eleventyignore
├── .gitattributes
├── .gitignore
├── LICENSE
├── README.md
├── package.json
└── pnpm-lock.yaml
```
