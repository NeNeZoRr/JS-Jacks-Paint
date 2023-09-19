function configureListeners() {
  let images = document.querySelectorAll("img");

  // iterate over images and add mouseover event listeners

  images.forEach((image) => {
    image.addEventListener("mouseover", addOpacity);
    image.addEventListener("mouseout", removeOpacity);
  });
}

// Call the function to configure listeners when the page loads
function addOpacity(event) {
  if (!this.classList.contains("dim")) {
    this.classList.add("dim");
  }
  getProductInfo(event.target.id);
}

function removeOpacity(event) {
  if (this.classList.contains("dim")) {
    this.classList.remove("dim");
  }

  let element = document.getElementById("color-price");
  element.textContent = "";

  let color = document.getElementById("color-name");
  color.textContent = "";

  event.preventDefault();
}

function getProductInfo(paintColor) {
  const colorInfo = {
    pn1: { price: "$19.99", name: "Lime Green" },
    pn2: { price: "$12.99", name: "Medium Brown" },
    pn3: { price: "$11.99", name: "Royal Blue" },
    pn4: { price: "$14.99", name: "Bright Red" },
    pn5: { price: "$9.99", name: "Solid White" },
    pn6: { price: "$15.99", name: "Solid Black" },
    pn7: { price: "$8.99", name: "Medium Blue" },
    pn8: { price: "$16.99", name: "Light Purple" },
    pn9: { price: "$17.99", name: "Bright Yellow" },
  };

  const colorData = colorInfo[paintColor];

  if (colorData) {
    updatePrice(colorData.name, colorData.price);
  }
}

function updatePrice(colorName, price) {
  let colorPrice = document.getElementById("color-price");
  colorPrice.textContent = price;

  let color = document.getElementById("color-name");
  color.textContent = colorName;
}

configureListeners();
