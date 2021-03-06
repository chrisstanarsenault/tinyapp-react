import React, { useState, useEffect } from "react";
import axios from "axios";

import DeleteButton from "./DeleteButton";

export default function UrlFullContainer() {
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
        <td>
          <a href={`/urls/${keyName}`}>
            <button type="button" className="btn btn-outline-primary">
              Edit
            </button>
          </a>
        </td>
        <td>
          <DeleteButton keyName={keyName} />
        </td>
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
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{urlTableBody}</tbody>
      </table>
    </main>
  );
}
