import React from 'react';
import PageTitle from '../../components/share/PageTitle/PageTitle';
import BgSections from './BgSections';
import ConceptCarBg from '../../images/conceptCar/ConceptCar.jpg';
import ServiceRight from './ServiceRight';
import NewConcept from "../../images/conceptCar/newConcept.png";
import ServiceLeft from './ServiceLeft';
import NewCar from '../../images/conceptCar/newCar2.png';
import NewCar2 from '../../images/conceptCar/newCar3.png';

const ConceptCar = () => {
  return (
    <>
      {/* page title */}
      <PageTitle title="Concept Car" />
      {/* first section */}
      <BgSections
        img={ConceptCarBg}
        title="CONCEPT CAR"
        subtitle="The Concept Car"
        description="A beauty of innovation visualized by design."
      />

      {/* second section */}
      <ServiceRight
        img={NewConcept}
        title="GENESIS CONCEPT 2022"
        subTitle="GENESIS X SPEEDIUM Coupe CONCEPT"
        description="The Genesis X Speedium Coupe encapsulates Genesis’ hope that the emotional value of driving will remain strong even in the era of electrification. "
      />
      {/* third section */}
      <ServiceLeft
        img={NewCar}
        title="GENESIS CONCEPT 2021"
        subTitle="GENESIS X CONCEPT"
        description="Genesis X Concept presents sustainable luxury of GENESIS in the form of an EV-based high-performance GT coupe concept car. "
      />
      {/* 4th section */}
      <section className="-mt-40">
        <ServiceRight
          img={NewCar2}
          title="GENESIS CONCEPT 2019"
          subTitle="MINT CONCEPT"
          description="The Mint Concept introduces the all-electric, luxury car for the city, a new vehicle typology, featuring organic design and an innovative interior user experience. "
        />
      </section>
    </>
  );
};

export default ConceptCar;

