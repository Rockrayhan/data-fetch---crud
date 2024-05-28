import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct";

const AllProducts = () => {
  const bags = useLoaderData();
  console.log(bags);
  return (
    <div>
      <h1 className="text-teal-500 text-3xl font-bold text-center mb-5">We Have {bags.length} Products</h1>

      <div className="grid grid-cols-3 gap-4">
       
          {bags.map((item) => (
           <div className="col-span-1">  <SingleProduct item={item}></SingleProduct> </div>
          ))}
       
      </div>
    </div>
  );
};

export default AllProducts;
