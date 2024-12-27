// Obtener referencias a los elementos del DOM
const cartIcon = document.getElementById("cart-icon") as HTMLImageElement;
const cartItems = document.querySelector(".cart-items") as HTMLDivElement;
const mainImage = document.getElementById("main-image") as HTMLImageElement;
const thumbnails = document.querySelectorAll(".thumbnail") as NodeListOf<HTMLImageElement>;
const quantityInput = document.getElementById("quantity") as HTMLInputElement;
const decreaseBtn = document.getElementById("decrease") as HTMLButtonElement;
const increaseBtn = document.getElementById("increase") as HTMLButtonElement;
const addToCartBtn = document.getElementById("add-to-cart") as HTMLButtonElement;

let cartCount = 0;

// Cambiar la imagen principal al hacer clic en una miniatura
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        mainImage.src = thumbnail.src;
    });
});

// Actualizar la cantidad de productos
increaseBtn.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value);
    quantityInput.value = (currentValue + 1).toString();
});

decreaseBtn.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = (currentValue - 1).toString();
    }
});

// Agregar productos al carrito
addToCartBtn.addEventListener("click", () => {
    const quantity = parseInt(quantityInput.value);
    cartCount += quantity;
    cartItems.textContent = cartCount.toString();
    alert(`${quantity} item(s) added to the cart!`);
});
