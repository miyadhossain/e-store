import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import InfoSectionWrapper from "./InfoSectionWrapper";

const InfoItems = [
  {
    id: 1,
    title: "FAST DELIVERY",
    description: "Say NO to waiting",
    icon: LocalShippingOutlinedIcon,
  },
  {
    id: 2,
    title: "ONLINE PAYMENT",
    description: "Make Payments Easily",
    icon: PaymentOutlinedIcon,
  },
  {
    id: 3,
    title: "SUPPORT 24/7",
    description: "We Support Online 24 Hours",
    icon: SupportAgentOutlinedIcon,
  },
  {
    id: 4,
    title: "EASY RETURN",
    description: "You Can Return Hassle Free",
    icon: SwapHorizOutlinedIcon,
  },
];

const InfoSection = () => {
  return (
    <div className="grid gap-1 md:gap-6 mb-8 grid-cols-2 xl:grid-cols-4 mt-20">
      {InfoItems.map((item) => (
        <InfoSectionWrapper
          key={item.id}
          Icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default InfoSection;
