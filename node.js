document
  .getElementById("checkNumberBtn")
  .addEventListener("click", function () {
    const number = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");

    if (number === "") {
      resultElement.textContent = "Please enter a number";
      resultElement.style.color = "red";
      return;
    }

    const parsedNumber = parseInt(number, 10);

    if (isNaN(parsedNumber)) {
      resultElement.textContent = "Please enter a valid number";
      resultElement.style.color = "red";
    } else if (parsedNumber % 2 === 0) {
      resultElement.textContent = `${parsedNumber} is even`;
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = `${parsedNumber} is odd`;
      resultElement.style.color = "blue";
    }
  });
