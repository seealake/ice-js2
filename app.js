console.log("app.js loaded");

function invest() {
  const principal = getPrincipal();
  const returnRate = getReturnDecimal();
  const numOfYears = getNumOfYears();

  if (principal == null || returnRate == null || numOfYears == null) {
    return "0.00";
  }

  const total = principal * Math.pow(1 + returnRate, numOfYears);
  return total.toFixed(2);
}

console.log(invest());

/*************************************
Ignore what is below for now...     */

function displayInvestment() {
  const investment = invest();
  alert("The investment will be worth $" + investment);
}
