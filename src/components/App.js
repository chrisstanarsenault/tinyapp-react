import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import UrlFullContainer from "./UrlFullContainer";
import ShortUrlCard from "./ShortUrlCard";
import NewItemForm from "./NewItemForm";

import "../styles/App.scss";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/urls">
            <UrlFullContainer />
          </Route>
          <Route exact path="/urls/new">
            <NewItemForm />
          </Route>
          <Route path="/urls/:shortURL">
            <ShortUrlCard />
          </Route>{" "}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
