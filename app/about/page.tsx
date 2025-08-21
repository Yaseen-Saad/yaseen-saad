import PersonalStory from '@/components/sections/PersonalStory';
import Timeline from '@/components/sections/Timeline';
import PhilosophyCorner from '@/components/sections/PhilosophyCorner';
import GallerySection from '@/components/GallerySection';

export const metadata = {
  title: 'About - Yaseen Saad Eldin',
  description: 'Learn more about my journey, philosophy, and aspirations.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <PersonalStory />
      <Timeline />
      <GallerySection />
      <PhilosophyCorner />
    </div>
  );
}
