let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    displayCart();
}

function displayCart() {
    let cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        cartItemsDiv.innerHTML += `<p>${cart[i].name} - ${cart[i].price}</p>`;
    }
    document.getElementById('totalPrice').textContent = `السعر الإجمالي: ${totalPrice}`;
}

document.getElementById('addToCartButton').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'block';
});

// تحديد الزر والقائمة
const menuToggle = document.querySelector('.menu-toggle');
const headerMenu = document.querySelector('.header-menu');

// إضافة حدث النقر للتبديل بين عرض/إخفاء القائمة
menuToggle.addEventListener('click', function () {
    this.classList.toggle('menu-active');
    headerMenu.classList.toggle('menu-active');
});
