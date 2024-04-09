import IconWrapper from "./IconWrapper";

const InfoSectionWrapper = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center align-middle p-4 rounded-lg shadow-xs">
      <div className="flex flex-col p-3 mr-4 rounded-full items-center">
        <IconWrapper>
          <Icon fontSize="large" style={{ color: "#0FBACE" }} />
        </IconWrapper>
        <h4 className="text-sm text-center xl:text-lg font-bold mt-4">
          {title}
        </h4>
      </div>
      <div className="flex flex-col">
        <p className="text-sm xl:text-base text-gray-700 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoSectionWrapper;
