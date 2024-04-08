import featuredImage from "../assets/featured.jpg";
import girlImage from "../assets/girl.jpg";
import iphoneImage from "../assets/iphone.jpg";
import AppButton from "./AppButton";

const BannersSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-2/3 relative">
        <img
          className="image_container"
          src={featuredImage}
          alt="featured image"
        />
        <div className="absolute inset-0 top-2 md:top-40 xl:top-52 left-4 lg:left-10 cursor-pointer">
          <h2 className="text-base lg:text-4xl font-semibold hover:text-primary">
            Mega Sale Up To 50%
          </h2>
          <p className="w-full md:w-96 text-xs md:text-base mt-3 lg:mt-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ornare vestibulum mollis. Nam vitae augue purus. Integer ac accumsan
            nunc.
          </p>
          <AppButton text="Grab the Offer" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col gap-5 w-full lg:w-1/3">
        <div className="relative">
          <img className="image_container" src={girlImage} alt="girl image" />
          <div className="absolute inset-0 top-16 xl:top-28 left-40 xl:left-52 cursor-pointer font-semibold">
            <h4 className="text-xl">Summer Collection</h4>
            <h6 className="text-base">Discover Now</h6>
          </div>
        </div>
        <div className="relative">
          <img
            className="image_container"
            src={iphoneImage}
            alt="iPhone image"
          />
          <div className="absolute inset-0 top-16 xl:top-28 left-40 xl:left-52 cursor-pointer font-semibold">
            <h4 className="text-xl">Get 30% Off</h4>
            <h6 className="text-base">Shop Now</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannersSection;
