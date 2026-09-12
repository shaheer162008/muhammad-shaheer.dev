# Muhammad Shaheer — Developer Portfolio

![Portfolio Preview](./public/favicon.ico) 
*(Note: Add an actual screenshot to your public folder and link it here!)*

A professional, high-performance developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, and **Framer Motion**. Designed with a focus on dark-mode aesthetics, micro-interactions, and premium UI/UX.

🌐 **Live Website**: [muhammad-shaheer.dev](https://muhammad-shaheer.dev)

---

## ✨ Features

- **Premium Dark Mode Design**: Deep blacks (`#101010`) combined with vibrant neon green (`#00d992`) accents for a modern, hacker-inspired aesthetic.
- **Interactive Terminal Hero**: Animated typing effects simulating an IDE terminal.
- **Custom GitHub Lifetime Graph**: Integrates directly with the GitHub GraphQL API to fetch and render a custom lifetime contribution heatmap.
- **IDE Project Mockups**: Framer Motion powered IDE mockup to showcase selected work like it's being coded live.
- **Zero-Config CSS**: Built entirely with standard CSS Variables for maximum flexibility without the bloat of massive utility libraries.
- **SEO Optimized**: Fully configured with Next.js metadata and open-graph tags.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shaheer162008/muhammad-shaheer.dev.git
cd muhammad-shaheer.dev
```

### 2. Install dependencies
```bash
npm install
# or yarn install / pnpm install
```

### 3. Setup Environment Variables
To unlock the **Interactive Lifetime GitHub Graph**, you need to provide a GitHub Personal Access Token (PAT). 

1. Go to [GitHub Developer Settings](https://github.com/settings/tokens).
2. Generate a new token (classic or fine-grained) with **read-only** access to public data.
3. Create a `.env.local` file in the root of the project:

```env
GITHUB_TOKEN=ghp_your_token_here
```
*(If no token is provided, the site gracefully falls back to a static image of your last 12 months of contributions).*

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🎨 Customizing

If you're forking this for your own portfolio:
1. Update `DESIGN.md` if you want to change the color tokens.
2. Edit `src/app/globals.css` to update the CSS root variables.
3. Replace the `username = "shaheer162008"` in `src/components/home/github-activity.tsx` to your own username.
4. Swap the icons in the `public/icons` folder to match your brand.

---

## 🤝 Open Source

This project is open-source and available for anyone to learn from, fork, or use as a starting point for their own portfolio. 

*Designed and developed by [Muhammad Shaheer](https://github.com/shaheer162008).*
