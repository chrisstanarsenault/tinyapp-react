import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UrlFullContainer(props) {
  const [urls, setUrls] = useState({});

  const getDatabase = async () => {
    const response = await axios.get("http://localhost:8080/urls");
    setUrls(response.data.module.urlDatabase);
  };

  useEffect(() => {
    getDatabase();
  }, []);

  const urlTableBody = Object.keys(urls).map((keyName, keyIndex) => {
    return (
      <tr key={`url-${keyIndex}`}>
        <td>{keyName}</td>
        <td>{urls[keyName]}</td>
      </tr>
    );
  });

  return (
    <main style={{ margin: "1em" }}>
      <h3>My URLs</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Short URL</th>
            <th scope="col">Long URL</th>
          </tr>
        </thead>
        <tbody>{urlTableBody}</tbody>
      </table>
    </main>
  );
}
