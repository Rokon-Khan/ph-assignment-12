import BecomeTeacherSection from "../components/BecomeTeacherSection";
import FAQ from "../components/FAQ";
import Features from "../components/Fetures";
import HomepageStatsSection from "../components/HomepageStatsSection";
import PartnersSection from "../components/PartnersSection";
import PopularClasses from "../components/PopularClasses";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HomepageStatsSection></HomepageStatsSection>
      <Features></Features>
      <PopularClasses></PopularClasses>
      <BecomeTeacherSection />
      <PartnersSection></PartnersSection>
      <FAQ />
    </div>
  );
};

export default Home;
