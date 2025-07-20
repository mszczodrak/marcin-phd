import Hero from "../components/Hero";
import Industry from "../components/Industry";
import Podcast from "../components/Podcast";
import Academia from "../components/Academia";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <Podcast />
      <Industry />
      <Academia />

      <Footer />
    </div>
  );
}