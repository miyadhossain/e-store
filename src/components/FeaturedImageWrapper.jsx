const FeaturedImageWrapper = ({ img }) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-5/12">
      <img src={img} alt="clock image" className="image_container" />
    </div>
  );
};

export default FeaturedImageWrapper;
