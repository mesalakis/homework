// let age = 17;
// const fingers = 10;

// console.log(age, fingers);

// ** array
// let CovidCase = [70, 62, 80, 20, 16, 87, 90]
// console.log(CovidCase);


// // ** function

// function CalculateBmi (weight, height) {
//     return weight / height**2;
// }

// function StatusBmi (weight, height){
//     let resultBMI = weight / height**2;

//     if (resultBMI < 18.5) { 
//         return "You're Underweight";
//     } 
//     else if (18.5 <= resultBMI && resultBMI < 25) { 
//         return "Normal BMI";
//     } 
//     else if (resultBMI >= 25 && resultBMI < 30) {
//         return "You're Overweight";
//     } 
// else {
//     return "Obese";
// } 
// }

// let family = [
//     {
//         name: "Bunda", 
//         weight: 60,
//         height: 1.55,
//     },
//     {   name: "Ayah",
//         weight: 65,
//         height: 1.7,
//     },     
//     {   name: "Aku",
//         weight: 80,
//         height: 1.58,
//     },
//     {
//         name: "Adik",
//         weight: 47,
//         height: 1.56, 
//     },

//     {
//         name: "Kakak",
//         weight: 48,
//         height: 1.6,
//     },
// ];

//      for (data of family) {
//          let cekBmi = CalculateBmi(data.weight, data.height);
//          let status = StatusBmi(data.weight, data.height);
//          data.bmi = cekBmi;
//          data.category = status;
//     }
//     console.log(JSON.stringify(family));

   
        
    

// ** if... else... else if...
// const name = "Sandra";
// let height = 1.57;
// let weight = 49;
// let BMI = 32;

// if (BMI < 18.5) {
//     console.log("You're Underweight");
// } 
// else if (18.5 <= BMI && BMI < 25) { 
//     console.log("Normal BMI");
// } 
// else if (BMI >= 25 && BMI < 30) {
//     console.log("You're Overweight");
// } 
// else {
//     console.log("Obese");
// }

// console.log(name, BMI);



// **object

// let biodata = {
//     name: "Sandra",
//     weight: 49,
//     height: 1.57
// }

// let BMI = (biodata.weight / biodata.height**2);

// if (BMI < 18.5) {
//     console.log("You're Underweight");
// } 
// else if (18.5 <= BMI && BMI < 25) { 
//     console.log("Normal BMI");
// } 
// else if (BMI >= 25 && BMI < 30) {
//     console.log("You're Overweight");
// } 
// else {
//     console.log("Obese");
// }

// console.log(biodata.name, BMI);









// // ** peer 

// // ** function ** palindrome checking

// // to check whether or not the string is palindrome 
// const readline = require ('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// function checkPalindrome(string) {

//     // find the length of a string
//     const panjang = string.length;

//     // loop through half of the string biar ga diperiksa 2x
//     for (let i = 0; i < panjang / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[panjang - 1 - i]) {
//             return "It is not a palindrome";
//         }
//     }
//     return "It is a palindrome";
// }

// // bagian input
// rl.question("Enter a String: ", (input) => {
//     console.log (checkPalindrome(input));
//     rl.close();
//   });




