const cartItems = document.getElementById("cartItems");
const total = document.getElementById("total");

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.innerHTML = "";
  let totalCost = 0;

  cart.forEach((item, index) => {
    totalCost += item.price;

    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <p>Rating: ${item.rating}⭐</p>
      <button onclick="removeFromCart(${index})">Remove</button>
      <button onclick="buyNow('${item.name}')">Buy Now</button>
    `;
    cartItems.appendChild(div);
  });

  total.textContent = `Total: ₹${totalCost}`;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function buyNow(name) {
  alert(`Thank you for buying ${name}!`);
}

loadCart();
