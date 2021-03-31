const txtInput = document.querySelector("#txt-input");
const btnTranslate = document.querySelector(".btn-translate");
const txtOutput = document.querySelector(".output");

const getURL = function (text) {
  return "https://api.funtranslations.com/translate/minion.json?text=" + text;
};

const errorHandler = function (error) {
  alert("Something went wrong.");
  console.log(error.message);
};

const translator = function () {
  fetch(getURL(txtInput.value))
    .then((response) => response.json())
    .then((data) => (txtOutput.innerText = data.contents.translated))
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", translator);
