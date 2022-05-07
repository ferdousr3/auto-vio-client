import React from "react";
import Award from "../../components/Award/Award";
import Carousel from "../../components/Carousel/Carousel";
import Product from "../../components/Products/Product";
import RelatedContents from "../../components/RelatedContents/RelatedContents";
import SectionTitle from "../../components/share/SectionTitle/SectionTitle";

// import PageTitle from '../../components/share/PageTitle/PageTitle';

const Home = () => {

  return (
    <>
      {/* <PageTitle title='Home' /> */}

      <section className="pt-0">
        <Carousel />
      </section>
      <section>
        <Product />
      </section>
      <section className="bg-main pt-8">
        <SectionTitle title=" the awards " textColor="text-white" />
        <Award />
      </section>
      <section className="py-24">
        <RelatedContents />
      </section>
    </>
  );
};

export default Home;
