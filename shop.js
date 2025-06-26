const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortBy = document.getElementById("sortBy");

function displayProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ${p.rating}⭐</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function filterProducts() {
  let keyword = searchInput.value.toLowerCase();
  let cat = categoryFilter.value;
  let sort = sortBy.value;

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) &&
    (cat === "All" || p.category === cat)
  );

  if (sort === "price") filtered.sort((a, b) => a.price - b.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
sortBy.addEventListener("change", filterProducts);

displayProducts(products);
