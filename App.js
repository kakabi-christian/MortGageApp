let inputForMortgageAmount = document.querySelector(".inputForMortgageAmount");
let inputForYear = document.querySelector(".inputForYear");
let inputForInterestRate = document.querySelector(".inputForInterestRate");
let radioRepayment = document.querySelector(".radioRepayment");
let radioInterestOnly = document.querySelector(".radioInterestOnly");
let ValueOfRepayment = document.querySelector(".ValueOfRepayment");
let totalOfRepayment = document.querySelector(".totalOfRepayment");
const ClearAll = document.querySelector(".ClearAll");
let errorYear = document.getElementById("error-Years");
let errorAmount = document.getElementById("error-Amount");
let errorRate = document.getElementById("error-Rate");
const form = document.querySelector("form");
const errorRadio = document.getElementById("error-radio");
const containerCalculate = document.querySelector(".container-calculate");
const containerEmpty = document.querySelector(".container-empty");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValidForm = checkForm();
  if (isValidForm == true) {
    containerEmpty.style.display = "none";

    containerCalculate.style.display = "block";
    containerCalculate.classList.add("new-slide")
    const principal = Number(inputForMortgageAmount.value);
    const interestRate = Number(inputForInterestRate.value) / 100 / 12;
    const numberOfPayments = Number(inputForYear.value) * 12;

    if (radioRepayment.checked) {
      const monthlyRepayment =
        (principal *
          interestRate *
          Math.pow(1 + interestRate, numberOfPayments)) /
        (Math.pow(1 + interestRate, numberOfPayments) - 1);
      ValueOfRepayment.innerText = `£${monthlyRepayment.toFixed(2)}`;
      const totalRepayment = monthlyRepayment * numberOfPayments;
      totalOfRepayment.innerText = `£${totalRepayment.toFixed(2)}`;
    } else if (radioInterestOnly.checked) {
      const monthlyRepayment = (principal * interestRate).toFixed(2);
      ValueOfRepayment.innerText = `£${monthlyRepayment}`;
      totalOfRepayment.innerText = `£${principal.toFixed(2)}`;
    }
  } else {
    containerEmpty.style.display = "block";
    containerCalculate.style.display = "none";
    containerEmpty.classList.add("new-slide")

  }
});
const checkForm = () => {
  let isvalid = true;

  if (
    inputForMortgageAmount.value == "" ||
    isNaN(inputForMortgageAmount.value) ||
    Number(inputForMortgageAmount.value) <= 0
  ) {
    isvalid = false;
    errorAmount.style.display = "block";
    const borderAmount = (document.querySelector(
      ".input-logo-euro"
    ).style.borderColor = "red");
    const logo = (document.querySelector(".logo").style.backgroundColor =
      "red");
    const logoEuro = (document.querySelector(".logo p").style.color = "white");
  }
  
   else {
    errorAmount.style.display = "none";
  }
 
  if (
    inputForYear.value == "" ||
    isNaN(inputForYear.value) ||
    Number(inputForYear.value) <= 0
  ) {
    isvalid = false;

    errorYear.style.display = "block";
    const ErrorForInputYear = (document.querySelector(
      ".years-color"
    ).style.backgroundColor = "red");
    const pForErrorInputYear = (document.querySelector(
      ".years-color p"
    ).style.color = "white");
    const Erroryears = (document.querySelector(
      ".container-year-input"
    ).style.borderColor = "red");
  } else {
    errorYear.style.display = "none";
  }


  if (
    inputForInterestRate.value == "" ||
    isNaN(inputForInterestRate.value) ||
    Number(inputForInterestRate.value <= 0)
  ) {
    isvalid = false;

    errorRate.style.display = "block";
    const ErrorRate = (document.querySelector(
      ".rate-container"
    ).style.borderColor = "red");
    const ErrorForInputRate = (document.querySelector(
      ".color-rate"
    ).style.backgroundColor = "red");
    const pForErrorInputrate = (document.querySelector(
      ".color-rate p"
    ).style.color = "white");
  } else {
    errorRate.style.display = "none";
  }
  
  if (radioInterestOnly.checked == false && radioRepayment.checked == false) {
    isvalid = false;

    errorRadio.style.display = "block";
  } else {
    errorRadio.style.display = "none";
  }
  return isvalid;
};
inputForMortgageAmount.addEventListener("keyup", () => {
  if (inputForMortgageAmount.value.trim() !== "") {
    const borderAmount = (document.querySelector(
      ".input-logo-euro"
    ).style.borderColor = "gold");
    const logo = (document.querySelector(".logo").style.backgroundColor =
      "gold");
    const logoOpacity = (document.querySelector(".logo").style.opacity = "0.9");
  }
});
inputForMortgageAmount.addEventListener("blur", () => {
  if (inputForMortgageAmount.value.trim() !== "") {
    const borderAmount = (document.querySelector(
      ".input-logo-euro"
    ).style.borderColor = "black");
    const logo = (document.querySelector(".logo").style.backgroundColor =
      "var(--bg-main)");
    const logoOpacity = (document.querySelector(".logo").style.opacity = "1");
  }
});
radioRepayment.addEventListener("click", () => {
  let radioRepaymentBorder = (document.querySelector(
    ".radio-repayment"
  ).style.borderColor = "var(--color-accent)");
  const radioRepaymentBackground = (document.querySelector(
    ".radio-repayment"
  ).style.backgroundColor = "var(--color-accent)");
  const radioRepaymentopacityBackground = (document.querySelector(
    ".radio-repayment"
  ).style.opacity = "var(--color-accent)");
  const radioRepayment = document.querySelector(".radioRepayment");
  const radioInterestOnlyBorder = (document.querySelector(
    ".radio-interest-only"
  ).style.borderColor = "0.7");
  const radioInterestOnlyBackground = (document.querySelector(
    ".radio-interest-only"
  ).style.backgroundColor = "white");
});
radioInterestOnly.addEventListener("click", () => {
  let radioRepaymentBorder = (document.querySelector(
    ".radio-repayment"
  ).style.borderColor = "black");
  const radioRepaymentBackground = (document.querySelector(
    ".radio-repayment"
  ).style.backgroundColor = "white");
  const radioRepaymentOpacityBackground = (document.querySelector(
    ".radio-repayment"
  ).style.opacity = "0.7");

  const radioInterestOnlyBorder = (document.querySelector(
    ".radio-interest-only"
  ).style.borderColor = "--var(--color-accent)");
  const radioInterestOnlyBackground = (document.querySelector(
    ".radio-interest-only"
  ).style.backgroundColor = "var(--color-accent)");
});

