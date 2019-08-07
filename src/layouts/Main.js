import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import LabPage from '../pages/LabPage';
import BUSPage from '../pages/BUSPage';
import SpinPage from '../pages/SpinPage';
import GalleryPage from '../pages/GalleryPage';
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";

const Main = () => {

  return (
    <main className="main" >
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/laboratory" component={LabPage} />
        <Route path="/BUS_OZE" component={BUSPage} />
        <Route path='/spin' component={SpinPage} />
        <Route path='/gallery' component={GalleryPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/kontakt" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
};

export default Main;
