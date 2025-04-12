import Header from "@/components/landing-page/header";
import Hero from "@/components/landing-page/hero";
import HowItWorks from "@/components/landing-page/how-it-works";
import Features from "@/components/landing-page/features";
import Categories from "@/components/landing-page/categories";
import Testimonials from "@/components/landing-page/testimonials";
import Footer from "@/components/landing-page/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
