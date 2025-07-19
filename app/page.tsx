import Hero from "../components/Hero";
import Industry from "../components/Industry";
import Podcast from "../components/Podcast";
import Academia from "../components/Academia";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <main className="my-12">

        {/* Hero Section */}
        <Hero />

        {/* Content Sections */}
        <Podcast />
        <Industry />
        <Academia />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}