import React from "react";
import { BrowserRouter } from "react-router-dom";

import TopBar from "./TopBar";
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
    const nav = document.querySelector(".nav");
    if (this.scrollY > 0) {
      nav.classList.add("nav--change-on-scroll");
    } else {
      nav.classList.remove("nav--change-on-scroll");
    }
  }

  handleContactForm = e=>{
    console.log(e);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <TopBar />
          <Navigation />
          <Main form={this.handleContactForm}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
