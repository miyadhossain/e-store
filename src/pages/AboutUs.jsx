import { useEffect } from "react";
import callCenterImage from "../assets/call-center.svg";
import onlinePaymentImage from "../assets/online-payment.png";
import truckImage from "../assets/truck.svg";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);
  return (
    <div className="container mx-auto p-5 my-28 lg:my-20">
      <h1 className="text-2xl text-center font-semibold">About Us</h1>
      <div className="mt-4">
        <p>
          We are a dynamic team of creative minds dedicated to crafting
          innovative solutions for the modern world. With a passion for
          excellence and a commitment to quality, Lorem Ipsum Co. strives to
          exceed expectations in every endeavor.
        </p>
        <p className="my-6">
          Our journey began with a simple idea: to revolutionize the way people
          interact with technology. From that seed of inspiration, we have grown
          into a trusted partner for businesses seeking cutting-edge solutions
          in software development, digital marketing, and beyond.
        </p>
        <p>
          At Lorem Ipsum Co., we believe in the power of collaboration. By
          fostering an environment where diverse perspectives are valued and
          creativity thrives, we harness the collective genius of our team to
          deliver results that make a difference.
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-20 h-20"
            src={callCenterImage}
            alt="call-center image"
          />
          <h4 className="text-sm text-center xl:text-lg font-bold mt-4">
            SUPPORT 24/7
          </h4>
        </div>
        <div className="flex flex-col mt-4">
          <h6 className="font-semibold">Call Center Support 24/7</h6>
          <h6>Phone Number: 1-800-123-4567</h6>
          <h6>Email: support@example.com</h6>
          <h6>Live Chat: Available on our website</h6>
          <h6 className="font-semibold">Social media:</h6>
          <ul className="list-disc ml-6">
            <li>Facebook: @example_support</li>
            <li>Twitter: @example_support</li>
            <li>Instagram: @example_support</li>
          </ul>
          <p>Address: 1234 Customer Service Ave, Cityville, State, Zip Code</p>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-20 h-20"
            src={onlinePaymentImage}
            alt="call-center image"
          />
          <h4 className="text-sm text-center xl:text-lg font-bold mt-4">
            ONLINE PAYMENT
          </h4>
        </div>
        <div className="flex flex-col mt-4">
          <h6 className="font-semibold">
            Make payments hands free very easily
          </h6>
          <h6>Website: www.examplepayments.com</h6>
          <h6>Email: support@example.com</h6>
          <h6 className="font-semibold">Our Services:</h6>
          <ul className="list-disc ml-6">
            <li>
              Online Payments: Easily make payments online using credit/debit
              cards, bank transfers, or digital wallets.
            </li>
            <li>
              Payment Gateway: Seamlessly integrate our payment gateway into
              your website or application to accept payments from customers.
            </li>
            <li>
              Merchant Services: Access a suite of merchant services, including
              payment processing, fraud prevention, and reporting tools.
            </li>
            <li>
              Subscription Billing: Set up recurring billing for
              subscription-based services or memberships.
            </li>
            <li>
              Mobile Payments: Make payments on the go with our mobile app,
              available for iOS and Android devices.
            </li>
            <li>
              International Payments: Send and receive payments globally in
              multiple currencies, with competitive exchange rates.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex flex-col justify-center items-center">
          <img className="w-20 h-20" src={truckImage} alt="call-center image" />
          <h4 className="text-sm text-center xl:text-lg font-bold mt-4">
            FAST DELIVERY
          </h4>
        </div>
        <div className="flex flex-col mt-4">
          <h6 className="font-semibold">Say NO to waiting</h6>
          <p>
            Introducing QuickShip Express, your reliable partner for
            lightning-fast delivery services. With our commitment to speed and
            efficiency, we ensure your packages reach their destination in
            record time, without compromising on safety or reliability. Whether
            you are sending urgent documents, perishable goods, or valuable
            merchandise, trust QuickShip Express to deliver with speed and
            precision.
          </p>
          <h6>Key Features:</h6>
          <ul className="list-disc ml-6">
            <li>
              Same-Day Delivery: Need it there today? No problem. Our same-day
              delivery option ensures your package is delivered within hours of
              pickup, for those urgent shipments.
            </li>
            <li>
              Next-Day Delivery: For less urgent shipments, our next-day
              delivery service guarantees your package arrives at its
              destination by the following day, without delay.
            </li>
            <li>
              Real-Time Tracking: Keep tabs on your package every step of the
              way with our real-time tracking feature. Know exactly where your
              shipment is and when it will arrive.
            </li>
            <li>
              Secure Handling: Your packages are in safe hands with our trained
              and professional delivery personnel. We handle your items with
              care and ensure they reach their destination intact.
            </li>
            <li>
              Flexible Pickup Options: Choose from our convenient pickup
              locations or schedule a pickup from your doorstep at a time that
              works for you.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20">
        <h4 className="text-center text-2xl font-semibold">Why Choose Us</h4>
        <ul className="list-disc ml-6 mt-5">
          <li>
            Security: We prioritize the security of your financial information
            through industry-standard encryption and fraud prevention measures.
          </li>
          <li>
            Convenience: Our user-friendly interface and seamless checkout
            process make it easy for you to make payments anytime, anywhere.
          </li>
          <li>
            Reliability: With a robust infrastructure and redundant systems, we
            ensure high availability and reliability for uninterrupted service.
          </li>
          <li>
            Customer Support: Our dedicated customer support team is available
            24/7 to assist you with any questions or issues you may encounter.
          </li>
          <li>
            Competitive Pricing: We offer competitive pricing with transparent
            fees and no hidden charges, ensuring you get the best value for your
            money.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
