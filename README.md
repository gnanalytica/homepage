# gnanalytica Landing Page

This repository contains the source code for the landing page of **gnanalytica**, a company focused on building automations and AI agents for various business use cases and domains.

## Features

- **Modern stack** – built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for fast development and performance.
- **Responsive layout** – optimized for desktop and mobile screens.
- **Hero section** – includes a custom abstract illustration representing AI and automation.
- **Features section** – outlines key value propositions (automation efficiency, intelligent agents and domain expertise).
- **About section** – describes the company's mission and offerings.
- **Call‑to‑action footer** – provides contact information and encourages potential clients to reach out.

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

You can deploy this Next.js application to platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Follow their documentation to set up continuous deployment from your repository.

## Customization

- **Images** – replace the file at `public/images/hero.png` with your own illustration to personalize the hero section.
- **Content** – edit the components in the `components` directory (e.g. `HeroSection.js`, `FeatureSection.js`, `AboutSection.js`) to reflect your specific offerings and messaging.
- **Colors** – adjust the color palette in `tailwind.config.js` to match your brand guidelines.

## License

This project is licensed under the MIT License.