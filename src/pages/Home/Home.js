import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Award from "../../components/Award/Award";
import Carousel from "../../components/Carousel/Carousel";
import Product from "../../components/Products/Product";
import DataSpinner from "../../components/share/DataSpinner/DataSpinner";
import SectionTitle from "../../components/share/SectionTitle/SectionTitle";
import auth from "../../firebase.init";
// import PageTitle from '../../components/share/PageTitle/PageTitle';

const Home = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      {/* <PageTitle title='Home' /> */}

      <section className="pt-0">
        <Carousel />
      </section>
      <DataSpinner>
        <section>
          <Product />
        </section>
      </DataSpinner>

      <section className="bg-main pt-8">
        <SectionTitle title=" the awards " textColor="text-white" />
        <Award />
      </section>
    </>
  );
};

export default Home;
