// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());
var numbers = [1,2,3,4,5,6,7,8,9,0];
var special = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var password = [];
var choices;
function writePassword(){

  var length = prompt("Enter a password length between 8-128");

  if (length < 8 || length > 128) {
      alert("You must enter a length between 8-128")
  } else {
      var lowerChoice = confirm("Include lowercase characters in your password?");
      var upperChoice = confirm("Include uppercase characters in your password?");
      var specialChoice = confirm("Include special characters in your password?");
      var numberChoice = confirm("Include number characters in your password?");
  }

  if (!lowerChoice && !upperChoice && !specialChoice && !numberChoice) {

    alert("You must choose a criteria!");

} else if (lowerChoice && upperChoice && specialChoice && numberChoice){

    choices = lowerCase.concat(upperCase, special, numbers)

} else if (lowerChoice && upperChoice && specialChoice){

    choices = lowerCase.concat(upperCase, special)

} else if (lowerChoice && upperChoice && numberChoice){

    choices = lowerCase.concat(upperCase, numbers)

} else if (lowerChoice && numberChoice && specialChoice){

    choices = lowerCase.concat(numbers, upperCase)

} else if (upperChoice && numberChoice && specialChoice){

    choices = upperCase.concat(numbers, special)

} else if (upperChoice && numberChoice){

    choices = upperCase.concat(numbers)

} else if (upperChoice && specialChoice){

    choices = upperCase.concat(special)

} else if (upperChoice && lowerChoice){

    choices = upperCase.concat(lowerCase)

} else if (lowerChoice && numberChoice){

    choices = lowerCase.concat(numbers)

} else if (lowerChoice && specialChoice){

    choices = lowerCase.concat(special)

} else if (specialChoice && numberChoice){

    choices = special.concat(numbers)

} else if (specialChoice){

    choices = special;

} else if (lowerChoice){

    choices = lowerCase;

} else if (upperChoice){

    choices = upperCase;

} else if (numberChoice){

  choices = numbers;

}

  for (i=0; i < length; i++){
  character = choices[Math.round(Math.random(0, choices.length) * choices.length)];
  password.push(character);
  };
  console.log(password)

  var passwordText = document.querySelector("#password");
  finalpassword = password.join('');
  passwordText.value = finalpassword;
};
  
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);