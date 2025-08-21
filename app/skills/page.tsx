import TechStackShowcase from '@/components/sections/TechStackShowcase';
import YouMayNeedMe from '@/components/sections/YouMayNeedMe';
import CodePlayground from '@/components/sections/CodePlayground';
import DigitalPlayground from '@/components/sections/DigitalPlayground';

export const metadata = {
  title: 'Skills & Tech - Yaseen Saad Eldin',
  description: 'Explore my technical skills, programming experience, and projects.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20">
      <YouMayNeedMe />
      <TechStackShowcase />
      <CodePlayground />
      <DigitalPlayground />
    </div>
  );
}
