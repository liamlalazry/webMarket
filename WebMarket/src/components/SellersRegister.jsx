import { Header } from "./Register";
import { useState } from "react";
import "../index.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [formSellerData, setFormSellerData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    role: "seller",
    profilePic: "",
    phone: "",
    category: "",
    country: "",
    website: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formSellerData);
      if (formSellerData.email == "") {
        alert("pls enter an email");
        return;
      }
      if (formSellerData.password == "") {
        alert("pls enter a password");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/Users/sellersSignup",
        formSellerData
      );

      console.log("SignUp successful:", response.data);
      if (response) {
        setFormSellerData({
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          role: "seller",
          profilePic: "",
          phone: "",
          category: "",
          country: "",
          website: "",
        });
        navigate("/Login");
      }
      // else {
      //   const data = await response.json();
      //   if(data.errors)
      //     alert(data.errors)
      // }
    } catch (err) {
      err.response.data.errors.map((item) => alert(item.message));
    }
  };

  return (
    <div>
      <div className="bg-slate-200 w-80 h-auto rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8">
        <header>
          <h1 className="text-4xl font-bold text-center"> Sellers Sign-Up</h1>
        </header>
        <div className="text-center mt-7">
          <form action="" method="POST">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => {
                  setFormSellerData((prevData) => ({
                    ...prevData,
                    firstname: e.target.value,
                  }));
                }}
                className="p-2 border border-gray-300 rounded w-60"
              />
            </div>
            {/* Last Name Field */}
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                  setFormSellerData((prevData) => ({
                    ...prevData,
                    lastname: e.target.value,
                  }));
                }}
                className="p-2 border border-gray-300 rounded w-60"
              />
            </div>
            {/* Password Field */}
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-lock mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
              </svg>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setFormSellerData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }));
                }}
                className="p-2 border border-gray-300 rounded w-60"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-envelope mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setFormSellerData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }));
                }}
                className="p-2 border border-gray-300 rounded w-60"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <input
                type="text"
                placeholder="Phone"
                onChange={(e) => {
                  setFormSellerData((prevData) => ({
                    ...prevData,
                    phone: e.target.value,
                  }));
                }}
                className="p-2 border border-gray-300 rounded w-60"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
              <input
                type="text"
                placeholder="Category"
                onChange={(e) => {
                  setFormSellerData((prevData) => ({
                    ...prevData,
                    category: e.target.value,
                  }));
                }}
                className="p-2 border border-gray-300 rounded w-60"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-globe"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
              </svg>
              <input
                type="text"
                placeholder="Country"
                onChange={(e) => {
                  setFormSellerData((prevData) => ({
                    ...prevData,
                    country: e.target.value,
                  }));
                }}
                className="p-2 border border-gray-300 rounded w-60"
              />
            </div>

            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-window"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z" />
              </svg>

              <input
                type="text"
                placeholder="Website"
                onChange={(e) => {
                  setFormSellerData((prevData) => ({
                    ...prevData,
                    website: e.target.value,
                  }));
                }}
                className="p-2 border border-gray-300 rounded w-60"
              />
            </div>
            <button
              type="submit"
              onClick={(event) => {
                handleSubmit(event);
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Sign-Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const SellersRegister = () => {
  return (
    <div>
      <Header />
      <SignUp />
    </div>
  );
};

export default SellersRegister;
