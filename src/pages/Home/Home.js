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
      {/* carousel */}
      <section className="pt-0">
        <Carousel />
      </section>
      {/* all product */}
      <section>
        <Product />
      </section>
      {/* award */}
      <section className="bg-main pt-8">
        <SectionTitle title=" the awards " textColor="text-white" />
        <Award />
      </section>
      {/* related content */}
      <section className="py-24">
        <RelatedContents />
      </section>
    </>
  );
};

export default Home;
