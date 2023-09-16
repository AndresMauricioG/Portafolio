import React, { useState, useEffect } from "react";

const API_URL = "https://fakestoreapi.com/products";

const Cards = ({ count, setCount }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const handleCleanCart = () => {
    setCart([]);
    setCount(0);
  };

  const handleRemoveProduct = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-5">
      <h1 className="text-3xl text-white text-center mb-4">Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div className="bg-[#323232] border border-2 border-black p-4 rounded-[20px] shadow-md" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full border border-2 border-black object-cover rounded-md shadow-lg"
            />
            <h2 className="text-lg text-white mt-2">{product.title}</h2>
            <p className="text-white">${product.price}</p>
            <div className="flex justify-center mt-5">
              <button
                onClick={() => {
                  setCount(count + 1);
                  handleAddToCart(product);
                }}
                className="bg-[#4444fc] text-white py-2 px-2 rounded hover:bg-[#5050fc]">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-3xl text-white text-center mb-4">shopping cart</h2>
        <button
          onClick={handleCleanCart}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        >
          Clean cart
        </button>
        {cart.map((product) => (
          <div
            className="bg-white p-4 rounded-lg shadow-md mt-4"
            key={product.id}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover rounded-md shadow-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => {
                handleRemoveProduct(product.id);
                setCount(count - 1);
              }}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-2 hover:bg-red-700">
              Take out the cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;



