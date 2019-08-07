import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, btnClass, small, changeViev, href }) => {

  const Tag = href ? "a" : "button";
  const btnSmall = small ? 'btn__small' : '';

  return (
    <Tag
      className={`btn ${btnSmall} ${btnClass}`}
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
  btnSmall: PropTypes.bool,
  changeViev: PropTypes.func,
  href: PropTypes.bool
};

Button.defaultProps = {
  text: 'Więcej',
  btnClass: "",
  small: false,
  href: false
};

export default Button;
