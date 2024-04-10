import WatchImage from "../assets/big-watch.jpg";
import FeaturedCard from "./FeaturedCard";
import FeaturedImageWrapper from "./FeaturedImageWrapper";
import FeaturedWrapper from "./FeaturedWrapper";

const ClockSection = () => {
  return (
    <FeaturedWrapper>
      <FeaturedCard
        title="Start From $50"
        title2="New Arrival From Creative Clock Collections"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt"
      />
      <FeaturedImageWrapper img={WatchImage} />
    </FeaturedWrapper>
  );
};

export default ClockSection;
