import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "E-Store";
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
