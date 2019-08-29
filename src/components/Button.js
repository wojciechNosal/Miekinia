import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, btnClass, small, changeViev, href }) => {

  const Tag = href ? "a" : "button";
  const btnSmall = small ? 'btn__small' : '';

  return (
    <Tag
      className={`btn ${btnSmall} ${btnClass}`}
      onClick={changeViev}
      href={href ? href : null}
      target={Tag === "a" ? "_blank" : null}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  btnClass: PropTypes.string,
  btnSmall: PropTypes.bool,
  changeViev: PropTypes.func,
  href: PropTypes.string
};

Button.defaultProps = {
  children: 'Zobacz więcej',
  btnClass: "",
  small: false,
};

export default Button;
