import BecomeTeacherSection from "../components/BecomeTeacherSection";
import HomepageStatsSection from "../components/HomepageStatsSection";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HomepageStatsSection></HomepageStatsSection>
      <BecomeTeacherSection />
    </div>
  );
};

export default Home;
