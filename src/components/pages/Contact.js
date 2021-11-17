import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // Based on the input type, we set the state of either name, message and email
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // First we check to see if the email is not valid or if the name and message is empty
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    } else if (!message) {
      setErrorMessage("Message is required");
      return;
    } else if (!name) {
      setErrorMessage("Name is required");
      return;
    }
    // If everything goes according to plan, clear out
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <h1>Contact</h1>
      <form className="form">
        <div class="mt-5">
          <label htmlFor="name">Your Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Please enter your name"
          />
        </div>
        <div class="mt-5">
          <label htmlFor="email">Email Address:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Please enter your email"
          />
        </div>
        <div class="mt-5">
          <label htmlFor="message">Message:</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Please enter the message"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div class="mt-5 mb-5">
          <button
            className="btn btn-outline-dark"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
