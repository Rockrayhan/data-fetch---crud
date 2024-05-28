import React from "react";

const AddProduct = () => {
  const formSubmit = async (e) => {
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

    await fetch("http://localhost:3000/bags", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset() ;
      });
  };

  return (
    <div>
      <h1 className="text-orange-500 text-3xl font-bold text-center mb-10">
        Add a Product
      </h1>

      <form
        onSubmit={formSubmit}
        className="flex justify-center items-center  flex-col"
        action=""
        method="post"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />
        <input
          type="text"
          placeholder="Price"
          name="price"
          className="input border-2  w-2/3 border-orange-500"
        />
        <br />
        <input
          type="text"
          placeholder="Description"
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
          placeholder="ID"
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

export default AddProduct;
