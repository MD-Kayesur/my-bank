
// ---------------------  add money button----------------


//  <button id="show-add-money" class="btn btn-lg">Add Money</button>
document.getElementById('show-add-money')
    // using "click" event 
    .addEventListener('click', function () {
        //  <form id="add-money-form" class="card-body hidden"> #remove hidden property from class
        document.getElementById('add-money-form').classList.remove('hidden')
        //  <form id="cash-out-form" class="card-body hidden"> #add  hidden property in class
        document.getElementById('cash-out-form').classList.add('hidden')
        // <button id="show-transiction" class="btn btn-lg">Transiction</button>
        document.getElementById('transiction-id').classList.add('hidden')
    })

// -----------------------cash out button-----------------


// <button id="show-cash-out" class="btn btn-lg">Cash Out</button> 
document.getElementById('show-cash-out')
    // using "click" event
    .addEventListener('click', function () {
        // <form id="cash-out-form" class="card-body hidden"> 
        document.getElementById('cash-out-form').classList.remove('hidden');
        // <form id="add-money-form" class="card-body hidden"> 
        document.getElementById('add-money-form').classList.add('hidden')
        // <button id="show-transiction" class="btn btn-lg">Transiction</button>
        document.getElementById('transiction-id').classList.add('hidden')
    })


// -----------------------Transiction button-----------------

document.getElementById('show-transiction')
    .addEventListener('click', function () {
        // <form id="cash-out-form" class="card-body hidden"> 
        document.getElementById('cash-out-form').classList.add('hidden');
        // <form id="add-money-form" class="card-body hidden"> 
        document.getElementById('add-money-form').classList.add('hidden')
        // <button id="show-transiction" class="btn btn-lg">Transiction</button>
        document.getElementById('transiction-id').classList.remove('hidden')
    })



// ------------------------click on the add money submit button------------------


document.getElementById('btn-add-money')
    // using "click" event
    .addEventListener('click', function (Event) {
        // (preventDesualt) suing as if dont reload 
        Event.preventDefault();
        //  <input id="input-add-money" type="text" placeholder="Amount" #taking only value so using (value)
        const addmoney = document.getElementById('input-add-money').value;
        // convert in (parsefloat) 
        const addmoneyhumber = parseFloat(addmoney)
        // <input id="input-pin-number" type="password" placeholder="pin number"  #taking only value so using (value) 
        const pinnumber = document.getElementById('input-pin-number').value
        if (pinnumber === '1234') {
            //  <div id="account-balece" class="stat-value text-center">00</div>  #taking only test so suing (innertext)
            const balance = document.getElementById('account-balece').innerText;
            // convert in (parsefloat)
            const balancenumber = parseFloat(balance)
            const newbalance = balancenumber + addmoneyhumber
            // <div id="account-balece" class="stat-value text-center">00</div>  
            document.getElementById('account-balece').innerText = newbalance

             // creating new tag into transiction-id 
             const p = document.createElement('p')
             // adding text in p tag
             p.innerText = `add momey: ${addmoney} , main balance : ${newbalance}`
             // <div id="transiction-id" class="hidden space-y-4">
             document.getElementById('transiction-id').appendChild(p).style.backgroundColor = 'yellow'
 
        } else {
            alert('invalid password! try again')
        }
    })



// -------------------click on the cash out submit button-------------------


// <button id="btn-cash-out" class="btn btn-primary">Cash Out</button> 
document.getElementById('btn-cash-out')
    // // using "click" event 
    .addEventListener('click', function (Event) {
        // (preventDesualt) suing as if dont reload
        Event.preventDefault();
        // <input id="input-cash-out-money" type="text" placeholder="Amount" 
        const cashout = document.getElementById('input-cash-out-money').value;
        // convert in (parsefloat) 
        const cashouthumber = parseFloat(cashout)
        // <input id="input-cash-out-pin" type="password" placeholder="pin number" 
        const pinnumber = document.getElementById('input-cash-out-pin').value
        if (pinnumber === '1234') {
            // <div id="account-balece" class="stat-value text-center">00</div> 
            const balance = document.getElementById('account-balece').innerText;
            // convert in (parsefloat)  
            const balancenumber = parseFloat(balance)
            const newbalance = balancenumber - cashouthumber
            // <div id="account-balece" class="stat-value text-center">00</div>  
            document.getElementById('account-balece').innerText = newbalance

            // creating new tag into transiction-id 
            const p = document.createElement('p')
            // adding text in p tag
            p.innerText = `cash out : ${cashout} , main balance : ${newbalance}`
            // <div id="transiction-id" class="hidden space-y-4">
            document.getElementById('transiction-id').appendChild(p).style.backgroundColor = 'yellow'


        } else {
            alert('invalid password! try again')
        }
    })


