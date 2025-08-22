import PersonalStory from '@/components/sections/PersonalStory';
import Timeline from '@/components/sections/Timeline';
import PhilosophyCorner from '@/components/sections/PhilosophyCorner';
import DetailedGallery from '@/components/sections/DetailedGallery';

export const metadata = {
  title: 'About - The Universe Through My Eyes',
  description: 'Dive deep into my journey - from quantum physics fascination to late-night coding sessions, philosophy debates to STEM competitions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <PersonalStory />
      <DetailedGallery />
      <Timeline />
      <PhilosophyCorner />
    </div>
  );
}
