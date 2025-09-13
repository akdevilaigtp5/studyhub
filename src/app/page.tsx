import AboutUs from '@/components/sections/about-us';
import ClassListings from '@/components/sections/class-listings';
import ContactForm from '@/components/sections/contact-form';
import Faq from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import Schedule from '@/components/sections/schedule';
import TeacherProfiles from '@/components/sections/teacher-profiles';

export default function Home() {
  return (
    <>
      <Hero />
      <ClassListings />
      <TeacherProfiles />
      <Schedule />
      <AboutUs />
      <Faq />
      <ContactForm />
    </>
  );
}
