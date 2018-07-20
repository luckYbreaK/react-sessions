const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

const users = [];

//MiddleWare
app.use(bodyParser.json());
app.use(
  session({
    secret: "scoobySnacks",
    saveUninitialized: false,
    resave: false
  })
);

app.post("/api/login", (req, res) => {
  console.log(req.session);
  const { role } = req.body;
  req.session.user = {
    id: req.session.id,
    role: role
  };
  console.log(req.session);
});

const port = 3010;
app.listen(port, () => console.log(`Magic Happens on Port:${port}`));
