import Hero from "../components/Hero";
import BrandStory from "../components/BrandStory";
import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="pt-28 space-y-12">
      <Hero />
      <BrandStory />
      <TeamSection />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
}