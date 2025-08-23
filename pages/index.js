import Head from 'next/head';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

/**
 * The home page of the website. It stitches together
 * several composable sections and injects appropriate metadata via the
 * Head component. Each section is defined in the components folder.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage – Welcome</title>
        <meta
          name="description"
          content="A modern homepage built with Next.js and Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <HeroSection />
          <FeatureSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
}