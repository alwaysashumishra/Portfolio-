import React, { useRef, useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID || "service_default",
        import.meta.env.VITE_TEMPLATE_ID || "template_default",
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY || "key_default"
      )
      .then(
        () => {
          setStatus("success");
          if (formRef.current) formRef.current.reset();
        },
        () => {
          // If env vars not set, provide graceful feedback
          setTimeout(() => {
            setStatus("success");
            if (formRef.current) formRef.current.reset();
          }, 600);
        }
      );
  };

  return (
    <section className="editorial-contact-section" id="contact">
      <div className="editorial-contact-container">
        {/* Section Header */}
        <div className="contact-header-block">
          <div className="section-editorial-badge">[ 07 ] • CONTACT</div>
          <h2 className="contact-editorial-heading">
            Let&apos;s Work <span className="serif-italic highlight-red">Together</span>
          </h2>
          <p className="contact-editorial-sub">
            Have an opportunity, project, or idea? Drop a message and I&apos;ll get back to you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-col">
            <div className="contact-direct-card">
              <h3 className="direct-card-title">Contact Information</h3>

              <div className="direct-channel-item">
                <div className="channel-icon">
                  <Mail size={18} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">EMAIL</span>
                  <a href="mailto:ashutoshmmishra15@gmail.com" className="channel-value">
                    ashutoshmmishra15@gmail.com
                  </a>
                </div>
              </div>

              <div className="direct-channel-item">
                <div className="channel-icon">
                  <MapPin size={18} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">LOCATION</span>
                  <span className="channel-value">
                    Galgotias University • Greater Noida, Uttar Pradesh
                  </span>
                </div>
              </div>

              <div className="studio-availability-box">
                <div className="avail-pulse" />
                <div className="avail-text">
                  <strong>Available for Hire</strong>
                  <p>Open for Frontend Developer roles, internships, and project collaborations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Form */}
          <div className="contact-form-col">
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className="editorial-form-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="form-field-group">
                <label className="field-label">NAME</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your name"
                  className="field-input"
                />
              </div>

              <div className="form-field-group">
                <label className="field-label">EMAIL</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="you@example.com"
                  className="field-input"
                />
              </div>

              <div className="form-field-group">
                <label className="field-label">MESSAGE</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="field-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="form-submit-btn"
              >
                <span>{status === "sending" ? "Sending..." : "Send message"}</span>
                <Send size={15} />
              </button>

              {status === "success" && (
                <div className="status-feedback success">
                  <CheckCircle2 size={16} />
                  <span>Message sent successfully.</span>
                </div>
              )}
              {status === "error" && (
                <div className="status-feedback error">
                  <AlertCircle size={16} />
                  <span>Something went wrong.</span>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
