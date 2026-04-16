import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Carousel } from "./components/carousel";
import { Courses } from "./components/courses";
import { Benefits } from "./components/benefits";
import { Testimonials } from "./components/testimonials";
import { Faq } from "./components/faq";
import { CtaSection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { FloatingWhatsapp } from "./components/floating-whatsapp";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <Carousel />
          <Courses />
          <Benefits />
          <Testimonials />
          <Faq />
          <CtaSection />
        </main>
        <Footer />
        <FloatingWhatsapp />
      </div>
    </ThemeProvider>
  );
}
