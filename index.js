const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()"

const passwordLength = document.getElementById("password-length")
const uppercaseCheck = document.getElementById("uppercase")
const lowercaseCheck = document.getElementById("lowercase")
const numbersCheck = document.getElementById("numbers")
const symbolsCheck = document.getElementById("symbols")
const generatePassword = document.getElementById("generate-password")
const passwordEl = document.getElementById("password")

const combination = () => {
  let char = ""
  if (uppercaseCheck.checked) {
    char += uppercase
  }
  if (lowercaseCheck.checked) {
    char += lowercase
  }
  if (numbersCheck.checked) {
    char += numbers
  }
  if (symbolsCheck.checked) {
    char += symbols
  }
  return char
}

generatePassword.addEventListener("click", () => {
  if (passwordLength.value >= 8) {
    let password = ""
    const char = combination()
    for (let i = 0; i < passwordLength.value; i++) {
      password += char.charAt(Math.floor(Math.random() * char.length))
    }
    passwordEl.innerText = password
  } else {
    alert("Password length must be at least 8 characters")
  }
})

passwordEl.addEventListener("click", () => {
  const range = document.createRange();
  range.selectNodeContents(passwordEl);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
})