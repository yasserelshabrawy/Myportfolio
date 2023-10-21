import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RxArrowRight } from "react-icons/rx";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wuasmms",
        "template_l5oehbs",
        form.current,
        "BBfJW2eG0dtigckRz"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear the input fields after successful submission
          setName("");
          setEmail("");
          setMessage("");
          // Display a toast notification
          toast.success("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let’s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let’s talk
              </span>
              <RxArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-2xl" />
            </button>
          </motion.form>
        </div>
      </div>
      {/* Add the ToastContainer component to display notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Contact;
