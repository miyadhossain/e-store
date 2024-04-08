import { useEffect } from "react";
import BannersSection from "../components/BannersSection";
import ClockSection from "../components/ClockSection";
import NewArrivalProducts from "../components/NewArrivalProducts";
import SunGlassSection from "../components/SunGlassSection";

const HomePage = () => {
  useEffect(() => {
    document.title = "E-Store";
  }, []);
  return (
    <div className="app_container">
      <BannersSection />
      <NewArrivalProducts />
      <ClockSection />
      <SunGlassSection />
    </div>
  );
};

export default HomePage;
