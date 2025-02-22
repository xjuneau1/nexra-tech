import Footer from "./components/footer/Footer";
import Promise from "./components/home/Promise";
import Hero from "./components/home/Hero";
import Intro from "./components/home/Intro";
import Reviews from "./components/home/Reviews";
import Services from "./components/home/Services";
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-min w-screen min-h-screen">
      <Hero />
      <Intro />
      <Promise />
      <Services />
      <Reviews />
    </div>
  );
}
