import { useState } from "react";
import "../index.css";
import "../App.css";
import { Header } from "./Register";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Log = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password == "") {
      alert("password is required!");
      return;
    }
    if (formData.email == "") {
      alert("email is required!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/Users/login",
        formData
      );
      console.log("Login successful:", response.data); // הודעת הצלחה
      if (response.data.role == "customer")
        navigate(`/home/${response.data.UserId}`);
      if (response.data.role == "seller")
        navigate(`/sellerPage/${response.data.UserId}`);

      console.log(response.data.UserId);
    } catch (err) {
      if (err.response) {
        alert("Your password or email isn't correct");
        console.error("Error:", err.response.data.message); // שגיאה מהשרת
      } else {
        console.error("Error:", err.message);
      }
    }
  };
  return (
    <div className="bg-slate-200 w-96 h-80 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <header>
        <h1 className="text-4xl font-bold text-center">Log-In</h1>
      </header>
      <div className="text-center mt-7">
        <form onSubmit={handleSubmit} method="POST">
          {/* Username Field */}
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
              value={formData.email}
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="p-2 border border-gray-300 rounded w-60"
            />
          </div>

          {/* Password Field */}
          <div
            className="flex items-center justify-center mb-4 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          >
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded w-60"
            />
          </div>

          {/* Title Field */}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Log-In
          </button>
          <div className="absolute right-28 bottom-3 ">
            <span> Register Here :</span>
            <NavLink to="/Sign-Up" className={"hover:visited:text-blue-700"}>
              Sign-Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
function Login() {
  return (
    <div className="relative h-screen">
      <Header />
      <Log />
    </div>
  );
}

export default Login;
