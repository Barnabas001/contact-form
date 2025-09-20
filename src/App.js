import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <ContactForm />
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    queryType: false,
    message: false,
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  }

  function validateForm() {
    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email:
        !formData.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      queryType: !formData.queryType,
      message: !formData.message.trim(),
      consent: !formData.consent,
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  }

  function handleSubmit() {
    setSubmitted(true);

    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData);
      // Handle successful submission here
    }
  }

  return (
    <div className="contact-form">
      <h2 className="header">Contact US</h2>

      <div className="name-section">
        <div className="first-name">
          <label className="label-section">First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            style={{
              border: errors.firstName
                ? "1px solid #d73c3c"
                : "1px solid hsl(186, 15%, 59%)",
              backgroundColor: errors.firstName ? "#fef2f2" : "white",
            }}
            className="input-section"
          />
          {errors.firstName && submitted && (
            <p className="error">This field is required</p>
          )}
        </div>

        <div className="last-name">
          <label className="label-section">Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            style={{
              border: errors.lastName
                ? "1px solid #d73c3c"
                : "1px solid hsl(186, 15%, 59%)",
              backgroundColor: errors.lastName ? "#fef2f2" : "white",
            }}
            className="input-section"
          />
          {errors.lastName && submitted && (
            <p className="error">This field is required</p>
          )}
        </div>
      </div>

      <div>
        <label className="label-section">Email Address *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="email@example.com"
          style={{
            border: errors.email
              ? "1px solid #d73c3c"
              : "1px solid hsl(186, 15%, 59%)",
            backgroundColor: errors.email ? "#fef2f2" : "white",
          }}
          className="input-section"
        />
        {errors.email && submitted && (
          <p className="error">Please enter a valid email address</p>
        )}
      </div>

      <div>
        <label className="label-section">Query Type *</label>
        <div className="query-sub-section">
          <label
            style={{
              border:
                formData.queryType === "general"
                  ? "2px solid hsl(169, 82%, 27%)"
                  : errors.queryType && submitted
                  ? "1px solid #d73c3c"
                  : "1px solid hsl(186, 15%, 59%)",
              backgroundColor:
                formData.queryType === "general"
                  ? "hsl(148, 38%, 95%)"
                  : errors.queryType && submitted
                  ? "#fef2f2"
                  : "white",
            }}
            className="query-label"
          >
            <input
              type="radio"
              name="queryType"
              value="general"
              checked={formData.queryType === "general"}
              onChange={(e) => handleInputChange("queryType", e.target.value)}
              className="query-input-section"
            />
            General Enquiry
          </label>
          <label
            style={{
              border:
                formData.queryType === "support"
                  ? "2px solid hsl(169, 82%, 27%)"
                  : errors.queryType && submitted
                  ? "1px solid #d73c3c"
                  : "1px solid hsl(186, 15%, 59%)",
              backgroundColor:
                formData.queryType === "support"
                  ? "hsl(148, 38%, 95%)"
                  : errors.queryType && submitted
                  ? "#fef2f2"
                  : "white",
            }}
            className="query-label"
          >
            <input
              type="radio"
              name="queryType"
              value="support"
              checked={formData.queryType === "support"}
              onChange={(e) => handleInputChange("queryType", e.target.value)}
              className="query-input-section"
            />
            Support Request
          </label>
        </div>
        {errors.queryType && submitted && (
          <p className="error">Please select a query type</p>
        )}
      </div>

      <div>
        <label className="label-section">Message *</label>
        <textarea
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          rows="5"
          style={{
            border: errors.message
              ? "1px solid #d73c3c"
              : "1px solid hsl(186, 15%, 59%)",
            backgroundColor: errors.message ? "#fef2f2" : "white",
          }}
          className="message-input"
        />
        {errors.message && submitted && (
          <p className="error">This field is required</p>
        )}
      </div>

      <div>
        <label className="consent-label">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => handleInputChange("consent", e.target.checked)}
            className="consent-checkbox"
          />
          I consent to being contacted by the team *
        </label>
        {errors.consent && submitted && (
          <p className="error">
            To submit this form, please consent to being contacted
          </p>
        )}
      </div>

      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
}