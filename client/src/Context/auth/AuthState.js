import React, { useReducer } from "react";
import axios from "axios";
import authReducer from "./authReducer";
import AuthContext from "./authContext";
import setAuthToken from "../../Components/utils/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";
function AuthState(props) {
  const initalState = {
    token: localStorage.getItem("token"),
    isAuthenticate: null,
    loading: true,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(authReducer, initalState);

  // Load User check wich user is logged in
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  // Register Usersign up and get a token
  const registerUser = async (formData) => {
    // with a  post request we need a content header and with axios it's is done witha  config object.
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      });
    }
  };
  // Login User Logg in get a token
  const loginUser = async (formData) => {
    // with a  post request we need a content header and with axios it's is done witha  config object.
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/auth", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg,
      });
    }
  };
  // logout destory the token
  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  // Clear errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };
  return (
    <AuthContext.Provider
      // alawys add new props and funcitons here if they should be usable outside of this object.
      value={{
        token: state.token,
        isAuthenticate: state.isAuthenticate,
        loading: state.loading,
        user: state.user,
        error: state.error,
        registerUser,
        clearErrors,
        loadUser,
        loginUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
