import Image from "next/image"
import { FaSpotify, FaApple, FaYoutube, FaAmazon } from 'react-icons/fa';

const Podcast = () => {
  return (
    <section id="podcast" className="bg-[rgb(23,2639)] text-text p-8 pb-16">
      <h2 className="text-3xl font-orbitron text-white mb-4">Podcast</h2>
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <Image
              src="/images/Landmark_Lessons_Icon_1.webp"
              alt="Landmark Lessons Podcast Cover Art"
              width={300}
              height={300}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="md:col-span-2 text-white">
            <h3 className="text-4xl font-bold mb-4">Landmark Lessons</h3>
            <p className="mb-6">
              Welcome to Landmark Lessons, the podcast that deconstructs the pivotal moments and influential people that define an entrepreneurial journey.
            </p>
            <p className="mb-6">
              Each week, your host Marcin unpacks powerful stories from his own experience and that of respected industry leaders. We go beyond the highlight reel to extract the actionable insights and timeless principles from the turning points that truly matter.
            </p>
            <p className="mb-8">
              If you believe the best blueprint for the future is found in the lessons of the past, subscribe to get your weekly guide to building a better business.
            </p>
            <div className="flex space-x-6">
              <a href="https://open.spotify.com/episode/4lUxRStCSLM7ChECA8hIg1?si=-O1xg0EXTuSdZsJD-GygIg" aria-label="Listen on Spotify" className="text-white hover:text-green-500 transition-colors">
                <FaSpotify size={32} />
              </a>
              <a href="https://podcasts.apple.com/us/podcast/landmark-lessons/id1823296966" aria-label="Listen on Apple Podcasts" className="text-white hover:text-purple-500 transition-colors">
                <FaApple size={32} />
              </a>
              <a href="https://www.youtube.com/watch?v=V-J8VbsEJqo&list=PLnBpFdc2dsFcSo-qDA8XQyzpMu5bQq42P&ab_channel=LandmarkLessons" aria-label="Listen on YouTube Music" className="text-white hover:text-red-500 transition-colors">
                <FaYoutube size={32} />
              </a>
              <a href="https://music.amazon.com/podcasts/3bdba5ee-04c9-453a-8968-1c72defaf6d6/landmark-lessons" aria-label="Listen on Amazon Music" className="text-white hover:text-blue-400 transition-colors">
                <FaAmazon size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;