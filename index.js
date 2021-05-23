<<<<<<< HEAD
import checkCardNumber from "./checkCardNumber.js";

const form = document.querySelector("form");
const input = form.querySelector("input");
const closeBtn = document.querySelector(".effect .closeBtn");

const resultBox = document.querySelector(".effect");
const result = document.querySelector("p.text");

const showText = (e) => {
  e.preventDefault();
  let text = "";
  if (input.value) {
    text = checkCardNumber(
      Number(input.value.split(" ").join("").split("-").join(""))
    );
    result.textContent = text;
    input.focus();
  } else {
    result.textContent = `You should enter something,
     if you want a verification...`;
  }
  resultBox.classList.add("active");
  form.classList.add("active");
};

const hideText = (e) => {
  e.preventDefault();
  result.textContent = "";
  input.value = "";
  resultBox.classList.remove("active");
  form.classList.remove("active");
};
form.addEventListener("submit", showText);
closeBtn.addEventListener("click", hideText);
=======
import checkCardNumber from "./checkCardNumber.js";

const form = document.querySelector("form");
const input = form.querySelector("input");
const closeBtn = document.querySelector(".effect .closeBtn");

const resultBox = document.querySelector(".effect");
const result = document.querySelector("p.text");

const showText = (e) => {
  e.preventDefault();
  let text = "";
  if (input.value) {
    text = checkCardNumber(
      Number(input.value.split(" ").join("").split("-").join(""))
    );
    result.textContent = text;
    input.value = "";
  } else {
    result.textContent = `You should enter something,
     if you want a verification...`;
  }
  resultBox.classList.add("active");
  form.classList.add("active");
};

const hideText = (e) => {
  e.preventDefault();
  result.textContent = "";
  input.value = "";
  resultBox.classList.remove("active");
  form.classList.remove("active");
};
form.addEventListener("submit", showText);
closeBtn.addEventListener("click", hideText);
>>>>>>> 7d1a6d523aee404a8688530a777c822d7aca5800
