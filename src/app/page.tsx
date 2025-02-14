import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Industry from '../components/Industry';
import Academia from '../components/Academia';

export default function Home() {
  return (
    <main className="items-center justify-center min-h-screen bg-background text-text">
      <div>
        <Header />
        <Hero />
        <Projects />
        <Industry />
        <Academia />

      </div>
    </main>
  );
}
