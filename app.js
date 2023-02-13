function totalCost() {
    // get both inputs
    let price = Number(document.querySelector('input[name=price]').value);
    let tipPercentage = Number(document.querySelector('input[name=tip]').value);
    // get tip into decimal point
    let tipPrice = tipPercentage / 100;
    let totalTip = price * tipPrice;
    let totalCost = totalTip + price
    document.getElementById('show-price').textContent = '$' + totalCost.toFixed(2);
}