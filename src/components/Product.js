import React from "react";
const Product = () => {
  return (
    <div>
      <img src="/images/peproni.png" alt="" />
      <div className="text-center">
        <h3 className="text-lg font-bold my-1">Peproni</h3>
        <span className="bg-grey-200 rounded-full text-sm px-2">
          small
        </span>
      </div>
      <div className="flex items-center justify-between mt-1 px-4 ">
        <span className="font-bold">$500</span>
        <button className="bg-yellow-500 py-1 rounded-full font-bold px-2 text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
