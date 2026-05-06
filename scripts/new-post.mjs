#!/usr/bin/env node
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: pnpm new-post "Title of the post"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

if (!slug) {
  console.error('Title produced an empty slug — try different words.');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const dir = resolve(root, 'src/content/field-notes');
const file = resolve(dir, `${slug}.md`);

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
if (existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: ""
pubDate: ${today}
draft: true
tags: []
# linkedinUrl: ""
---

`;

writeFileSync(file, frontmatter);
console.log(`Created  src/content/field-notes/${slug}.md`);
console.log(`URL      /field-notes/${slug}`);
console.log(`\nNext: write the post, set draft: false, then commit + push.`);
