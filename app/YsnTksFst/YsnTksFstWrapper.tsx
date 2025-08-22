import { Metadata } from 'next';
import YsnTksFstWrapper from './YsnTksFstWrapper';

export const metadata: Metadata = {
  title: 'YsnTksFst - Thoughts, Reflections & Digital Chronicles',
  description: 'My personal blog where physics meets philosophy, code meets creativity, and thoughts transform into stories.',
};

export default function YsnTksFstPage() {
  return <YsnTksFstWrapper />;
}
