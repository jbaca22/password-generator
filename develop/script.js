// Assignment code here
//global variables

var masterArray =[]
var lowerCaseLettersArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCaseLettersArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberCharacterArray = ["1","2","3","4","5","6","7","8","9","0"]
var specialCharacterArray = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",]

var lowerCase 
var upperCase 
var specialCharacter 
var numberCharacter 

var generatePassword = function() {
  //determines how long the password will be
  var passwordLengthPrompt = window.prompt("How long would you like your password to be?")

  if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    Confirm();
    Randomize();

    for (var i = 0; i<passwordLengthPrompt; i++) {
      var randomLowerCase;
      var randomUpperCase;
      var randomSpecialCharacter;
      var randomNumberCharacter;

      randomLowerCase = randomNumber(0,25)
      randomUpperCase = randomNumber(0,25)
    }
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
}

var Randomize = function () {
  var lowerCase = function Confirm(lowerCaseConfirm){

  };
  var upperCase = function Confirm(upperCaseConfirm){

  };
  var specialCharacter = function Confirm(specialCharacterConfirm){

  };
  var numberCharacter = function Confirm(numberConfirm){

  };

  if (lowerCase == true) {
    masterArray.push(lowerCaseLettersArray)
  }

  if (upperCase == true) {
    masterArray.push(upperCaseLettersArray)
  }

  if (specialCharacter == true) {
    masterArray.push(specialCharacterArray)
  }

  if (numberCharacter == true) {
    masterArray.push(numberCharacterArray)
  }
}

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
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
