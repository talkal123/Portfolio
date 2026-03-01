import React, { useRef, useEffect, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ScrollContext } from '../../Helpers/ScrollContext';

const ContactForm = () => {
  const { contactRef } = useContext(ScrollContext);


  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("freelance");
  const [message, setMessage] = useState("");

  const onClick = async (e) => {
    e.preventDefault();

    if (!email || !fullName || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      console.log("SUCCESS!");
      alert("Message sent successfully! 🚀");

      setFullName("");
      setEmail("");
      setInquiryType("freelance");
      setMessage("");
    } catch (error) {
      console.error("FAILED...", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto p-5">
      <div ref={contactRef} className="bg-white border border-gray-200 rounded-2xl p-8">
        <form ref={form} className="space-y-6" onSubmit={onClick}>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Inquiry Type</label>
            <select
              name="inquiryType"
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black transition"
            >
              <option value="freelance">Freelance</option>
              <option value="job">Job Offer</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              rows="3"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message..."
              className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-xl transition ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white hover:opacity-90"}`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
