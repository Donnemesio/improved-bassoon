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

// User Inputs
let passwordLength;
let useLowers;
let useUppers;
let useSymbols;
let useNumbers;

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'"];
let passString = [];

// Function to take user inputs and generate a random password.
function generatePassword() {
  let pWord = [];

  // Get user inputs.
  getPasswordLength();
  getUseLowers();
  getUseUppers();
  getUseNumbers();
  getUseSymbols();

  // Check if password length has been input, if not, then return nothing.
  if (passwordLength == null || passwordLength == NaN) {
    return;
  }
  // Error if user did not select any criteria. 
  else if (!useLowers && !useUppers && !useNumbers && !useSymbols) {
    alert("Cannot create a password!\nPlease select what characters you would like to use.");

    // Use Lowercase, Uppercase, Numbers, and Symbols
  } else if (useLowers && useUppers && useNumbers && useSymbols) {
    passString = numbers.concat(lowerCase, upperCase, symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase, Uppercase, Numbers, but not Symbols.
  } else if (useLowers && useUppers && useNumbers && !useSymbols) {
    passString = numbers.concat(lowerCase, upperCase);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase, Uppercase, Symbols, but not Numbers.
  } else if (useLowers && useUppers && !useNumbers && useSymbols) {
    passString = lowerCase.concat(upperCase, symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase, Numbers, Symbols, but not Uppercase.
  } else if (useLowers && !useUppers && useNumbers && useSymbols) {
    passString = numbers.concat(lowerCase, symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Uppercase, Numbers, Symbols, but not Lowercase.
  } else if (!useLowers && useUppers && useNumbers && useSymbols) {
    passString = numbers.concat(upperCase, symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase only.
  } else if (useLowers && !useUppers && !useNumbers && !useSymbols) {
    passString = lowerCase;
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Uppercase only.
  } else if (!useLowers && useUppers && !useNumbers && !useSymbols) {
    passString = upperCase;
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Numbers only.
  } else if (!useLowers && !useUppers && useNumbers && !useSymbols) {
    passString = numbers;
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Symbols only.
  } else if (!useLowers && !useUppers && !useNumbers && useSymbols) {
    passString = symbols;
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase and Uppercase only.  
  } else if (useLowers && useUppers && !useNumbers && !useSymbols) {
    passString = lowerCase.concat(upperCase);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase and Numbers only.
  } else if (useLowers && !useUppers && useNumbers && !useSymbols) {
    passString = lowerCase.concat(numbers);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Lowercase and Symbols only.
  } else if (useLowers && !useUppers && !useNumbers && useSymbols) {
    passString = lowerCase.concat(symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Uppercase and Symbols only.  
  } else if (!useLowers && useUppers && !useNumbers && useSymbols) {
    passString = upperCase.concat(symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Uppercase and Numbers only.
  } else if (!useLowers && useUppers && useNumbers && !useSymbols) {
    passString = upperCase.concat(numbers);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");

    // Use Numbers and Symbols only.
  } else if (!useLowers && !useUppers && useNumbers && useSymbols) {
    passString = numbers.concat(symbols);
    for (let i = 0; i < passwordLength; i++) {
      let x = passString[Math.floor(Math.random() * passString.length)];
      pWord.push(x);
    }
    return pWord.join("");
  }
}

// User Input Functions
function getPasswordLength() {
  while (true) {
    passwordLength = prompt('How many characters would you like your password to be?\nPlease enter a value between 8 and 128.');
    if (passwordLength === null) {
      alert('Your password must be at least 8 characters long but no more than 128 characters.');
      return true;
    } else {
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) || passwordLength == null) {
        alert('Your password must be at least 8 characters long, but no more than 128 characters.');
      } else {
        return parseInt(passwordLength);
      }
    }
  }
};

function getUseLowers() {
  if (passwordLength) {
    useLowers = confirm('Would you like to include lower case letters?\n click [OK] for Yes, click [CANCEL] for No.');
  };
  if (!useLowers) {
    return false;
  } else {
    return true;
  }
};

function getUseUppers() {
  if (passwordLength) {
    useUppers = confirm("Would you like to include upper case letters?\n click [OK] for Yes, click [CANCEL] for No.");
  };
  if (!useUppers) {
    return false;
  } else {
    return true;
  }
};

function getUseSymbols() {
  if (passwordLength) {
    useSymbols = confirm('Would you like to include symbols?\n click [OK] for Yes, click [CANCEL] for No.');
  };
  if (!useSymbols) {
    return false;
  } else {
    return true;
  }
};

function getUseNumbers() {
  if (passwordLength) {
    useNumbers = confirm('Would you like to include numbers?\n[OK] for Yes, click [CANCEL] for No.');
  };
  if (!useNumbers) {
    return false;
  } else {
    return true;
  }
}; 






































/* block out again to try for new experiment code to see if i can get the generator to work 
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

function getRandomSymbol(){
 var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
 return symbol[Math.floor(Math.random()*symbol.length)];
}

const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountRange')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const password = document.getElementById('password')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  password.innerText = password 
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(Symbol_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = []
  /*for (let i = 0; i < characterAmount, i++) { 
    const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacters.push(String.fromCharCode(characterCodes))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

/* code i retried.  Must keep working on 

const empty = "";
const includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";
const plength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowercase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
     ^^^^^   */
