import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../Context/contact/contactContext";
import Button from "../utils/Button";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  // deconstrucct the conactContext
  const { current } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });
  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const onClearCurrent = (e) => {
    e.preventDefault();
    contactContext.clearCurrentContact();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      contactContext.addContact(contact);
    } else {
      contactContext.updateContact(contact);
    }
    contactContext.clearCurrentContact();
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current !== null ? "Update Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={onChange}
        required
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={phone}
        onChange={onChange}
        required
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />
      Professional{" "}
      <div>
        <Button
          className="btn btn-primary btn-block"
          type="submit"
          value={current === null ? "Add Contact" : "Update Contact"}
          onClick={onSubmit}
        />
        {current !== null ? (
          <Button
            className="btn btn-dark btn-block my-1"
            value="Clear Form"
            onClick={onClearCurrent}
          />
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
