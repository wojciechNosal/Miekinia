import React from "react";
import PropTypes from "prop-types";
// import "../styles/components/Button.scss";

const Button = ({ text, btnClass, changeViev, href }) => {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      className={`btn ${btnClass}`}
      onClick={changeViev}
      href={href ? href : null}
      target={Tag === "a" ? "_blank" : null}
    >
      {text}
    </Tag>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  btnClass: PropTypes.string,
  changeViev: PropTypes.func
};

Button.defaultProps = {
  btnClass: ""
};

export default Button;
