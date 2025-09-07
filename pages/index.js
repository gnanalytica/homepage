import Head from 'next/head';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import ProcessSection from '../components/ProcessSection';
import SchedulingSection from '../components/SchedulingSection';
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen">
        <NavBar />
        <main className="pt-20">
          <HeroSection />
          <FeatureSection />
          <ProcessSection />
          <SchedulingSection />
        </main>
        <Footer />
      </div>
    </>
  );
}