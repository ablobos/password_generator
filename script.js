// Assignment Code
var characterLength = 8;
var choiceArr = [];
//the only menu given
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
  var correctPrompts = getPrompts(); //true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;

  } else {
    passwordTest.value = "";
  }
}

function generatePassword() {
  //genreatePassword based on the prompts
var password = ""; 
for(var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
}
return password;
}

function getPrompts() {
  choiceArr = [];
  
  characterLength= parseInt(prompt("How many characters would you like your password to become? (must be between 8 - 128 characters")); //NaN

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { 
    alert("Only choose between 8 - 128. Please try again.");
    return false; 
}

  if (confirm("Would you like lowercase letters in your password?")); {
  choiceArr = choiceArr.concat(lowerCaseArr);
  } 

  if (confirm("Would you like uppercase letters in your password?")); {
  choiceArr = choiceArr.concat(upperCaseArr); 
  }

  if (confirm("Would you like any special characters in your password?")); {
  choiceArr = choiceArr.concat(specialCharArr); 
}

  if (confirm("Would you like any numbers in your password?")); {
  choiceArr = choiceArr.concat(numberArr); 
}
return true;
}