const express = require("express");
const app = express();
const cors = require("cors");
const person = require("./app/person");
// const person = require("");

app.use(cors());

// const getData = () => {
//   var name = "pass";
//   var aa = "xx";
//   console.log("aa ",aa);
// };

app.get("/", function (req, res) {
  //   res.send("It's working!")
  var x = person.getProfile();
  console.log(" x ", x);
  res.send(x);
});

app.listen(8080, () => {
  console.log("app listening on port 8080");
});
