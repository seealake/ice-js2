console.log("app.js loaded");

function invest(principal, interestRate, time) {
  // TODO - your investment calculation!
  return principal * (1 + interestRate) ** time;
}

console.log(invest());

/*************************************
Ignore what is below for now...     */

function displayInvestment() {
  const investment = invest();
  alert("The investment will be worth $" + investment);
}