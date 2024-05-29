const depositAmount = document.getElementById('deposit-amount');
const amountDepositButton = document.getElementById('deposit-button');
const amount = document.getElementById('amount');
const balanceAmount = document.getElementById('balance-amount');
const expenseValue = document.getElementById('expenses-value');
const errorMessage = document.getElementById('deposit-error');
let tempAmount = 0;

amountDepositButton.addEventListener('click', ()=>{
   tempAmount = depositAmount.value;
   if(tempAmount === "") {
    errorMessage.classList.remove('hide');
    errorMessage.innerHTML = `Deposit can't be empty`;
   } else if (tempAmount <= 0) {
    errorMessage.classList.remove('hide');
    errorMessage.innerText = `Invalid deposit ammount`;
   } else {
    errorMessage.classList.add('hide');
    amount.innerText = tempAmount;
    balanceAmount.innerHTML = tempAmount -  expenseValue.innerHTML;
    depositAmount.value = '';
   }
})
