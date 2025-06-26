const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 29999, rating: 4.5, image: "images/smartphone.jpg" },
  { id: 2, name: "Wireless Headphones", category: "electronics", price: 4999, rating: 4.2, image: "images/headphones.jpg" },
  { id: 3, name: "T-shirt", category: "fashion", price: 799, rating: 4.1, image: "images/tshirt.jpg" },
  { id: 4, name: "Sofa Set", category: "home", price: 23999, rating: 4.6, image: "images/sofa.jpg" },
  { id: 5, name: "LED TV 42\"", category: "electronics", price: 34999, rating: 4.7, image: "images/tv.jpg" },
  { id: 6, name: "Bluetooth Speaker", category: "electronics", price: 2499, rating: 4.4, image: "images/speaker.jpg" },
  { id: 7, name: "Leather Wallet", category: "fashion", price: 1299, rating: 4.3, image: "images/wallet.jpg" },
  { id: 8, name: "Bed Lamp", category: "home", price: 899, rating: 4.2, image: "images/bedlamp.jpg" },
  { id: 9, name: "Kitchen Mixer", category: "home", price: 3199, rating: 4.1, image: "images/mixer.jpg" },
];

function renderProducts(list) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  list.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-card";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ⭐${product.rating}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

renderProducts(products);
