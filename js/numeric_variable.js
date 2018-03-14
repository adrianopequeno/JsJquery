// declarando as variáveis
var price;
var quantity;
var total;

// atribuindo valores as variáveis
price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;