import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import IconWrapper from "./IconWrapper";

const InfoSection = () => {
  return (
    <div className="grid gap-1 md:gap-6 mb-8 grid-cols-2 xl:grid-cols-4 mt-20">
      <div className="flex flex-col items-center align-middle p-4 rounded-lg shadow-xs">
        <div className="flex flex-col p-3 mr-4 rounded-full items-center">
          <IconWrapper>
            <LocalShippingOutlinedIcon
              fontSize="large"
              style={{ color: "#0FBACE" }}
            />
          </IconWrapper>
          <h4 className="text-sm text-center xl:text-lg font-bold mt-4">
            FAST DELIVERY
          </h4>
        </div>
        <div className="flex flex-col">
          <p className="text-sm xl:text-base text-gray-700 text-center">
            Say NO to waiting
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center align-middle p-4 rounded-lg shadow-xs">
        <div className="flex flex-col p-3 mr-4 rounded-full items-center">
          <IconWrapper>
            <PaymentOutlinedIcon
              fontSize="large"
              style={{ color: "#0FBACE" }}
            />
          </IconWrapper>
          <h4 className="text-sm text-center xl:text-lg font-bold mt-4">
            ONLINE PAYMENT
          </h4>
        </div>
        <div className="flex flex-col">
          <p className="text-sm xl:text-base text-gray-700 text-center">
            Make Payments Easily
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center align-middle p-4 rounded-lg shadow-xs">
        <div className="flex flex-col p-3 mr-4 rounded-full items-center">
          <IconWrapper>
            <SupportAgentOutlinedIcon
              fontSize="large"
              style={{ color: "#0FBACE" }}
            />
          </IconWrapper>
          <h4 className="text-sm text-center xl:text-lg font-bold mt-4">
            SUPPORT 24/7
          </h4>
        </div>
        <div className="flex flex-col">
          <p className="text-sm xl:text-base text-gray-700 text-center">
            We Support Online 24 Hours
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center align-middle p-4 rounded-lg shadow-xs">
        <div className="flex flex-col p-3 mr-4 rounded-full items-center">
          <IconWrapper>
            <SwapHorizOutlinedIcon
              fontSize="large"
              style={{ color: "#0FBACE" }}
            />
          </IconWrapper>
          <h4 className="text-sm text-center xl:text-lg font-bold mt-4">
            EASY RETURN
          </h4>
        </div>
        <div className="flex flex-col">
          <p className="text-sm xl:text-base text-gray-700 text-center">
            You Can Return Hassle Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
