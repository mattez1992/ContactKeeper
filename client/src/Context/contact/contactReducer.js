import {
  CLEAR_CONTACT,
  GET_CONTACT,
  ADD_CONTACT,
  CONTACT_ERROR,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const contactReducer = (state, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false,
      };
    case UPDATE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c._id === action.payload._id ? action.payload : c
        ),
        loading: false,
      };
    }
    case CLEAR_CONTACT:
      return {
        ...state,
        contacts: null,
        current: null,
        filtered: null,
        error: null,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c._id !== action.payload),
        loading: false,
      };
    case SET_CURRENT: {
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
    case FILTER_CONTACTS: {
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    }
    case CLEAR_FILTER: {
      return {
        ...state,
        filtered: null,
      };
    }
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default contactReducer;
