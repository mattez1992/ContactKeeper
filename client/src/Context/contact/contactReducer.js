import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case UPDATE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c
        ),
      };
    }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case SET_CURRENT: {
      console.log("Set current");
      return {
        ...state,
        current: action.payload,
      };
    }
    case CLEAR_CURRENT: {
      return {
        ...state,
        current: null,
      };
    }

    default:
      return state;
  }
};
export default contactReducer;
