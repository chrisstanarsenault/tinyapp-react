import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import EditForm from "./EditForm";

export default function ShortUrlCard() {
  const [urlData, setUrlData] = useState({});
  let { shortURL } = useParams();

  useEffect(() => {
    async function getShortURLdata(shortURL) {
      const response = await axios.get(
        `http://localhost:8080/urls/${shortURL}`
      );
      setUrlData(response.data);
    }
    getShortURLdata(shortURL);
  }, [shortURL]);

  if (Object.keys(urlData).length !== 0) {
    return (
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body">
          <h5 className="card-title">TinyURL for: {urlData.longURL}</h5>
          <p className="card-text">
            Short URL: <a href={`/u/${urlData.shortURL}`}>{shortURL}</a>
          </p>
        </div>
        <div
          className="card-footer text-muted"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <EditForm shortURL={shortURL} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body">
          <h5 className="card-title">Loading...</h5>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    );
  }
}
