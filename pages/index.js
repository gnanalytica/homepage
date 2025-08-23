import Head from 'next/head';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import ProcessSection from '../components/ProcessSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

/**
 * The home page of the Gnanalytica website. It stitches together
 * several composable sections and injects appropriate metadata via the
 * Head component. Each section is defined in the components folder.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Gnanalytica - Make Your Business AI-Ready</title>
        <meta
          name="description"
          content="Transform your business with AI. We identify technology gaps, provide expert AI consulting, and implement solutions that make your company AI-ready. From automation to Agentic AI frameworks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="analytics, data analysis, business intelligence, growth analytics, infinite progress" />
        <meta name="author" content="Gnanalytica" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gnanalytica.com/" />
        <meta property="og:title" content="Gnanalytica - Infinite Growth Analytics" />
        <meta property="og:description" content="Transform your data into actionable insights with Gnanalytica's cutting-edge analytics solutions." />
        <meta property="og:image" content="/images/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gnanalytica.com/" />
        <meta property="twitter:title" content="Gnanalytica - Infinite Growth Analytics" />
        <meta property="twitter:description" content="Transform your data into actionable insights with Gnanalytica's cutting-edge analytics solutions." />
        <meta property="twitter:image" content="/images/og-image.png" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/images/logos/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logos/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logos/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logos/favicon-16x16.png" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <NavBar />
        <main className="flex-grow">
          <HeroSection />
          <FeatureSection />
          <ProcessSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}