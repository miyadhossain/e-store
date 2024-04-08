import { useEffect } from "react";
import BannersSection from "../components/BannersSection";
import NewArrivalProducts from "../components/NewArrivalProducts";

const HomePage = () => {
  useEffect(() => {
    document.title = "E-Store";
  }, []);
  return (
    <div className="app_container">
      <BannersSection />
      <NewArrivalProducts />
    </div>
  );
};

export default HomePage;
