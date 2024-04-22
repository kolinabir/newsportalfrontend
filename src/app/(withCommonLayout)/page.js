import Entertainment from "@/components/Home/Entertainment/Entertainment";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import International from "@/components/Home/International/international";
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
      container
      mx-auto
      px-4
      sm:px-6
      lg:px-8"
    >
      <HeroSection></HeroSection>
      <NationalNews></NationalNews>
      <Sports></Sports>
      <International></International>
      <Politics></Politics>
      <Entertainment></Entertainment>
      <Jobs></Jobs>
      <Lifestyle></Lifestyle>
      <Religion></Religion>
    </div>
  );
};

export default MainHomePage;
