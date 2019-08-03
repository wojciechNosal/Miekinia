import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// import "../styles/components/NavItem.scss";

const NavItem = ({ name, path, exact }) => {
  return (
    <NavLink className="nav__link" to={path} exact={exact ? exact : false}>
      {name}
    </NavLink>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

export default NavItem;
