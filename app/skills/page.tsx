import TechStackShowcase from '@/components/sections/TechStackShowcase';
import YouMayNeedMe from '@/components/sections/YouMayNeedMe';
import DigitalPlayground from '@/components/sections/DigitalPlayground';

export const metadata = {
  title: 'Skills - My Digital Arsenal & Quantum Toolkit',
  description: 'Explore the fusion of physics intuition and coding mastery - where theoretical knowledge meets practical implementation.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20">
      <YouMayNeedMe />
      <TechStackShowcase />
      <DigitalPlayground />
    </div>
  );
}
