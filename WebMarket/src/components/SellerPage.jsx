import { Header } from "./Register";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white w-1/4 h-screen p-4 ">
      <h1 className="text-center text-3xl font-semibold mb-6">Menu</h1>
      <ul className="space-y-4">
        <li className="hover:text-orange-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-orange-400 cursor-pointer">My Products</li>
        <li
          onClick={() => navigate("/SellerOrdersPage")}
          className="hover:text-orange-400 cursor-pointer"
        >
          Orders
        </li>
        <li className="hover:text-orange-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}
function AddProduct({ setUpdate }) {
  //axios.get("http://localhost:3000/Users/Login");
  const { id } = useParams();

  const [FormPdata, setFormPdata] = useState({
    sellerId: `${id}`,
    name: "",
    stock: "",
    price: "",
    description: "",
    category: "",
    images: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Products/addProduct", FormPdata)
      .then((res) => {
        console.log("Product added successfully:", res.data);
        setUpdate(res.data);
      })
      .catch((err) => {
        console.error("Error adding product:", err);
        console.log(FormPdata);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute w-1/4 h-auto top-40 right-10 bg-white p-6 rounded-lg shadow-lg space-y-4"
    >
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          id="name"
          type="text"
          className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setFormPdata((prevData) => ({
              ...prevData,
              name: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label
          htmlFor="stock"
          className="block text-sm font-medium text-gray-700"
        >
          Stock:
        </label>
        <input
          id="stock"
          type="number"
          className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setFormPdata((prevData) => ({
              ...prevData,
              stock: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price:
        </label>
        <input
          id="price"
          type="number"
          className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setFormPdata((prevData) => ({
              ...prevData,
              price: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="description"
          rows="3"
          className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setFormPdata((prevData) => ({
              ...prevData,
              description: e.target.value,
            }))
          }
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category:
        </label>
        <input
          id="category"
          type="text"
          className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setFormPdata((prevData) => ({
              ...prevData,
              category: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label
          htmlFor="images"
          className="block text-sm font-medium text-gray-700"
        >
          Images (URL):
        </label>
        <input
          id="images"
          type="text"
          className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setFormPdata((prevData) => ({
              ...prevData,
              images: e.target.value,
            }))
          }
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}
function Card(props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200">
      <img
        src={`${props.images}`}
        alt="place"
        className="bg-slate-400  w-3/4 h-5/6 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{props.name}</h2>
      <p className="text-gray-600 mb-4">{props.description}</p>
      <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500">
        Edit
      </button>
    </div>
  );
}
function MyProducts({ update }) {
  const { id } = useParams();
  const [res, setRes] = useState([]); //res is already array so why it needed to initialize with array?
  useEffect(() => {
    const a = async () => {
      try {
        let response = await axios.get(
          `http://localhost:3000/Products/getProductsById/${id}`
        );
        setRes(response.data.data);
      } catch (err) {
        alert(`${err.message}`);
      }
    };
    a();
  }, [update]);
  return (
    <div className="absolute top-20 ml-[25%] pl-8 pr-8 pt-6 w-[44%]">
      <h1 className="text-2xl font-semibold mb-6">My Products</h1>
      <div className="grid grid-cols-3 gap-6 ">
        {res.map((item, i) => (
          <div key={i}>
            <Card
              name={item.name}
              stock={item.stock}
              price={item.price}
              description={item.description}
              category={item.category}
              images={item.images}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const SellerPage = () => {
  const [update, setUpdate] = useState();

  //useEffect(() => console.log(response), [response]);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex">
        <SideBar />
        <div className="flex-grow ml-[25%]">
          <AddProduct setUpdate={setUpdate} />
        </div>
      </div>
      <div className="pt-20">
        <MyProducts update={update} />
      </div>
    </div>
  );
};
export default SellerPage;
