import React, { useState } from "react";
import axios from "axios";

import "../styles/App.scss";

function App() {
  const [urls, setUrls] = useState({});
  let getApi = async () => {
    const response = await axios.get("http://localhost:8080/urls");
    setUrls(response.data.module.urlDatabase);
  };
  return <div className="App"></div>;
}

export default App;
