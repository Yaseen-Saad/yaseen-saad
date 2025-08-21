import { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Let\'s Build Something Amazing Together',
  description: 'Get in touch with Yaseen for collaborations, physics discussions, or project ideas.',
};

export default function ContactPage() {
  return <ContactForm />;
}
