import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProduct =  () => {
  const product = useLoaderData();


  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [brand, setBrand] = useState(product.brand);
  const [id, setId] = useState(product.id);
  const [description, setDescription] = useState(product.description);
  const [img_url, setImg_url] = useState(product.img_url);



  
  const formSubmit = async(e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const description = form.description.value;
    const img_url = form.img_url.value;
    const price = form.price.value;

    const data = { id, name, brand, description, img_url, price };

    if (!window.confirm("Add the product?")) {
        return; // Exit if the user cancels
      }

    await fetch(`http://localhost:3000/bags/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => { 
        console.log(data);
      form.reset() ;
      toast.success('Updated Successfully ...');
    });

    // console.log(data);

    // if (!window.confirm("Add the product?")) {
    //   return; // Exit if the user cancels
    // }
  };

  return (
    <div>
      <div>
        <Toaster />
      </div>

      <h1 className="text-orange-500 text-3xl font-bold text-center mb-10">
        Edit Product {id}
      </h1>

      <form
        onSubmit={formSubmit}
        className="flex justify-center items-center  flex-col"
        action=""
        method="post"
      >
        <input
          type="text"
          placeholder={name}
          name="name"
          className="input border-2  w-2/3 border-orange-500"
          value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder={brand}
          name="brand"
          className="input border-2  w-2/3 border-orange-500"
          value={brand}
        onChange={(e) => setBrand(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder={price}
          name="price"
          className="input border-2  w-2/3 border-orange-500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder={description}
          name="description"
          className="input border-2  w-2/3 border-orange-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Image URL"
          name="img_url"
          className="input border-2  w-2/3 border-orange-500"
          value={img_url}
          onChange={(e) => setImg_url(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder={id}
          name="id"
          className="input border-2  w-2/3 border-orange-500"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />

        <input
          type="submit"
          value="SUBMIT"
          className="input border-2  w-1/5 bg-orange-500 custom-btn text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default EditProduct;
