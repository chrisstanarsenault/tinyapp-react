import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import UrlFullContainer from "./UrlFullContainer";
import ShortUrlCard from "./ShortUrlCard";

import "../styles/App.scss";

function App() {
  const [whichUrlClicked, setWhichUrlClicked] = useState({});

  const getUrlInfo = (e) => {
    console.log(e.target);
  };
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/urls">
            <UrlFullContainer getUrlInfo={getUrlInfo} />
          </Route>
        </Switch>

        <Switch>
          <Route path="/urls/:shortURL" children={<ShortUrlCard />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
