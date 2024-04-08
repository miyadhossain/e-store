import AppButton from "./AppButton";

const FeaturedCard = ({ title, title2, description }) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-5/12">
      <h5 className="text-base lg:text-2xl text-primary font-semibold">
        {title}
      </h5>
      <h3 className="text-lg lg:text-4xl font-semibold">{title2}</h3>
      <p className="mt-3 text-gray-400 text-sm lg:text-base">{description}</p>
      <AppButton text="View All" />
    </div>
  );
};

export default FeaturedCard;
