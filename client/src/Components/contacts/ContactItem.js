import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../Context/contact/contactContext";

function ContactItem({ contact }) {
  const { id, name, email, phone, type } = contact;
  const contactContext = useContext(ContactContext);
  const onDelete = (e) => {
    contactContext.deleteContact(id);
    contactContext.clearCurrentContact();
  };
  const onEdit = (e) => {
    console.log("on edit");
    contactContext.setCurrentContact(contact);
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {/* This will capitalise the irst letter of type */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" />
            &nbsp;{email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" />
            &nbsp;{phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
