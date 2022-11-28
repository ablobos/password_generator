// Assignment Code
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


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
  //genreatePassword based on the prompts
}

function getPrompts() {
  characterLength= parseIntprompt("How many characters would you like your password to become? (must be between 8 - 128 characters");

  if(isNaN(characterLength) ││ characterLength < 8 ││ characterLength > 128)
    alert(Please only choose between 8 - 128 DOMStringList. Please try again.);
    return false; 
}

confirm("Would you like lowercase letters in your password?");
  choiceArr = choiceArr.concat(lowerCaseArr); 
