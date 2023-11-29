import About from "../components/About";
import Bloodwork from "../components/Bloodwork";
import BurgerMenu from "../components/BurgerMenu";
import CoachingPlans from "../components/CoachingPlans";
import Consultation from "../components/Consultation";
import DiscordSection from "../components/DiscordSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InquirySection from "../components/InquirySection";
import InstagramWidget from "../components/InstagramWidget";
import OneTimePlans from "../components/OneTimePlans";
import Progress from "../components/Progress";

export default function Home() {
  return (
    <main>
      <BurgerMenu />
      <Hero />
      <CoachingPlans />
      <OneTimePlans />
      <Bloodwork />
      <InquirySection />
      <Consultation />
      <About />
      <Progress />
      <DiscordSection />
      <InstagramWidget />
      <Footer />
    </main>
  );
}
