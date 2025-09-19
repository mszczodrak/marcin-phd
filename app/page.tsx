import Hero from "../components/Hero";
import Industry from "../components/Industry";
import Podcast from "../components/Podcast";
import Academia from "../components/Academia";
import Current from "@/components/Current";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Current />
      <Podcast />
      <Industry />
      <Academia />
    </div>
  );
}