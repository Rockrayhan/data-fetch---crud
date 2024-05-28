import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ item }) => {
  const { id, name, brand, description, img_url, price } = item;
  console.log(id);

  return (
    <div className="card bg-base-100 shadow-xl" style={{ width: '300px', height: '450px' }}>
      <figure style={{ height: '200px', overflow: 'hidden' }}>
        <img
          src={img_url}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </figure>
      <div className="card-body" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h2 className="card-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}> {name} </h2>
        <div className="flex gap-4">
          <h3 className="text-lg text-orange-900"> Brand: {brand} </h3>
          <h3 className="text-lg text-orange-900"> Price: {price}$ </h3>
        </div>
        <p> {description} </p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`}> <button className="btn bg-orange-300"> See Details </button> </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
