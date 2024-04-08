import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState } from "react";

const qna = [
  {
    id: 1,
    question: "What is an e-commerce platform?",
    answer:
      " An e-commerce platform is a software application that enables businesses to create online storefronts, manage product listings, process transactions, and handle various aspects of online sales and marketing.",
  },
  {
    id: 2,
    question: "What are the benefits of using an e-commerce platform?",
    answer:
      "Using an e-commerce platform offers several benefits, including the ability to reach a global audience, automate sales processes, manage inventory more efficiently, analyze customer data for insights, and provide a seamless shopping experience for customers.",
  },
  {
    id: 3,
    question: "How do I choose the right e-commerce platform for my business?",
    answer:
      "Choosing the right e-commerce platform depends on factors such as your business size, budget, technical requirements, and desired features. Consider factors like ease of use, scalability, customization options, integrations with other tools, and customer support when evaluating different platforms.",
  },
  {
    id: 4,
    question: "What features should I look for in an e-commerce platform?",
    answer:
      "Important features to consider when selecting an e-commerce platform include customizable website templates, mobile responsiveness, secure payment gateways, inventory management tools, order tracking, analytics and reporting, SEO capabilities, and marketing features like email campaigns and discounts.",
  },
];

const Faqs = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

  useEffect(() => {
    document.title = "Faqs";
  }, []);

  return (
    <div className="container mx-auto p-5 my-28 lg:my-20">
      <h1 className="font-semibold text-2xl text-center">
        Frequently Asked Questions
      </h1>
      {qna?.map((item, index) => (
        <Fragment key={index}>
          <Accordion
            expanded={expandedAccordion === `panel${index}`}
            onChange={handleAccordionChange(`panel${index}`)}
            className={`border border-[#E7E7E7 p-2 my-8 ${
              expandedAccordion === `panel${index}` ? "border-primary" : ""
            }`}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#36d7b7" }} />}
              aria-controls="q&a"
              id="q&a"
            >
              <Typography>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center min-h-[40px] min-w-[40px] border border-[#E7E7E7] bg-[#F6F6F6]  rounded-full text-[#6B6B6D]">
                    {index + 1}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold text-sm md:text-base">
                      {item?.question}
                    </h3>
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="flex items-center space-x-3">
                  <div className="min-w-[40px] min-h-[40px]" />
                  <div className="flex flex-col space-y-2">
                    <span className="font-semibold mr-2">Answer:</span>
                    <div>{item.answer}</div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Fragment>
      ))}
    </div>
  );
};

export default Faqs;
