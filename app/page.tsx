import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Download from "./components/Download";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Download />
      <Contact />
      <Footer />
    </main>
  );
}