// Obtener referencias a los elementos del DOM
var cartIcon = document.getElementById("cart-icon");
var cartItems = document.querySelector(".cart-items");
var mainImage = document.getElementById("main-image");
var thumbnails = document.querySelectorAll(".thumbnail");
var quantityInput = document.getElementById("quantity");
var decreaseBtn = document.getElementById("decrease");
var increaseBtn = document.getElementById("increase");
var addToCartBtn = document.getElementById("add-to-cart");
var cartCount = 0;
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
        mainImage.src = thumbnail.src;
    });
});
// Actualizar la cantidad de productos
increaseBtn.addEventListener("click", function () {
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = (currentValue + 1).toString();
});
decreaseBtn.addEventListener("click", function () {
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = (currentValue - 1).toString();
    }
});
// Agregar productos al carrito
addToCartBtn.addEventListener("click", function () {
    var quantity = parseInt(quantityInput.value);
    cartCount += quantity;
    cartItems.textContent = cartCount.toString();
    alert("".concat(quantity, " item(s) added to the cart!"));
});
