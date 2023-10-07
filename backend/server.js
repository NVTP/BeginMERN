const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
  //   res.send("It's working!")
  res.send({ firstName: "Kittiwat", lastName: "Sruppahttaranan" });
});

app.listen(3001, () => {
  console.log("app listening on port 3001");
});
