import React, { useContext, useEffect } from "react";
import AuthContext from "../../Context/auth/authContext";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
export const Home = () => {
  const authConte = useContext(AuthContext);
  useEffect(() => {
    authConte.loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};
