'use client'

import Hero from "@/components/hero";
import Navbar from "@/components/navbar"
import ProjectCards from "@/components/projectCards";
import ServicesForYou from "@/components/servicesForYou";
import FAQs from "@/components/faq's"
import AboutMe from "@/components/aboutMe";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <ServicesForYou />
        <ProjectCards />
        <FAQs />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
}
