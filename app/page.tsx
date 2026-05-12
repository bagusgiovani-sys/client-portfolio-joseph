import Navbar from "@/components/containers/Navbar";
import HeroSection from "@/components/containers/HeroSection";
import AsFrontendSection from "@/components/containers/AsFrontendSection";
import CodeDesignSection from "@/components/containers/CodeDesignSection";
import MoreThanSection from "@/components/containers/MoreThanSection";
import DesignAccuracySection from "@/components/containers/DesignAccuracySection";
import ExperienceSection from "@/components/containers/ExperienceSection";
import Testimoni from "@/components/containers/Testimoni";
import ClearSection from "@/components/containers/ClearSection";
import WorkSection from "@/components/containers/WorkSection";
import Footer from "@/components/containers/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full">
      <section
        id="home"
        className="bg-[url('/assets/background/background.svg')] bg-cover bg-center max-w-full min-h-screen flex flex-col pt-24"
      >
        <Navbar />
        <HeroSection />
      </section>

      <section id="about">
        <AsFrontendSection />
      </section>

      <section id="skill">
        <CodeDesignSection />
      </section>

      <section>
        <MoreThanSection />
      </section>

      <section id="projects">
        <DesignAccuracySection />
      </section>

      <section>
        <ExperienceSection />
      </section>

      <section>
        <Testimoni />
      </section>

      <section id="faq">
        <ClearSection />
      </section>

      <section id="contact">
        <WorkSection />
      </section>

      <section className="bg-black font-heading text-white">
        <Footer />
      </section>
    </main>
  );
}
