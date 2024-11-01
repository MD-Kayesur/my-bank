
// add money button
document.getElementById('show-add-money')
.addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
})

// cash out button
document.getElementById('show-cash-out')
.addEventListener('click',function() {
  document.getElementById('cash-out-form').classList.remove('hidden');
  document.getElementById('add-money-form').classList.add('hidden')
})



// click on the add money submit button
document.getElementById('btn-add-money')
    .addEventListener('click', function(Event){
        Event.preventDefault();
        const addmoney = document.getElementById('input-add-money').value ;
 const addmoneyhumber = parseFloat(addmoney)
 const pinnumber = document.getElementById('input-pin-number').value 
 if ( pinnumber === '1234') {
    const balance = document.getElementById('account-balece').innerText;
    const balancenumber = parseFloat(balance)
    const newbalance = balancenumber + addmoneyhumber 
    document.getElementById('account-balece').innerText = newbalance 
 } else {
    alert('invalid password! try again')
 } 
    })



// click on the cash out submit button

document.getElementById('btn-cash-out')
.addEventListener('click', function(Event){
    Event.preventDefault();
    const cashout = document.getElementById('input-cash-out-money').value ;
const cashouthumber = parseFloat(cashout)
const pinnumber = document.getElementById('input-cash-out-pin').value 
if ( pinnumber === '1234') {
const balance = document.getElementById('account-balece').innerText;
const balancenumber = parseFloat(balance)
const newbalance = balancenumber - cashouthumber 
document.getElementById('account-balece').innerText = newbalance 
} else {
alert('invalid password! try again')
} 
})


// 