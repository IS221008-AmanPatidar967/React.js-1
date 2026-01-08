import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">Connect With Us</h2>

        <div className="contact-wrapper">
          {/* LEFT SIDE */}
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Visit Us</h4>
                <p>
                  yog Temple <br />
                  Infront of Force Academy , Indore City
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <p>
                  hello@yogtemple.com <br />
                  support@yogtemple.com
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>
                  +1 (555) 123-4567 <br />
                  Mon-Fri, 9am-6pm EST
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">💬</div>
              <div className="info-text">
                <h4>Live Chat</h4>
                <p>Available 24/7 for urgent support</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">t</a>
              <a href="#" className="social-link">i</a>
              <a href="#" className="social-link">l</a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-form">
            {!submitted ? (
              <>
                <h3
                  style={{
                    color: "var(--primary)",
                    fontSize: "1.8rem",
                    marginBottom: "2rem",
                  }}
                >
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      onChange={handleChange}
                      onInvalid={(e) => e.target.setCustomValidity("Enter your name")}
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      onChange={handleChange}
                      onInvalid={(e) => e.target.setCustomValidity("Enter your email")}
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      onChange={handleChange}
                      onInvalid={(e) => e.target.setCustomValidity("Enter subject")}
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "2rem",
                  background: "#fff",
                  borderRadius: "18px",
                  border: "1px solid rgba(45, 90, 135, 0.25)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                  animation: "fadeIn 0.4s ease",
                }}
              >
                {/* THANK YOU MESSAGE */}
                <div
                  style={{
                    background: "var(--primary)",
                    color: "#fff",
                    padding: "0.9rem 1rem",
                    borderRadius: "12px",
                    marginBottom: "1.5rem",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Thank you for visiting us, we will reach you soon 😊
                </div>

                <h3
                  style={{
                    color: "var(--primary)",
                    fontSize: "1.6rem",
                    marginBottom: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Submitted Details
                </h3>

                <p style={{ fontSize: "1rem", margin: "0.5rem 0", color: "#555" }}>
                  <strong style={{ color: "var(--primary)" }}>Name:</strong> {data.name}
                </p>

                <p style={{ fontSize: "1rem", margin: "0.5rem 0", color: "#555" }}>
                  <strong style={{ color: "var(--primary)" }}>Email:</strong> {data.email}
                </p>

                <p style={{ fontSize: "1rem", margin: "0.5rem 0", color: "#555" }}>
                  <strong style={{ color: "var(--primary)" }}>Subject:</strong> {data.subject}
                </p>

                <p style={{ fontSize: "1rem", margin: "0.5rem 0", color: "#555" }}>
                  <strong style={{ color: "var(--primary)" }}>Message:</strong> {data.message}
                </p>

                {/* RESET BUTTON */}
                <button
                  onClick={handleReset}
                  style={{
                    marginTop: "1.5rem",
                    padding: "0.7rem 1.5rem",
                    background: "var(--primary)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: 500,
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = 0.8}
                  onMouseOut={(e) => e.currentTarget.style.opacity = 1}
                >
                  Reset Form
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* animation injector */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default Contact;
