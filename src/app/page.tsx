import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Industry from '../components/Industry';
import Academia from '../components/Academia';

export default function Home() {
  return (
    <main className="items-center justify-center min-h-screen bg-background text-text">
      <div>
        <Header />
        <Hero />
        <Experience />
        <Industry />
        <Academia />

      </div>
    </main>
  );
}
