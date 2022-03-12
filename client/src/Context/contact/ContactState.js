import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initalState = {
    contacts: [
      {
        id: 1,
        name: "Jill Jillier",
        email: "jilly@mail.com",
        phone: "11-1111-11",
        type: "personal",
      },
      {
        id: 2,
        name: "Emma Stone",
        email: "emmy@mail.com",
        phone: "112-11121-11",
        type: "personal",
      },
      {
        id: 3,
        name: "Barry Bear",
        email: "bb@mail.com",
        phone: "11-13131-113",
        type: "professional",
      },
      {
        id: 4,
        name: "Larry JOhnson",
        email: "lj@mail.com",
        phone: "441-1111-44",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initalState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update COntact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
