const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

const urlDatabase = require("./urlDatabase");

const generateRandomString = () => {
  let lettersNumbers =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomID = "";

  for (let i = 0; i < 6; i++) {
    randomID += lettersNumbers.charAt(
      Math.floor(Math.random() * lettersNumbers.length)
    );
  }

  return randomID;
};

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/urls", (req, res) => {
  res.json(urlDatabase);
});

app.post("/urls", (req, res) => {
  let urlID = generateRandomString();
  urlDatabase.module.urlDatabase[urlID] = req.body.longURL;
  res.redirect(`http://localhost:3000/urls/${urlID}`);
});

app.get("/urls/:shortURL", (req, res) => {
  const shortURL = req.params.shortURL;
  const longURL = urlDatabase.module.urlDatabase[req.params.shortURL];
  const urlParams = {
    shortURL,
    longURL,
  };
  res.send(urlParams);
});

app.post("/urls/:shortURL/delete", (req, res) => {
  delete urlDatabase.module.urlDatabase[req.params.shortURL];
  res.redirect("http://localhost:3000/urls");
});

app.get("/u/:shortURL", (req, res) => {
  const longURL = urlDatabase.module.urlDatabase[req.params.shortURL];
  res.redirect(longURL);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
