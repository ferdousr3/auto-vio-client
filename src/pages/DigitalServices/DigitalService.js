import React from "react";
import Service from "../../images/service/service.jpg";
import Payment from "../../images/service/payment.jpg";
import Software from "../../images/service/software.jpg";
import Key from "../../images/service/key.jpg";
import PageTitle from "../../components/share/PageTitle/PageTitle";
import ServiceRight from "./ServiceRight";
import ServiceLeft from "./ServiceLeft";
import WhiteText from "./WhiteText";
import BgSection from "./BgSection";
import BgSections from "./BgSections";

const DigitalService = () => {
  return (
    <>
      {/* page title */}
      <PageTitle title="Digital Services" />
      {/* main parts of the page */}
      {/*!-----> first section -------> */}
      <BgSection
        img={Service}
        title="DIGITAL SERVICES"
        description="We have mindfully chosen the technology that adds more convenience and safety to our customers' daily lives."
      />
      {/*!-----> text section -------> */}
      <WhiteText
        title="INTRODUCING GENESIS DIGITAL SERVICES"
        description="Enjoy more convenience in your daily driving life with new cutting-edge technologies of Genesis Digital Services."
      />
      {/*!-----> first section -------> */}
     
      <BgSections
        img={Software}
        title="GENESIS DIGITAL SERVICES"
        subtitle="OTA Software Update"
        description="OTA Software Update(OTA:Over-The-Air) refers to the technology that updates software programs using wireless communication. <br />
            OTA Software Update allows you to improve your vehicle’s performance
            and stability and to experience new features."
      />
      {/*!-----> second section -------> */}
      <ServiceRight
        img={Key}
        title="GENESIS DIGITAL KEY"
        subTitle="Digital Key Share"
        description="The Digital Key app lets you share your digital key with up to three people. You can choose the sharing period and features."
      />
      {/*!-----> third section -------> */}
      <ServiceLeft
        img={Payment}
        title="GENESIS CARPAY"
        subTitle="PAYMENT CARD & MEMBERSHIP"
        description="When you register your card and membership in the Genesis Carpay app, you can access all the detailed information on the car navigation screen."
      />
    </>
  );
};

export default DigitalService;
