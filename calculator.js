const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.listen(3000, function () {
  console.log("Server started.");
});

app.post("/bmi", function (req, res) {
    
  var w= parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);
  var result = w/(h*h);
  res.send("<em>Your BMI is </em>" + result);

});
