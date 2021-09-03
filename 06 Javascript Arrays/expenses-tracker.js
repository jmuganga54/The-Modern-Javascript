const account = {
    name:'Joseph Muganga',
    expenses: [],
    addExpense:function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let expenseTotal = 0;
        let incomeTotal = 0;
        this.expenses.forEach(function(expense){
            expenseTotal = expenseTotal + expense.amount;
        })
        this.income.forEach(function(inc){
            console.log(this.amount)
            incomeTotal = incomeTotal + inc.amount;
            console.log(incomeTotal)
        })
        return `${this.name} has a balance of $${incomeTotal-expenseTotal}. $${incomeTotal} in income. $${expenseTotal} in expenses`
    },
    addIncome : function(description, amount){
        this.income.push({
            description:description,
            amount:amount
        })
    }
}

account.income = [];

account.addExpense('Rent',950)
account.addExpense('Coffee',2)
account.addIncome('Job',1000)

console.log(account);
console.log(account.getAccountSummary())