import { useEffect } from "react";
import BannersSection from "../components/BannersSection";
import CategoriesSection from "../components/CategoriesSection";
import ClockSection from "../components/ClockSection";
import InfoSection from "../components/InfoSection";
import NewArrivalProducts from "../components/NewArrivalProducts";
import SunGlassSection from "../components/SunGlassSection";

const HomePage = () => {
  useEffect(() => {
    document.title = "E-Store";
  }, []);
  return (
    <div className="app_container">
      <BannersSection />
      <CategoriesSection />
      <NewArrivalProducts />
      <ClockSection />
      <SunGlassSection />
      <InfoSection />
    </div>
  );
};

export default HomePage;
