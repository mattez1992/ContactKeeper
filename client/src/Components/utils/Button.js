import React from "react";
import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

Button.propType = {
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  className: "btn btn-primary",
};
export default Button;
