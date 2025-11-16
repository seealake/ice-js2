console.log("app.js loaded");

function invest() {
  // TODO - your investment calculation!
  principal = 100;
  interestRate = 0.05;
  time = 1
  return principal * (1 + interestRate) ** time;
}

console.log(invest());

/*************************************
Ignore what is below for now...     */

function displayInvestment() {
  const investment = invest();
  alert("The investment will be worth $" + investment);
}
invest();