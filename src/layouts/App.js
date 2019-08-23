import React from "react";
import { BrowserRouter } from "react-router-dom";

import Footer from "./Footer";
import Navigation from "./Navigation";
import Main from "./Main";

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {

    const nav = document.querySelector('.nav');
    const boxImg = nav.querySelector('.nav__img-box');

    if (this.scrollY > 0) {
      nav.classList.add(`nav--change-on-scroll`);
      boxImg.classList.add('nav__img-box--change-on-scroll');
    } else {
      nav.classList.remove("nav--change-on-scroll");
      boxImg.classList.remove('nav__img-box--change-on-scroll');
    }
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Navigation />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
