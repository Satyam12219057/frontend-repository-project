import React from "react";
import Header from "../components/Header";
import { useEffect } from "react";
import { useState } from "react";

const ProfilePage = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
        method: "GET",
      });
      const result = await resp.json();
      console.log("result--->", result);
      setProducts(result.data.product);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(products);

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const title = e.target.title.value;
      const price = e.target.price.value;
      const description = e.target.description.value;
      const quantity = e.target.quantity.value;
      const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`, {
        // Added await here
        method: "POST",
        body: JSON.stringify({
          title: title,
          price: price,
          description,
          quantity,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (resp.status === 201) {
        // Changed == to === and checked for 201 status
        alert("Product added successfully!");
        getData(); // Refresh products after successful addition
        console.log(resp);
        e.target.reset(); // Clear the form fields
      } else {
        const result = await resp.json();
        alert(`Invalid data: ${result.message}`);
      }
    } catch (err) {
      console.warn("cannot create product--->", err.message);
      alert(`Cannot create the product: ${err.message}`);
    }
  };
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="mb-8 p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
            Add New Product
          </h2>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Product Title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Product Price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Product Description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="quantity"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              placeholder="Product Quantity"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Add Product
          </button>
        </form>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Available Products
        </h2>
        <div className="container mx-auto p-4 py-8">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
            Available Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((elem) => (
              <div
                key={elem._id}
                className="bg-cyan-200 rounded-xl shadow-lg overflow-hidden 
                   transform transition-all duration-300 ease-in-out 
                   hover:scale-105 hover:shadow-xl cursor-pointer
                   relative group"
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {elem.title}
                    </h3>
                    <p className="text-blue-600 text-2xl font-extrabold mb-3">
                      ${elem.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {elem.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    {" "}
                    {/* Ensures quantity stays at the bottom */}
                    <p className="text-gray-500 text-sm">
                      Quantity:{" "}
                      <span className="font-semibold">{elem.quantity}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
