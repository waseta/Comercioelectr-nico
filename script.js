
var cartIcon = document.getElementById("cart-icon");
var cartItems = document.querySelector(".cart-items");
var mainImage = document.getElementById("main-image");
var thumbnails = document.querySelectorAll(".thumbnail");
var quantityInput = document.getElementById("cantidad");
var decreaseBtn = document.getElementById("disminuir");
var increaseBtn = document.getElementById("aumentar");
var addToCartBtn = document.getElementById("add-to-cart");
var priceElement = document.getElementById("price");
var discountInput = document.getElementById("discount-percentage");
var applyDiscountBtn = document.getElementById("apply-discount");
var discountMessage = document.getElementById("discount-message");

var cartCount = 0;
var basePrice = 99.99; // Precio base del producto

console.log("Elementos detectados:", {
    cartIcon,
    cartItems,
    mainImage,
    thumbnails,
    quantityInput,
    decreaseBtn,
    increaseBtn,
    addToCartBtn,
    priceElement,
    discountInput,
    applyDiscountBtn,
    discountMessage
});

thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
        mainImage.src = thumbnail.src;
        console.log("Imagen cambiada a:", mainImage.src);
    });
});

increaseBtn.addEventListener("click", function () {
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = (currentValue + 1).toString();
    console.log("Cantidad aumentada a:", quantityInput.value);
});

decreaseBtn.addEventListener("click", function () {
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = (currentValue - 1).toString();
        console.log("Cantidad disminuida a:", quantityInput.value);
    }
});

addToCartBtn.addEventListener("click", function () {
    var quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
        cartCount = quantity;
        cartItems.textContent = cartCount.toString();
        console.log(`${quantity} producto(s) agregado(s) al carrito. Total en carrito: ${cartCount}`);
    } else {
        console.log("Cantidad inválida. No se agregó ningún producto al carrito.");
    }
});

applyDiscountBtn.addEventListener("click", function () {
    var discountPercentage = parseInt(discountInput.value);
    console.log("Intentando aplicar descuento del:", discountPercentage, "%");
    if (discountPercentage >= 1 && discountPercentage <= 60) {
        var discountRate = discountPercentage / 100;
        var discountedPrice = (basePrice * (1 - discountRate)).toFixed(2);
        priceElement.innerHTML = `<span style="text-decoration:line-through; color:gray;">$${basePrice}</span> $${discountedPrice}`;
        discountMessage.textContent = `¡Descuento del ${discountPercentage}% aplicado con éxito!`;
        discountMessage.style.color = "green";
        console.log("Descuento aplicado. Nuevo precio:", discountedPrice);
    } else {
        discountMessage.textContent = "Ingrese un valor válido entre 1 y 60.";
        discountMessage.style.color = "red";
        console.log("Descuento inválido ingresado:", discountPercentage);
    }
});
