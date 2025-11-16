console.log("app.js loaded");

function invest() {
  // TODO - your investment calculation!
  principal = 100;
}

console.log(invest());

/*************************************
Ignore what is below for now...     */

function displayInvestment() {
  const investment = invest();
  alert("The investment will be worth $" + investment);
}
