import { useState } from "react";
import "../index.css";
import "../App.css";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
export function Header() {
  return (
    <header className={"bg-slate-400 h-24 shadow-lg"}>
      <h1
        className={
          "text-5xl font-extrabold text-indigo-600 tracking-wide uppercase  transition-all duration-300 ease-in-out hover:text-indigo-800"
        }
      >
        WebMarket
      </h1>
    </header>
  );
}
const Sign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    role: "customer",
    lastname: "",
    password: "",
    title: "",
    username: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(formData);
      if (formData.email == "") {
        alert("pls enter an email");
        return;
      }
      if (formData.password == "") {
        alert("pls enter a password");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/Users/signup",
        formData
      );

      console.log("SignUp successful:", response.data);
      if (response) {
        setFormData({
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          role: "customer",
          username: "",
        });
        navigate("/Login");
      }
      // else {
      //   const data = await response.json();
      //   if(data.errors)
      //     alert(data.errors)
      // }
    } catch (err) {
      console.log(err);
      // err.errors.map((item) => alert(item.message));

      err.response.data.errors.map((item) => alert(item.message));
    }
  };

  return (
    <div className="bg-slate-200 w-80 h-auto rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8">
      <header>
        <h1 className="text-4xl font-bold text-center">Sign-Up</h1>
      </header>
      <div className="text-center mt-7">
        <form action="" method="POST">
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
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setFormData((prevData) => ({
                  ...prevData,
                  username: e.target.value,
                }));
              }}
              className="p-2 border border-gray-300 rounded w-60"
            />
          </div>
          {/* First Name Field */}
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
                setFormData((prevData) => ({
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
                setFormData((prevData) => ({
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
                setFormData((prevData) => ({
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
                setFormData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }));
              }}
              className="p-2 border border-gray-300 rounded w-60"
            />
          </div>
          {/*category*/}
          {/*country*/}
          {/*phone-number*/}
          {/*website*/}
          {/**/}
          {/* Submit Button */}
          <button
            type="submit"
            onClick={(event) => handleSubmit(event)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Sign-Up
          </button>
        </form>
      </div>
      <span>Sellers ?</span>
      <NavLink to="/SellersRegister" className={"hover:visited:text-blue-700"}>
        SignUp Here!
      </NavLink>
    </div>
  );
};
const SignUp = () => {
  return (
    <div className="relative h-screen bg-slate-100">
      <Header />
      <Sign />
    </div>
  );
};

export default SignUp;
