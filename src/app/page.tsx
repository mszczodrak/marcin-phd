import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Industry from "../components/Industry";
import Academia from "../components/Academia";
import Firebase from "../components/Firebase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="items-center justify-center min-h-screen bg-background text-text">
        <Hero />
        <Experience />
        <Industry />
        <Academia />
        <Firebase />
      </main >
      <Footer />
    </>
  );
}
