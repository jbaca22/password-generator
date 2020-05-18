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
    //if yes, other questions commence within Confirm
    Confirm();
    //loops to create as many characters as desired by the user in passwordlengthprompt
    for (var i = 0; i<passwordLengthPrompt; i++) {
      var randomizedNumbers;
      var randomUpperCase;
      var randomSpecialCharacter;
      var randomNumberCharacter;
      //calls randomized numbers to the arrays specified in Confirm Function
      randomizedNumbers = parseInt(Math.floor(Math.random()*masterArray.length));
      randomUpperCase =
      randomSpecialCharacter = 
      randomNumberCharacter = 

      console.log(randomizedNumbers)
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

  else {
    var lowerCase = lowerCaseConfirm
    var upperCase = upperCaseConfirm
    var specialCharacter = specialCharacterConfirm
    var numberCharacter = numberConfirm

    console.log(lowerCase,upperCase,specialCharacter,numberCharacter)

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
    console.log(masterArray)
  }
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
