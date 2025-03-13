import Link from 'next/link';
import { Button } from '@/components/ui/button';
import MemeGrid from '@/components/MemeGrid';
import { HiSparkles } from 'react-icons/hi';

export default function Home() {
  return (
    <>
      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-orange-600/90 text-white">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-8 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.4))]"></div>
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 text-center relative z-10">
          <div className="animate-bounce-slow mb-6">
            <HiSparkles className="h-12 w-12 text-yellow-300" />
          </div>
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            Welcome to Meme My News
          </h1>
          <p className="mt-6 max-w-2xl text-xl md:text-2xl font-medium text-white drop-shadow-md">
            Turn the latest headlines into hilarious memes with our easy-to-use meme generator
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/meme-creator" passHref>
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-800 transition-all duration-300 transform hover:scale-105 font-bold text-lg px-8"
              >
                Create Memes
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Popular Meme Templates Section */}
      <div className="w-full py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-blue-100/50 dark:from-indigo-900/20 dark:to-blue-900/20 skew-y-1"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-10 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
            Popular Meme Templates
          </h2>
          <MemeGrid />
        </div>
      </div>
    </>
  );
}
