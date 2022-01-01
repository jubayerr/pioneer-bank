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

  const currentDepositText = currentDeposit.innerText;
  const currentDepositNum = parseFloat(currentDepositText);
  const totalDeposit = depositNum + currentDepositNum;

  currentDeposit.innerText = totalDeposit;

  const currentBalanceText = currentBalance.innerText;
  const currentBalanceNum = parseFloat(currentBalanceText);

  const totalBalance = depositNum + currentBalanceNum;
  currentBalance.innerText = totalBalance;

  depositAmount.value = "";
});
