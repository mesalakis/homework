const express = require("express");
const { stringify } = require("querystring");

const app = express();
const port = 3000;

// // ** exercise 10
// app.get("/profile", (req, res) => {
//     const profile = [
//         {
//             "name": "Sandra",
//             "height": 1.57,
//             "weight": 49,
//         }];

//     res.json(profile);
// });

// app.listen(port, () => {
//     console.log(`app listening at http://localhost:${port}`);
// });

// ** execercise 11

// function CalculateBmi(weight, height) {
//   return weight / height ** 2;
// }

// function StatusBmi(weight, height) {
//   let resultBMI = weight / height ** 2;

//   if (resultBMI < 18.5) {
//     return "You're Underweight";
//   } else if (18.5 <= resultBMI && resultBMI < 25) {
//     return "Normal BMI";
//   } else if (resultBMI >= 25 && resultBMI < 30) {
//     return "You're Overweight";
//   } else {
//     return "Obese";
//   }
// }

// app.get("/profile", (req, res) => {
//   const profile = [{ name: "Aku", weight: 49, height: 1.58 }];

//   for (data of profile) {
//     let cekBmi = CalculateBmi(data.weight, data.height);
//     let status = StatusBmi(data.weight, data.height);
//     data.bmi = cekBmi;
//     data.category = status;
//   }

//   res.json(profile);
// });

// app.listen(port, () => {
//   console.log(`app listening at http://localhost:${port}`);
// });

// **excercise 12

// pokoknya nanti tuh ambil data dari query string baru diitung pake functionnya
// function BMI(berat, tinggi) {
//     return berat / (tinggi * tinggi);
//   }

//   function check(data) {
//     if (data < 18.5) {
//       return "oke";
//     } else if (data >= 18.5 && data < 24.9) {
//       return "mantap";
//     } else if (data > 25 && data < 29.9) {
//       return "besar";
//     } else {
//       return "obes";
//     }
//   }

//   app.get("/bmi", (req, res) => {
//     let name = req.query.name;
//     let berat = req.query.berat;
//     let tinggi = req.query.tinggi;
//     const bmi = BMI(berat, tinggi);
//     const kategori = check(bmi);

//     res.json({
//       name: name,
//       berat: berat,
//       tinggi: tinggi,
//       bmi: bmi,
//       kategori: kategori,
//     });
//   });

//   app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
//   });

// **excercise 13
// app.use(express.json());

// function resultBMI(weight, height) {
//   return weight / height ** 2;
// }

// function Check(bmi) {
//   if (bmi < 18.5) {
//     return "You're Underweight";
//   } else if (18.5 <= bmi && bmi < 25) {
//     return "Normal BMI";
//   } else if (bmi >= 25 && bmi < 30) {
//     return "You're Overweight";
//   } else {
//     return "Obese";
//   }
// }

// app.post("/bmi", (req, res) => {
//   let name = req.body.name;
//   let weight = req.body.weight;
//   let height = req.body.height;
//   const bmi = resultBMI(weight, height);
//   const category = Check(bmi);

//   res.json({
//     name: name,
//     height: height,
//     weight: weight,
//     bmi: bmi,
//     category: category,
//   });
// });

// app.listen(port, () => {
//   console.log(`app listening at http://localhost:${port}`);
// });
