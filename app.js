console.log("app.js loaded");

function invest() {
  // TODO - your investment calculation!
  const principal = getPrincipal();
  const returnPerc = getReturnPerc();
  const numOfYears = getNumOfYears();
  const total = principal * Math.pow((1 + returnPerc), numOfYears);
  return total.toFixed(2);
}

console.log(invest());

/*************************************
Ignore what is below for now...     */

function displayInvestment() {
  const investment = invest();
  alert("The investment will be worth $" + investment);
}
