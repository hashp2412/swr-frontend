import Footer from "../components/Footer";
import Intro from "../components/Intro";
import HeroSection from "../components/HeroSection";
import BlueBg from "../components/BlueBg";
import CardBoardBg from "../components/CardBoardBg";
import BlueFiller from "../components/BlueFiller";
import MarbleBg from "../components/MarbleBg";
import ImageSection from "../components/ImageSection"
import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <main>
      <NavBar/>
      <HeroSection />
      <img
        src="/torn-paper2.png"
        className="absolute w-full h-10 top-[51.5rem] scale-y-[-1]"
      />

      <BlueBg />
      {/* <Intro/> */}
      <img
        src="/torn-paper2.png"
        className="absolute w-full top-[123rem] h-14 scale-y-[-1] scale-x-[-1]"
      />
      <BlueFiller />
      <CardBoardBg />
      <ImageSection/>
      <MarbleBg />
      <img
        src="/footer-filler.svg"
        className="absolute w-full top-[255rem] h-14"
      />
      <Footer />
    </main>
  );
}
