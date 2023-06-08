var express = require("express");
var app = express();

app.get("/number/:num", function (req, res) {
  let isPrime = true;
  let num = req.params.num;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (num == 1) {
    res.send(`${num} is neither a prime number nor a composite number`);
  } else if (num <= -1) {
    res.send(`${num} is a negative number`);
  } else if (isPrime) {
    res.send(`${num} is a prime number`);
  } else {
    res.send(`${num} is a composite number`);
  }
});
app.listen(3000);
