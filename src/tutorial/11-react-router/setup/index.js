import React from "react";
// react router
import { BrowserRouter, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/people">
          <People />
        </Route>

        {/* path="*" always matches. We keep it at the end */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default ReactRouterSetup;
