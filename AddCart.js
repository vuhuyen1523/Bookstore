function increQuantity() {
    var quantity = document.getElementById('quantity-cart');
    var value = quantity.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('quantity-cart').innerHTML = value;
}