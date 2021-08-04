const express = require("express");
const { stringify } = require("querystring");

const app = express();
const port = 3000;

app.use(express.json());

function convert(source, sourceAmount, target) {
  if (source == "JPY" && target == "IDR") {
    return sourceAmount * 131.81;
  } else if (source == "MYR" && target == "IDR") {
    return sourceAmount * 3424;
  } else if (source == "SGD" && target == "IDR") {
    return sourceAmount * 10680;
  } else if (source != "USD" && target == "IDR") {
    return sourceAmount * 14450;
  } else if (source == "IDR" && target == "USD") {
    return sourceAmount * 0.000069;
  } else if (source == "IDR" && target == "SGD") {
    return sourceAmount * 0.000094;
  } else if (source == "IDR" && target == "MYR") {
    return sourceAmount * 0.00029;
  } else if (source == "IDR" && target == "JPY") {
    return sourceAmount * 0.0076;
  } else if (source == "JPY" && target == "MYR") {
    return sourceAmount * 0.039;
  } else if (source == "JPY" && target == "SGD") {
    return sourceAmount * 0.012;
  } else if (source == "JPY" && target == "USD") {
    return sourceAmount * 0.0091;
  } else if (source == "MYR" && target == "JPY") {
    return sourceAmount * 25.96;
  } else if (source == "MYR" && target == "SGD") {
    return sourceAmount * 0.32;
  } else if (source == "MYR" && target == "USD") {
    return sourceAmount * 0.24;
  } else if (source == "SGD" && target == "JPY") {
    return sourceAmount * 81.12;
  } else if (source == "SGD" && target == "MYR") {
    return sourceAmount * 3.12;
  } else if (source == "SGD" && target == "USD") {
    return sourceAmount * 0, 74;
  } else if (source == "USD" && target == "JPY") {
    return sourceAmount * 109.63;
  } else if (source == "USD" && target == "MYR") {
    return sourceAmount * 4.22;
  } else if (source == "USD" && target == "SGD") {
    return sourceAmount * 1.35;
  } else {
    return console.log(
      "Error! please use capslock and abbreviation of the currencies"
    );
  }
}

app.post("/convert", (req, res) => {
  let sourceCurrency = req.body.sourceCurrency;
  let sourceAmount = req.body.sourceAmount;
  let targetCurrency = req.body.targetCurrency;
  const targetAmount = convert(sourceCurrency, sourceAmount, targetCurrency);

  res.json({
    sourceCurrency: sourceCurrency,
    sourceAmount: sourceAmount,
    targetCurrency: targetCurrency,
    targetAmount: targetAmount,
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
