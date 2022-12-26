require("dotenv").config();

require("./DL/db").myConnect();
const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3800;

app.use(require("cors")());
app.use(express.json());

app.use("/", express.static("public"));
app.use("/api", require("./Routs/mainRouter"));

app.listen(PORT, () => console.log("SERVER : connection success!"));
