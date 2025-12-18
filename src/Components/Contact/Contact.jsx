import React, { useRef, useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
  <section className="contact-section">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2>Let’s work together</h2>
        <p>
          Have an opportunity, project, or idea?  
          Drop a message and I’ll get back to you.
        </p>
      </motion.div>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="input-group">
          <label>Name</label>
          <input name="from_name" required placeholder="Your name" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="from_email"
            required
            placeholder="you@example.com"
          />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Tell me about your project or opportunity..."
          />
        </div>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="success-msg">Message sent successfully ✅</p>
        )}
        {status === "error" && (
          <p className="error-msg">Something went wrong ❌</p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
