import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
const EditProduct = () => {
  const product = useLoaderData();
  const { id, name, brand, description, img_url, price } = product;
  const formSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const description = form.description.value;
    const img_url = form.img_url.value;
    const price = form.price.value;

    const data = { id, name, brand, description, img_url, price };
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
        />
        <br />
        <input
          type="text"
          placeholder={brand}
          name="brand"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />
        <input
          type="text"
          placeholder={price}
          name="price"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />
        <input
          type="text"
          placeholder={description}
          name="description"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />
        <input
          type="text"
          placeholder="Image URL"
          name="img_url"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />
        <input
          type="text"
          placeholder={id}
          name="id"
          className="input border-2  w-2/3 border-orange-500"
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
