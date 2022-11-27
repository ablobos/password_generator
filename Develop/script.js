// Assignment Code
var characterLength = 8;
var choiceArr = [];

var specialCharArr = [];
var lowerCaseArr = [];
var upperCaseArr = [];  
var numerArr = [];


var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Test: Generate Button Clicked")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

