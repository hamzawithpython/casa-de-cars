import Hero from "../components/home/Hero";
import BrandMarquee from "../components/home/BrandMarquee";
import StudioSection from "../components/home/StudioSection";
import ServicesPreview from "../components/home/ServicesPreview";
import HowItWorks from "../components/home/HowItWorks";
import TransformationSection from "../components/home/TransformationSection";
import InstagramGrid from "../components/home/InstagramGrid";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <StudioSection />
      <ServicesPreview />
      <HowItWorks />
      <TransformationSection />
      <InstagramGrid />
      <CTASection />
    </>
  );
}
