import { useState } from "react";
import api from '../api/axios.js'
/**
 * @function ContactForm
 * @description This function renders a contact form where users can input their name, email, phone number, and message.
 * @returns {JSX.Element} A JSX element representing the contact form.
 * @example
 * <ContactForm />
 */
export default function ContactForm() {
  const initialState = { name: "", email: "", phone: "", about: "", msg: "" };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState({});

  /**
   * Handles a change event on a form input element.
   * Updates the formData state with the input element's name and value.
   * @param {Event} e - The change event
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handles the form submission by sending a POST request to the server with the form data.
   * If the server responds with a 200 status code, it resets the form data and displays a success alert.
   * If the server responds with a non-200 status code, it displays an error message.
   * @param {Event} e - The form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
    
      const res = await api.post("/users/", formData);
      const data = await res.data;
    
        alert(
          "Thank you for visiting our website. We will reach out within 24 hours",
        );
        setFormData(initialState);
        setError({});
      }
       catch (error) {
      console.error(error);

    const formattedErrors = {};

    // ✅ safely access errors
    error.response?.data?.errors?.forEach((err) => {
      formattedErrors[err.path] = err.msg;
    });

    setError(formattedErrors);
    }
  };
  return (
    <div className="w-[100%] mx-auto bg-white rounded-md h-auto">
      <h1 className="bg-[#105503] text-white px-8 py-2 text-center font-roboto font-medium text-[20px] sm:text-[28px] rounded-t-sm">
        Join SMD Academy
      </h1>
      <form onSubmit={handleSubmit} className="w-[90%] mx-auto">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Your Name"
          className="border-b-1 md:border-2  border-zinc-400 px-0.5 md:px-4 py-1 md:py-2 md:rounded-md bg-white  w-full md:mt-4 lg:mt-3 sm:mt-2.5 mt-3 "
          value={formData.name}
          onChange={handleChange}
        />
        {error.name && <p className="text-red-500">{error.name}</p>}
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          className="border-b-1 md:border-2  border-zinc-400 px-0.5 md:px-4 py-1 md:py-2 md:rounded-md bg-white  w-full md:mt-4 lg:mt-3 sm:mt-2.5 mt-1.5 "
          value={formData.email}
          onChange={handleChange}
        />
        {error.email && <p className="text-red-500">{error.email}</p>}
        <br />
        <input
          type="text"
          name="phone"
          id=""
          placeholder="Contact No."
          className="border-b-1 md:border-2  border-zinc-400 px-0.5 md:px-4 py-1 md:py-2 md:rounded-md bg-white  w-full md:mt-4 lg:mt-3 sm:mt-2.5 mt-1.5 "
          value={formData.phone}
          onChange={handleChange}
        />
        {error.phone && <p className="text-red-500">{error.phone}</p>}
        <br />
        <select name="about" id="" className={`border-b-1 md:border-2  border-zinc-400 px-0.5 md:px-4 py-1 md:py-2 md:rounded-md bg-white  w-full md:mt-4 lg:mt-3 sm:mt-2.5 mt-1.5  ${formData.about === "" ? "text-zinc-700" : "text-black"}`} value={formData.about}
          onChange={handleChange}
         >
          <option value="" className="">Select Course...</option>
          <option value="Artificial Intelligence">Artificial Intelligence</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Video Editing">Video Editing</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Website Designing">Website Designing</option>
          <option value="Website Development">Website Development</option>
          <option value="Full Stack">Full Stack Development</option>
          <option value="Data Analytics">Data Analytics</option>
        </select>
       
        {error.about && <p className="text-red-500">{error.about}</p>}
        <br />
        <textarea
          name="msg"
          id=""
          placeholder="Your Message"
          rows="8"
          className="border-1 md:border-2  border-zinc-400 px-0.5 md:px-4 py-1 md:py-2 md:rounded-md bg-white  w-full md:mt-4 lg:mt-3 sm:mt-2.5 mt-2 "
          value={formData.msg}
          onChange={handleChange}
        ></textarea>
        {error.msg && <p className="text-red-500">{error.msg}</p>}
        <br />
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#105503] text-white px-8 xl:py-2 sm:py-4 py-2 rounded-md lg:mb-5 sm:mb-8 mb-3 cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
