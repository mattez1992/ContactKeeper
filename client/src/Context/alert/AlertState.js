import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import AlertReducer from "./alertReducer";
import AlertContext from "./AlertContext";
import { SET_ALERT, REMOVE_ALERT } from "../types";

function AlertState(props) {
  const initalState = {
    alerts: [],
  };
  const [state, dispatch] = useReducer(AlertReducer, initalState);

  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
  return (
    <AlertContext.Provider
      // alawys add new props and funcitons here if they should be usable outside of this object.
      value={{
        alerts: state.alerts,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;
