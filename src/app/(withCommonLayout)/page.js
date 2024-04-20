import HeroSection from "@/components/Home/HeroSection/HeroSection";
import NationalNews from "@/components/Home/NationalNews/NationalNews";

const MainHomePage = () => {
  return (
    //add a container box
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
    </div>
  );
};

export default MainHomePage;
