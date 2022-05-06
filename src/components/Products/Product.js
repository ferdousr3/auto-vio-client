import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../share/SectionTitle/SectionTitle";


const Product = () => {
  const [products] = useProducts([]);

  return (
    <>
      <div className="bg-main py-20">
        <div className="container mx-auto">
          <div className="pb-12">
            <SectionTitle
              textColor="text-white"
              title="Our Models"
              subTitle="Explore Auto-vio vehicle line-up with its dynamic yet elegant design and cutting-edge technology."
            />
          </div>
          <div className=" gap-8 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
