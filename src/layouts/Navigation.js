import React from "react";
import "../styles/layouts/Navigation.scss";
import NavItem from "../components/NavItem";

import logo from "../assets/img/logo-miekinia.png";

const list = [
  { name: "Centrum", path: "/", exact: true },
  { name: "Aktualności", path: "/news" },
  { name: "Laboratorium", path: "/laboratory" },
  { name: "BUS OZE", path: "/BUS_OZE" },
  { name: "Spin", path: "/spin" },
  { name: "Galeria", path: "/galery" },
  { name: "Nasz zespół", path: "/team" },
  { name: "Kontakt", path: "/kontakt" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name} className="nav__item">
      <NavItem {...item} />
    </li>
  ));

  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={logo} alt="Centrum Miękinia" />
      </div>
      <ul className="nav__list">{menu}</ul>
    </nav>
  );
};

export default Navigation;
