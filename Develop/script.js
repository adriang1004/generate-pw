// Assignment Code
var generateBtn = document.querySelector("#generate");
// var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
// var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
// var numericChars = "0123456789";
// var specialChars = "!@#$%^&*()-_=+,.<>/?";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = getPasswordLength();
  var characterTypes = getCharacterTypes();
  var allChars = "";
  
  if (characterTypes.includeLowercase) {
    allChars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (characterTypes.includeUppercase) {
    allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (characterTypes.includeNumeric) {
    allChars += "0123456789";
  }
  if (characterTypes.includeSpecial) {
    allChars += "!@#$%^&*()-_=+,.<>/?";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

function getPasswordLength() {
    var passwordLength;
    do {
      passwordLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));
    } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
  
    return passwordLength;
  }

function getCharacterTypes() {
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Ensures at least one type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return getCharacterTypes(); 
  }

  return {
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
}




getPasswordLength();
getCharacterTypes();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

















// // Function to generate the password based on user criteria
// function generatePassword() {
//   // Define character sets for lowercase, uppercase, numeric, and special characters
//   var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//   var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var numericChars = "0123456789";
//   var specialChars = "!@#$%^&*()-_=+[]{}|;:'\"<>,.?/";

//   // Prompt for password length
//   var passwordLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

//   // Validate the password length
//   if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
//     alert("Password length must be between 8 and 128 characters.");
//     return ""; // Return an empty string
//   }

//   // Confirm which character types to include
//   var includeLowercase = confirm("Include lowercase characters?");
//   var includeUppercase = confirm("Include uppercase characters?");
//   var includeNumeric = confirm("Include numeric characters?");
//   var includeSpecial = confirm("Include special characters?");

//   // Validate that at least one character type is selected
//   if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
//     alert("At least one character type must be selected.");
//     return ""; // Return an empty string
//   }

//   // Combine character sets based on user selections
//   var allChars = "";
//   if (includeLowercase) {
//     allChars += lowercaseChars;
//   }
//   if (includeUppercase) {
//     allChars += uppercaseChars;
//   }
//   if (includeNumeric) {
//     allChars += numericChars;
//   }
//   if (includeSpecial) {
//     allChars += specialChars;
//   }

//   // Generate the password
//   var password = "";
//   for (var i = 0; i < passwordLength; i++) {
//     var randomIndex = Math.floor(Math.random() * allChars.length);
//     password += allChars.charAt(randomIndex);
//   }

//   return password;
// }