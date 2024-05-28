import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct";

const AllProducts = () => {

  const [products, setProducts] = useState([])

  useEffect( () => {
    fetch("http://localhost:3000/bags")
    .then( (res) => res.json() )
    .then ( (data) => setProducts(data)) ;
  }, []) ;


  const handleDeleteProduct = (id) => {
    setProducts(products.filter( (product) => product.id !== id )) ;
  };

  // const bags = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1 className="text-teal-500 text-3xl font-bold text-center mb-5">We Have {products.length} Products</h1>

      <div className="grid grid-cols-3 gap-4">
       
          {products.map((item) => (
           <div className="col-span-1">  <SingleProduct item={item} onDelete={handleDeleteProduct}></SingleProduct> </div>
          ))}
       
      </div>
    </div>
  );
};

export default AllProducts;
