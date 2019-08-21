import React from "react";

import NavItem from "../components/NavItem";

import logo from "../assets/img/logo-miekinia-light.png";

const list = [
  { name: "Centrum", path: "/", exact: true },
  { name: "Aktualności", path: "/news" },
  { name: "Laboratorium", path: "/laboratory" },
  { name: "BUS OZE", path: "/BUS_OZE" },
  { name: "Spin", path: "/spin" },
  { name: "Galeria", path: "/gallery" },
  { name: "Nasz zespół", path: "/team" },
  { name: "Kontakt", path: "/kontakt" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name} className="nav__item">
      <NavItem {...item} />
    </li>
  ));

  const handelSmallScreenNav = () => {
    const navList = document.querySelector('.nav__list');
    const hamburger = document.querySelector('.hamburger');
    navList.classList.toggle('nav__list--fadeInNav');

    navList.childNodes.forEach((item, inx) => {
      setTimeout(() => item.classList.toggle('nav__item--fadeIn'), (inx + 1) * 100);
    })

    hamburger.classList.toggle('hamburger--close');
  }

  return (
    <nav className="nav">
      <div className="nav__logo-container">
        <img src={logo} alt="Centrum Miękinia" className='nav__logo-img' />
      </div>
      <ul className="nav__list">{menu}</ul>
      <div className="hamburger" onClick={handelSmallScreenNav}>
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar"></div>
        <div className="hamburger__bar"></div>
      </div>
    </nav>
  );
};

export default Navigation;
