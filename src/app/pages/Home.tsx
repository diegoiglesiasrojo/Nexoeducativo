import { Hero } from "../components/hero";
import { Carousel } from "../components/carousel";
import { Courses } from "../components/courses";
import { Benefits } from "../components/benefits";
import { Testimonials } from "../components/testimonials";
import { Faq } from "../components/faq";
import { CtaSection } from "../components/cta-section";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Carousel />
      <Courses />
      <Benefits />
      <Testimonials />
      <Faq />
      <CtaSection />
    </main>
  );
}
