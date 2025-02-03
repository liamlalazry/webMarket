import { useEffect, useState } from "react";
import { Header } from "./Register";
import axios from "axios";

const Shopcart = ({ cart }) => {
  const [clicked, setClicked] = useState(false);
  console.log(cart);
  return (
    <div className="absolute top-5 right-5">
      <button
        onClick={() => setClicked(!clicked)}
        className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
      </button>

      {/* Shopping Cart Dropdown */}
      {clicked && (
        <div className="z-10 right-0 top-12 w-72 bg-white shadow-lg rounded-lg p-4 absolute">
          <h3 className="text-lg font-bold text-gray-800">Shopping Cart</h3>
          {console.log("d", cart)}
          {cart.map((item, i) => (
            <div key={i}>
              {Object.values(item).map((item) => (
                <p>{Object.values(item)}</p>
              ))}
            </div>
          ))}
          <p className="text-gray-600"></p>
        </div>
      )}
    </div>
  );
};
const ProductsArea = ({ setCart }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = (e) => {
    console.log(e);
    setQuantity((a) => a++);
    setCart((cart) => [...cart, { e }]);
  };
  const [list, setList] = useState([]);
  try {
    useEffect(() => {
      axios
        .get("http://localhost:3000/Products/getAllProducts")
        .then((r) => setList(r.data.data));
    }, []);
  } catch (err) {
    resizeBy.status(400).json({ status: "failed", msg: err.message });
  }

  console.log("a", list);

  return (
    <div className="absolute w-4/5 h-3/5 bottom-10 left-1/5 p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Products</h2>
      <div className="absolute top-0 left-1/3 grid grid-cols-3 gap-4 w-auto">
        {list.map((details, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              className="h-20 w-20 bg-gray-300 rounded-full mb-3"
              src={`${details.images}`}
            />
            <h3 className="font-bold text-gray-700 mb-2">
              <p> name: {details.name}</p>
              <p> stock: {details.stock}</p>
              <p> price: {details.price}</p>
              <p> description: {details.description}</p>
              <p> category: {details.category}</p>
            </h3>{" "}
            <button
              onClick={() => addToCart(details)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
const SideBarFilters = () => {
  return (
    <div className="absolute bg-blue-700 text-white p-4 w-1/5 h-4/5">
      <h3 className="text-xl font-bold mb-4">Filters</h3>
      <ul>
        <li className="mb-2">
          <input type="checkbox" id="category1" />
          <label htmlFor="category1" className="ml-2">
            Category 1
          </label>
        </li>
        <li className="mb-2">
          <input type="checkbox" id="category2" />
          <label htmlFor="category2" className="ml-2">
            Category 2
          </label>
        </li>
        <li className="mb-2">
          <input type="checkbox" id="category3" />
          <label htmlFor="category3" className="ml-2">
            Category 3
          </label>
        </li>
      </ul>
    </div>
  );
};

const Market = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      <Shopcart cart={cart} />
      <SideBarFilters />
      <ProductsArea setCart={setCart} />
    </div>
  );
};

export default Market;
