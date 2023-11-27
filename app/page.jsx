import BurgerMenu from "../components/BurgerMenu";
import CoachingPlans from "../components/CoachingPlans";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
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
      <Footer />
    </main>
  );
}
