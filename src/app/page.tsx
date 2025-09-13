import AboutUs from '@/components/sections/about-us';
import ClassListings from '@/components/sections/class-listings';
import ContactForm from '@/components/sections/contact-form';
import Faq from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import TeacherProfiles from '@/components/sections/teacher-profiles';
import Testimonials from '@/components/sections/testimonials';
import Fees from '@/components/sections/fees';
import SuccessBanner from '@/components/sections/success-banner';

export default function Home() {
  return (
    <>
      <Hero />
      <SuccessBanner />
      <ClassListings />
      <Fees />
      <TeacherProfiles />
      <Testimonials />
      <AboutUs />
      <Faq />
      <ContactForm />
    </>
  );
}
