import React from 'react';
import PageTitle from '../../components/share/PageTitle/PageTitle';
import BgSections from './BgSections';
import MotorShowBg from '../../images/MotorShow/motorShow.jpg';
import WhiteText from './WhiteText';
import ServiceLeft from './ServiceLeft';
import FirstShow from '../../images/MotorShow/firstShow.jpg';
import ServiceRight from './ServiceRight';
import SecondShow from '../../images/MotorShow/secondShow.jpg';
import redDot from '../../images/MotorShow/redDot.png';




const MotorShow = () => {
  return (
    <>
      {/* page title */}
      <PageTitle title="Motor Show" />
      {/* first section */}
      <BgSections
        img={MotorShowBg}
        title="MOTOR SHOW"
        subtitle="GENESIS MOTOR SHOW"
        description="A truly authentic brand, discover Genesis' unique booth and concept cars."
      />
      {/* second section */}
      <WhiteText
        img={redDot}
        title="Red Dot Award 2018 Communication Design"
        description="The award winning Genesis booth design has been recognized for its unique design, elegance and beauty."
      />
      <ServiceLeft
        img={FirstShow}
        title="VISION FOR ELECTRIFICATION"
        subTitle="Seoul Mobility Show 2021"
        description="Genesis showcases its EV lineup, from the Electrified GV70 to the Genesis X Concept Car and GV60, at the Seoul Mobility Show 2021."
      />
      <section className="-mt-24">
        <ServiceRight
          img={SecondShow}
          title="WORLD PREMIERE OF GENESIS ELECTRIFIED GV70"
          subTitle="GUANGZHOU MOTORSHOW 2021"
          description="Genesis hosted the world premiere of the Genesis Electrified GV70 during our brand debut at Auto Guangzhou 2021."
        />
      </section>
    </>
  );
};

export default MotorShow;