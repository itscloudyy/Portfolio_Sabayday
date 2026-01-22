import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Growth from "../components/Growth";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Projects />
      <Growth />
      <Footer />
    </main>
  );
}
