const txtInput = document.querySelector("#txt-input");
const btnTranslate = document.querySelector(".btn-translate");
const txtOutput = document.querySelector(".output");

const translator = function () {
  txtOutput.innerText = "Welcome, " + txtInput.value;
};

btnTranslate.addEventListener("click", translator);
