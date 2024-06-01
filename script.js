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
});

const list = document.getElementById("list");
const listCreator = (expenseName, expenseValue) => {
/*    <div>
      <p></p>
      <p></p>
   </div> */
   let subListContent = document.createElement('div');
   subListContent.classList.add("sublist-content","flex-space");
   subListContent.innerHTML =`<p class ="product">${expenseName}</p> <p class = "amount">${expenseValue}</p>`;
   let editButton = document.createElement('button');
   editButton.classList.add('edit', 'fa-solid', 'fa-pen-to-square');
   editButton.style.fontSize = '1.2em';

   let deletButton = document.createElement('button');
   deletButton.classList.add('delete', 'fa-solid', 'fa-trash-can');
   deletButton.style.fontSize = '1.2em';

   subListContent.appendChild(editButton);
   subListContent.appendChild(deletButton);
   list.appendChild(subListContent);
}
const expenseAmountButton = document.getElementById('expense-amount-button');
const productTitle = document.getElementById('product-title');
const userAmount = document.getElementById('user-amount');
const productError = document.getElementById('product-title-error');

expenseAmountButton.addEventListener('click', () => {
   if(!productTitle.value || !userAmount.value) {
      productError.classList.remove('hide');
      productError.innerText = `Expenses value cna't be empty`;
      return;
   } else if (productTitle.value.trim().length <= 0 || userAmount.value <= 0) {
      productError.classList.remove('hide');
      productError.innerText = "Invalid data";
      return;
   }
   let expenditure = parseInt(userAmount.value);
   let sum = parseInt(expenseValue.innerText) + expenditure;
   const totalBaalance = tempAmount - sum;
   expenseValue.innerText = sum;
   balanceAmount.innerHTML = totalBaalance;
   listCreator(productTitle.value,userAmount.value)
   productTitle.value = "";
   userAmount.value = "";
});
