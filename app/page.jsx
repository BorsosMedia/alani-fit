import BurgerMenu from "../components/BurgerMenu";
import CoachingPlans from "../components/CoachingPlans";
import DiscordSection from "../components/DiscordSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InstagramWidget from "../components/InstagramWidget";
// import Navbar from "../components/Navbar";
import OneTimePlans from "../components/OneTimePlans";

export default function Home() {
  return (
    <main>
      <BurgerMenu />
      {/* <Navbar /> */}
      <Hero />
      <CoachingPlans />
      <OneTimePlans />
      <DiscordSection />
      <InstagramWidget />
      <Footer />
    </main>
  );
}
