const inputName = document.getElementById("inputName");
const inputNumber = document.getElementById("inputNumber");
const inputDataMonth = document.getElementById("inputDataMonth");
const inputDataYear = document.getElementById("inputDataYear");
const inputPin = document.getElementById("inputPin");
const inputSubmit = document.getElementById("inputSubmit");

const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const cardDate = document.getElementById("cardDate");
const cardPin = document.getElementById("cardPin");

const form = document.getElementById("form");
const finishElement = document.getElementById("finish");

const dateArray = ["", ""];

const handleInputName = (event) => {
  cardName.innerText = event.target.value;
};

const handleInputNumber = (event) => {
  cardNumber.innerText = event.target.value;
};

const handleInputDataMonth = (event) => {
  dateArray[0] = event.target.value;
  cardDate.innerText = dateArray.join("/");
};

const handleInputDataYear = (event) => {
  dateArray[1] = event.target.value;
  cardDate.innerText = dateArray.join("/");
};

const handleInputPin = (event) => {
  cardPin.innerText = event.target.value;
};

const handleInputSubmit = (event) => {
  form.classList.add("--hidden");
  finishElement.classList.remove("--hidden");
};

inputName.addEventListener("input", handleInputName);

inputNumber.addEventListener("input", handleInputNumber);

inputDataMonth.addEventListener("input", handleInputDataMonth);

inputDataYear.addEventListener("input", handleInputDataYear);

inputPin.addEventListener("input", handleInputPin);

inputSubmit.addEventListener("click", handleInputSubmit);

console.log(cardNumber, cardName, cardDate, cardPin);
