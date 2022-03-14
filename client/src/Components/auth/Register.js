import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../Context/alert/AlertContext";
import AuthContext from "../../Context/auth/authContext";
const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { setAlert } = alertContext;
  const { registerUser, error, clearErrors, isAuthenticate } = authContext;

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuthenticate]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== confirmPassword) {
      setAlert("Passowrds must match", "danger");
    } else {
      console.log("Register Submit");
      registerUser({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
