import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import PageTitle from '../../components/share/PageTitle/PageTitle';


const Home = () => {
  return (
    <>
    {/* <PageTitle title='Home' /> */}
      <section className='pt-0' >
        <Carousel />
      </section>
    </>
  );
};

export default Home;