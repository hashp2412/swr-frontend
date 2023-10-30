

import Footer from "../components/Footer"
import Intro from "../components/Intro"
import HeroSection from "../components/HeroSection";
import BlueBg from "../components/BlueBg";
import CardBoardBg from "../components/CardBoardBg"
import BlueFiller from "../components/BlueFiller"
import MarbleBg from "../components/MarbleBg"
export default function Home() {
  return (
    <main>
      <HeroSection />
      <img src="/torn-paper2.png" className="absolute w-full h-10 top-[115.5%] scale-y-[-1]"/>

     
        <BlueBg/>
       {/* <Intro/> */}
       <img src="/torn-paper2.png" className="absolute w-full top-[274%] h-14 scale-y-[-1] scale-x-[-1]"/>
       <BlueFiller/>
       <CardBoardBg/>
       <MarbleBg/>
       <Footer/>
    </main>
  );
}
