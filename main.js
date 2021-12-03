//Global Selectors
const serialDiv = document.querySelector(".serial");
const genBtn = document.querySelector(".generate");

// Event Listeners
genBtn.addEventListener("click", serialGen);

//Functions
function serialGen() {
  let chars =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&%";
  let charsCount = 10;
  let generatedSerial = "";

  for (let i = 0; i < charsCount; i++) {
    generatedSerial += chars[creatRandom(chars.length)];
  }
  serialDiv.textContent = generatedSerial;
}

function creatRandom(maxNum) {
  return Math.floor(Math.random() * maxNum);
}
