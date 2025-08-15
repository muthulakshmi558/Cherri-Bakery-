import React, { useState } from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import cakeImage from "../assets/images/loginimage.png";

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState("login");

  // Separate forms for login & register
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`${activeTab === "login" ? "Login" : "Registration"} Successful!`);
    reset();
  };

  return (
    <section className="bg-white min-h-screen font-[Poppins] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Tab Header */}
        <div className="flex border-b border-orange-300">
          <button
            onClick={() => {
              setActiveTab("login");
              reset();
            }}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-lg ${
              activeTab === "login"
                ? "bg-orange-400 text-white"
                : "text-orange-500 border-b-2 border-transparent"
            }`}
          >
            <FaSignInAlt /> Login
          </button>
          <button
            onClick={() => {
              setActiveTab("register");
              reset();
            }}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-lg ${
              activeTab === "register"
                ? "bg-orange-400 text-white"
                : "text-orange-500 border-b-2 border-transparent"
            }`}
          >
            <FaUserPlus /> Register
          </button>
        </div>

        {/* Content */}
        <div className="grid text-black md:grid-cols-2 gap-10 mt-6">
          {/* Form */}
          <div>
            {activeTab === "login" && (
              <form
                className="space-y-5"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div>
                  <label className="block font-semibold mb-1">E-Mail</label>
                  <input
                    type="email"
                    placeholder="Enter Your E-Mail"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format"
                      }
                    })}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block font-semibold mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 w-full rounded-lg font-bold text-white"
                >
                  Login
                </button>
                <p className="text-orange-500 text-sm">Lost Your Password?</p>
                <p className="text-sm">
                  Don’t Have An Account?{" "}
                  <span
                    className="text-orange-500 font-semibold cursor-pointer"
                    onClick={() => setActiveTab("register")}
                  >
                    Register
                  </span>
                </p>
              </form>
            )}

            {activeTab === "register" && (
              <form
                className="space-y-5"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div>
                  <label className="block font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    {...register("name", { required: "Full Name is required" })}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block font-semibold mb-1">E-Mail</label>
                  <input
                    type="email"
                    placeholder="Enter Your E-Mail"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format"
                      }
                    })}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block font-semibold mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter Your Password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watch("password") ||
                        "Passwords do not match"
                    })}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 w-full rounded-lg font-bold text-white"
                >
                  Register
                </button>
                <p className="text-sm">
                  Already Have An Account?{" "}
                  <span
                    className="text-orange-500 font-semibold cursor-pointer"
                    onClick={() => setActiveTab("login")}
                  >
                    Login
                  </span>
                </p>
              </form>
            )}
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <div className="p-4 bg-gradient-to-b from-orange-400 to-orange-300 rounded-lg transform rotate-3">
              <img
                src={cakeImage} 
                alt="Cake Slice"
                className="rounded-lg w-80 h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
