const cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const totalItemsSpan = document.getElementById('total-items');
const totalPriceSpan = document.getElementById('total-price');
const cartIcon = document.querySelector('.icon-cart');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');

// კალათის გახსნა
cartIcon.addEventListener('click', () => {
  cartSidebar.style.display = 'block';
});

// კალათის დახურვა
closeCart.addEventListener('click', () => {
  cartSidebar.style.display = 'none';
});

// პროდუქტის დამატება კალათაში
document.querySelectorAll('.add-to-cart-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const productCard = btn.closest('.product-card');
    const title = productCard.querySelector('.product-title').textContent;
    const priceText = productCard.querySelector('.product-price').textContent;
    const price = parseFloat(priceText.replace('$', ''));

    const existingProduct = cart.find(p => p.title === title);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ title, price, quantity: 1 });
    }

    updateCart();
  });
});

// კალათის განახლება UI-ში
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p><strong>${item.title}</strong><br>
      Quantity: ${item.quantity} | Price: $${(item.price * item.quantity).toFixed(2)}
      <button data-index="${index}" class="remove-item" style="margin-left: 10px;">Remove</button></p>
    `;
    cartItemsContainer.appendChild(div);

    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  totalItemsSpan.textContent = totalItems;
  totalPriceSpan.textContent = totalPrice.toFixed(2);

  document.querySelector('.icon-cart span').textContent = totalItems;

  // წაშლა ღილაკი
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      cart.splice(index, 1);
      updateCart();
    });
  });
}