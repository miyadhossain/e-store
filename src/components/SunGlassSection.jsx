import SunGlassImage from "../assets/sun-glass.jpg";
import FeaturedCard from "./FeaturedCard";
import FeaturedImageWrapper from "./FeaturedImageWrapper";
import FeaturedWrapper from "./FeaturedWrapper";

const SunGlassSection = () => {
  return (
    <FeaturedWrapper>
      <FeaturedImageWrapper img={SunGlassImage} />
      <FeaturedCard
        title="Start From $30"
        title2="New Summer Collections For Man's Fashion"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt"
      />
    </FeaturedWrapper>
  );
};

export default SunGlassSection;
