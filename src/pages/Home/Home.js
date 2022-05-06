import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Product from '../../components/Products/Product';
// import PageTitle from '../../components/share/PageTitle/PageTitle';


const Home = () => {
  return (
    <>
    {/* <PageTitle title='Home' /> */}
      <section className='pt-0' >
        <Carousel />
      </section>
      <section>
        <Product />
      </section>
    </>
  );
};

export default Home;