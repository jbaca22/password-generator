// Assignment code here
//global variables
var lowerCase = ;
var upperCase = ;
var specialCharacter = ;
var numberCharacter = ;

var generatePassword = function() {
  //determines how long the password will be
  var passwordLengthPrompt = window.prompt("How long would you like your password to be?")

  if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    //executes other questions regarding character types
    Confirm();
  }

  else {
    window.alert("Please enter a number between 8 and 128 that will determine the length of the password")
    generatePassword();
  }
}

//function used to determine if user wants to use use certain characters
var Confirm = function() {
  var lowerCaseConfirm = confirm ("Would you like to use lower case characters in your password? Click Ok for yes or Cancel for no")
  var upperCaseConfirm = confirm ("Would you like to use upper case characters in your password? Click Ok for yes or Cancel for no")
  var specialCharacterConfirm = confirm ("Would you like to use special characters in your password? Click Ok for yes or Cancel for no")
  var numberConfirm = confirm ("Would you like to use numbers in your password? Click Ok for yes or Cancel for no")

  if (lowerCaseConfirm == false && upperCaseConfirm == false && specialCharacterConfirm == false && numberConfirm == false) {
    window.alert("Please select at least one option in order to generate a password")
    Confirm();
  }

  else {
  }
}

var Randomize = function () {

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
