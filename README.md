[![Fetch Messages from Protect Artshack's Mission Form](https://github.com/artshackcommunity/artshackcommunity.github.io/actions/workflows/fetch-messages.yml/badge.svg)](https://github.com/artshackcommunity/artshackcommunity.github.io/actions/workflows/fetch-messages.yml)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install packages:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Steps to update the community messages

1. Log in as the repo owner
2. Visit the Fetch Messages from Protect Artshack's Mission Form
action [workflow](https://github.com/artshackcommunity/artshackcommunity.github.io/actions/workflows/fetch-messages.yml)
3. Select the main branch and click "Run workflow"
4. Go to the [actions page](https://github.com/artshackcommunity/artshackcommunity.github.io/actions) to see all running workflows and ensure the status is green when the action completes
5. Visit the Deploy Next.js to Pages action [workflow](https://github.com/artshackcommunity/artshackcommunity.github.io/actions/workflows/nextjs.yml)
6. Select the main branch and click "Run workflow"
7. Refresh the page and ensure the status turns green when the action completes
