document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCartButton = document.querySelector('#close-cart-btn');
    const cartItemsContainer = document.querySelector('#cart-items');
    const totalElement = document.querySelector('#total-price');
    const cartOverlay = document.querySelector('#cart-overlay');
    const emptyCartMessage = document.querySelector('#empty-cart');
  
    let cart = [];
  
    function updateCartDisplay() {
      cartItemsContainer.innerHTML = ''; // Clear previous items
      let totalPrice = 0;
  
      if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
      } else {
        emptyCartMessage.style.display = 'none';
        cart.forEach(item => {
          const cartItemDiv = document.createElement('div');
          cartItemDiv.classList.add('cart-item');
  
          const img = document.createElement('img');
          img.src = item.image;
          img.alt = item.title;
  
          const detailsDiv = document.createElement('div');
          detailsDiv.classList.add('cart-item-details');
  
          const title = document.createElement('div');
          title.classList.add('cart-item-title');
          title.textContent = item.title;
  
          const price = document.createElement('div');
          price.classList.add('cart-item-price');
          price.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
  
          const quantityDiv = document.createElement('div');
          quantityDiv.classList.add('cart-item-quantity');
          quantityDiv.innerHTML = `
            <button class="quantity-btn minus" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn plus" data-id="${item.id}">+</button>
          `;
  
          detailsDiv.appendChild(title);
          detailsDiv.appendChild(price);
          detailsDiv.appendChild(quantityDiv);
  
          cartItemDiv.appendChild(img);
          cartItemDiv.appendChild(detailsDiv);
          cartItemsContainer.appendChild(cartItemDiv);
  
          totalPrice += item.price * item.quantity;
        });
      }
  
      totalElement.textContent = totalPrice.toFixed(2);
      setupQuantityButtons();
    }
  
    function setupQuantityButtons() {
      const quantityButtons = document.querySelectorAll('.quantity-btn');
      quantityButtons.forEach(button => {
        button.addEventListener('click', function() {
          const id = this.dataset.id;
          const type = this.classList.contains('plus') ? 'plus' : 'minus';
          updateQuantity(id, type);
        });
      });
    }
  
    function updateQuantity(itemId, type) {
      const itemIndex = cart.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        if (type === 'plus') {
          cart[itemIndex].quantity++;
        } else if (type === 'minus' && cart[itemIndex].quantity > 1) {
          cart[itemIndex].quantity--;
        } else if (type === 'minus' && cart[itemIndex].quantity === 1) {
          cart = cart.filter(item => item.id !== itemId); // Remove if quantity becomes 0
        }
        updateCartDisplay();
      }
    }
  
    function openCart() {
      cartSidebar.classList.add('open');
      cartOverlay.classList.add('active');
    }
  
    function closeCart() {
      cartSidebar.classList.remove('open');
      cartOverlay.classList.remove('active');
    }
  
    closeCartButton.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        if (productCard) {
          const productImage = productCard.querySelector('.product-image').src;
          const productTitle = productCard.querySelector('.product-title').textContent;
          const productPriceText = productCard.querySelector('.product-price').textContent;
          const productPrice = parseFloat(productPriceText.replace('$', '').replace(',', ''));
          const productId = productTitle.replace(/\s+/g, '-').toLowerCase(); // Create a simple ID
  
          const existingItem = cart.find(item => item.id === productId);
  
          if (existingItem) {
            existingItem.quantity++;
          } else {
            cart.push({
              id: productId,
              image: productImage,
              title: productTitle,
              price: productPrice,
              quantity: 1
            });
          }
  
          updateCartDisplay();
          openCart(); // Slide in the cart
        }
      });
    });
  
    // Initial cart display
    updateCartDisplay();
  });