'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import LastTinyAces from '@/components/sections/LastTinyAces';
import CurrentlyCooking from '@/components/sections/CurrentlyCooking';
import QuickGallery from '@/components/sections/QuickGallery';
import ResourceLibrary from '@/components/sections/ResourceLibrary';
import SideProjectsLab from '@/components/sections/SideProjectsLab';
import QuantumThoughts from '@/components/sections/QuantumThoughts';
import MusicRapSection from '@/components/sections/MusicRapSection';
import Loader from '@/components/ui/Loader';
import LastBlogs from '@/components/sections/LastBlogs';

export default function HomePageWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <MusicRapSection />
      <QuickGallery />
      <QuantumThoughts />
      <SideProjectsLab />
      <CurrentlyCooking />
      <ResourceLibrary />
      <LastBlogs />
      <LastTinyAces />
    </div>
  );
}
