import QuantumThoughts from '@/components/sections/QuantumThoughts';

export const metadata = {
  title: 'Thoughts - Yaseen Saad Eldin',
  description: 'Random thoughts, philosophical musings, and insights about physics, technology, and life.',
};

export default function ThoughtsPage() {
  return (
    <div className="min-h-screen pt-20">
      <QuantumThoughts />
    </div>
  );
}