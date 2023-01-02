require("dotenv").config();

require("./DL/db").myConnect();
const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3800;

app.use(require("cors")());
app.use(express.json());

app.use("/", express.static("public"));
app.use("/api", require("./Routs/mainRouter"));
app.get("/*", (req,res)=>{
res.status(404).sendFile("/opt/render/project/src/public/index.html")
})

app.listen(PORT, () => console.log("SERVER : connection success!"));
