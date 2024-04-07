import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
