const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", () => {
  loginArea.style.display = "none";
  transactionArea.style.display = "block";
});
