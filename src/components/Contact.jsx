import React from "react";
import { useForm } from "react-hook-form";
import img from "../assets/images/contact.png";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message Sent Successfully 🚀");
    reset();
  };

  return (
    <div className="bg-[#FFF8F0] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl text-black  w-full grid grid-cols-1 md:grid-cols-2 gap-8  rounded-2xl  p-8">
        
        {/* -------- Left Form -------- */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h2 className="text-2xl font-bold text-[#D99A6C] mb-4 text-center md:text-left">
            SEND US A MESSAGE
          </h2>

          <div>
            <label className="block text-sm font-bold mb-1">Name*</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#D99A6C] outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Email*</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#D99A6C] outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Phone Number*</label>
            <input
              type="text"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit number",
                },
              })}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#D99A6C] outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Subject*</label>
            <input
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#D99A6C] outline-none"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Message*</label>
            <textarea
              rows="4"
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#D99A6C] outline-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#D99A6C] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#b87f54] transition"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* -------- Right Side Image -------- */}
        <div className="flex items-center justify-center">
          <img
            src={img}
            alt="Contact Illustration"
            className="w-[80%] md:w-[100%] rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
