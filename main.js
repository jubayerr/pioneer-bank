const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");
const loginBtn = document.getElementById("login");
const depositBtn = document.getElementById("addDeposit");
const depositAmount = document.getElementById("depositAmount");
const currentDeposit = document.getElementById("currentDeposit");
const currentBalance = document.getElementById("currentBalance");
const withdrawBtn = document.getElementById("addWithdraw");
const withdrawAmount = document.getElementById("withdrawAmount");
const currentWithdraw = document.getElementById("currentWithdraw");

// login front page
loginBtn.addEventListener("click", () => {
  loginArea.style.display = "none";
  transactionArea.style.display = "block";
});

// deposit button event handler
depositBtn.addEventListener("click", () => {
  const depositNum = getInputNum(depositAmount);

  updateSpanText(currentDeposit, depositNum);

  updateSpanText(currentBalance, depositNum);

  depositAmount.value = "";
});

// withdraw button event handler
withdrawBtn.addEventListener("click", () => {
  const withdrawNum = getInputNum(withdrawAmount);
  updateSpanText(currentWithdraw, withdrawNum);
  updateSpanText(currentBalance, -1 * withdrawNum);
  withdrawAmount.value = "";
});

// function
function getInputNum(id) {
  const amount = id.value;
  const amountNum = parseFloat(amount);
  return amountNum;
}

// function
function updateSpanText(id, depositNum) {
  const current = id.innerText;
  const currentNum = parseFloat(current);
  const total = depositNum + currentNum;
  id.innerText = total;
}
