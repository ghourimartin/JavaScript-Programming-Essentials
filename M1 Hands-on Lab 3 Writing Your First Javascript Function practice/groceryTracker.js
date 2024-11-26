let length;
let width;

function calculatetotalamount() {
    Grocery_1_Amount = parseFloat(document.getElementById('Grocery_1_Amount').value);
    Grocery_2_Amount = parseFloat(document.getElementById('Grocery_2_Amount').value);
    Grocery_3_Amount = parseFloat(document.getElementById('Grocery_3_Amount').value);
    let total_amount = Grocery_1_Amount + Grocery_2_Amount + Grocery_3_Amount;

    document.getElementById('Grocery_1_Amounts').innerText = `The Grocery_1_Amount is: ${Grocery_1_Amount}`;
    document.getElementById('Grocery_2_Amounts').innerText = `The Grocery_2_Amount is: ${Grocery_2_Amount}`;
    document.getElementById('Grocery_3_Amounts').innerText = `The Grocery_3_Amount is: ${Grocery_3_Amount}`;
    document.getElementById('total_amounts').innerText = `The total amount is: ${total_amount}`;
    }