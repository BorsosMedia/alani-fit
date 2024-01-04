import About from "../components/About";
import Bloodwork from "../components/Bloodwork";
import BurgerMenu from "../components/BurgerMenu";
import CoachingPlans from "../components/CoachingPlans";
import Consultation from "../components/Consultation";
import ContestPrepPlans from "../components/ContestPrepPlans";
// import Glutes from "../components/Glutes";
import Hero from "../components/Hero";
import InquirySection from "../components/InquirySection";
import InstagramWidget from "../components/InstagramWidget";
import NewYearsSaleModal from "../components/NewYearsSaleModal";
import OneTimePlans from "../components/OneTimePlans";
import Subhero from "../components/Subhero";

export default function Home() {
  return (
    <main>
      <BurgerMenu />
      <Hero />
      <Subhero />
      <CoachingPlans />
      <OneTimePlans />
      <ContestPrepPlans />
      {/* <Glutes /> */}
      <Bloodwork />
      <InquirySection />
      <Consultation />
      <About />
      <InstagramWidget />
      <NewYearsSaleModal />
    </main>
  );
}
