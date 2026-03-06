import Hero from "../components/Hero";
import CoursesPage from "./CoursesPage";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import YouTubeGallery from "../components/YouTubeGallery";
import PhotoGallery from "../components/Photogallery";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
    <SEO
      title="Career Campus Institute – Top Coaching in Patna"
      description="Join Career Campus Institute for Indian Army, Navy, SSC, BSSC, and Bihar Police. Expert teachers, live classes, personal mentorship, and smart learning in Patna, Bihar."
      keywords="ndian Army, Navy, SSC, BSSC, and Bihar Police, Patna, Bihar, Career Campus Institute"
      image="https://yourdomain.com/hero-og.jpg"
      url="https://yourdomain.com"
    />

      <Hero />
      <CoursesPage limit={4}/>
      <WhyChooseUs />
      <Testimonials />
      <PhotoGallery limit={6}/>
      <CTA />
      <YouTubeGallery />  {/* No need to pass videos */}
    </>
  );
}
