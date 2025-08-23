# Homepage

This repository contains the source code for a modern homepage built with Next.js and Tailwind CSS.

## Features

- **Modern stack** – built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for fast development and performance.
- **Responsive layout** – optimized for desktop and mobile screens.
- **Hero section** – includes a custom abstract illustration representing modern web design.
- **Features section** – outlines key value propositions and capabilities.
- **About section** – describes the mission and offerings.
- **Call‑to‑action footer** – provides contact information and encourages visitors to reach out.

## Getting Started

### Prerequisites

Ensure that you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the site.

### Production

Build the application for production and start the server:

```bash
npm run build
npm start
```

This will generate an optimized production build in the `.next` directory and start the server on the default port.

## Deploying

### Vercel Deployment (Recommended)

This project is configured for easy deployment on Vercel with custom domain support.

#### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and sign up/login
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy" - your site will be live in minutes!

#### Custom Domain Setup

1. In your Vercel dashboard, go to your project settings
2. Navigate to "Domains" section
3. Add your custom domain: `gnanalytica.com`
4. Vercel will provide DNS records to configure:
   - Add an A record pointing to Vercel's IP
   - Add a CNAME record for `www.gnanalytica.com` pointing to your Vercel URL
5. Wait for DNS propagation (can take up to 48 hours)

#### Alternative Platforms

You can also deploy to [Netlify](https://www.netlify.com/) or other platforms. Follow their documentation to set up continuous deployment from your repository.

## Customization

- **Images** – replace the file at `public/images/hero.png` with your own illustration to personalize the hero section.
- **Content** – edit the components in the `components` directory (e.g. `HeroSection.js`, `FeatureSection.js`, `AboutSection.js`) to reflect your specific offerings and messaging.
- **Colors** – adjust the color palette in `tailwind.config.js` to match your brand guidelines.
