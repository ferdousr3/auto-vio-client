import React from 'react';

const ItemsRow = ({product}) => {

  return (
    <>
      <tr >
        <td>
          <div className="flex items-center space-x-3">
            <img className=" w-24 " src={product.img} alt={product.name} />
          </div>
        </td>
        <td>
          <h5 className="mb-1 text-sm uppercase font-bold tracking-tight text-mains dark:text-white">
            {product?.name}
          </h5>
        </td>
        <td>
          <p className="mb-1 text-sm hidden sm:block  text-eight dark:text-gray-400 font-medium ">
            ${product.price}
          </p>
        </td>
        <td>
          <p className="mb-1  text-sm text-eight dark:text-gray-400 font-medium ">
            {product.quantity}
          </p>
        </td>
      </tr>
    </>
  );
};

export default ItemsRow;