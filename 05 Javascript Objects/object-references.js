let myAccount = {
    name: 'Joseph Muganga',
    Expenses: 0,
    income: 0
}
let addExpense = function (account, amount) {
    account.Expenses = account.Expenses + amount;
}

//addIncome
/**
 * This function is going to take the account to manipulate  which account we trying to add income for.
 * And is going to take the amount of income we're trying to add.
 */
let addIncome = function (account,amountIncome){
    account.income = account.income + amountIncome;
}


//resetAccount
/**
 * This function is going to reset the expenses and income for an account to zero.
 * So it's still needed to know which account to change but that's the only argument it requires since we're going to use the static zero for the values for both properties.
 */
let resetAccount = function(account){
    account.Expenses = 0;
    account.income = 0;
}

//getAccountSummary
/**
 * This is going to print a summary of the account that includes the current account balance as well as total in expenses and income.
 * Account for Joseph Muganga has $9000. $100 in income. $100 in expenses.
 * You can return the string as the return value for get a cap summary and then when you actually use it you can print it to the screen using console dot lock.
 */
let getAccountSummary = function(account){
    let accountBalance = account.income - account.Expenses;
    return (`${account.name} has $${accountBalance}. $${account.income} in income. $${account.Expenses} in expenses.`)
}

addIncome(myAccount,2000)
addExpense(myAccount,2.50)
addExpense(myAccount,160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
