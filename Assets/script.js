
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword(){
    var passLength = prompt("How many characters would you like your password to be?", "Must be at least 8 characters")
    if(passLength < 8 || passLength != Number){
        prompt("How long would you like your password to be?", "MUST BE AT LEAST 8 CHARACTERS!!!!!")
        if(passLength < 8){
            writePassword();
        }
    }
    var initPass = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z" ]
    var specChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    toUpper = function(x){
        return x.toUpperCase();
    }
    var upperCase = initPass.map(toUpper);
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    var charPromp = confirm("Do you want to add special characters?");
    if (charPromp === true){
        var initPass = initPass.concat(specChar)
    }
    var upperPromp = confirm("Do you want to add UPPER CASE letters?");
    if (upperPromp === true){
        var initPass = initPass.concat(upperCase)
    }

    var numsPromp = confirm("Do you want to add NUMBERS?");
    if (numsPromp === true){
        var initPass = initPass.concat(nums)
    }

    var i = passLength

    var genPass = document.getElementById("password")

    for (i = 0; i < passLength; i++) {
        var index = Math.floor(Math.random() * initPass.length);
        var y = document.createTextNode(initPass[index])
        genPass.appendChild(y)
    }
}
