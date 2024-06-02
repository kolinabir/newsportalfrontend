import Entertainment from "@/components/Home/Entertainment/Entertainment";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import International from "@/components/Home/International/International";
import Jobs from "@/components/Home/Jobs/Jobs";
import Lifestyle from "@/components/Home/Lifestyle/Lifestyle";
import NationalNews from "@/components/Home/NationalNews/NationalNews";
import Politics from "@/components/Home/Politics/Politics";
import Religion from "@/components/Home/Religion/Religion";
import Sports from "@/components/Home/Sports/Sports";

const MainHomePage = () => {
  return (
    <div
      className="
      max-w-screen-2xl
     mx-auto
      px-4
      sm:px-6
      lg:px-8"
    >
      <HeroSection></HeroSection>
      <div className="">
        <NationalNews></NationalNews>
        <International></International>
        <Politics></Politics>
        <Sports></Sports>
        <Entertainment></Entertainment>
        <Jobs></Jobs>
        <Lifestyle></Lifestyle>
        <Religion></Religion>
      </div>
    </div>
  );
};

export default MainHomePage;
