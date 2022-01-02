const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");
const loginBtn = document.getElementById("login");
const depositBtn = document.getElementById("addDeposit");
const depositAmount = document.getElementById("depositAmount");
const currentDeposit = document.getElementById("currentDeposit");
const currentBalance = document.getElementById("currentBalance");

// login front page
loginBtn.addEventListener("click", () => {
  loginArea.style.display = "none";
  transactionArea.style.display = "block";
});

// deposit button event handler
depositBtn.addEventListener("click", () => {
  const depositText = depositAmount.value;
  const depositNum = parseFloat(depositText);

  updateSpanText(currentDeposit, depositNum);

  updateSpanText(currentBalance, depositNum);

  depositAmount.value = "";
});

// function
function updateSpanText(id, depositNum) {
  const current = id.innerText;
  const currentNum = parseFloat(current);
  const total = depositNum + currentNum;
  id.innerText = total;
}
