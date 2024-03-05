// HTML Elements
const cartValueElement = document.getElementById("cart-value");
const cartButtonElement = document.getElementById("cart");
const addButtonsElements = document.getElementsByClassName("button");

// Item Data
const items = [
  { name: "This was our pact", quantity: 0, dollars: 7, cents: 49 },
  { name: "The famous five", quantity: 0, dollars: 4, cents: 59 },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
  ];

// Update Cart Display
function updateCartDisplay() {
  const totalItemsInCart = items.reduce((total, item) => total + item.quantity, 0);
  cartValueElement.innerHTML = totalItemsInCart;
}

// Event Listeners for Add Buttons
for (let i = 0; i < addButtonsElements.length; i++) {
  addButtonsElements[i].addEventListener("click", () => {
    items[i].quantity++;
    updateCartDisplay();
  });
}

// Total Price Calculation
let finalDollars = 0;
let finalCents = 0;

function calculateTotalPrice() {
  const totalPriceInCents = items.reduce((total, item) => {
    return total + item.quantity * (item.dollars * 100 + item.cents);
  }, 0);

  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
}

// WhatsApp Integration
let whatsappLink = "https://api.whatsapp.com/send?phone=919025775763&text=Order%20details";

function updateWhatsappLink() {
  items.forEach((item) => {
    if (item.quantity !== 0) {
      whatsappLink += `%0A${item.name}%20${item.quantity}`;
    }
  });

  whatsappLink += `%0A${"Total%20Price:%20$"}${finalDollars}%20${finalCents}c`;
}

// Cart Button Click Event
cartButtonElement.addEventListener("click", () => {
  calculateTotalPrice();
  updateWhatsappLink();
  window.open(whatsappLink, "_blank");

  items.forEach((item) => {
    if (item.quantity !== 0) {
      console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
    }
  });

  console.log(`The total amount is ${finalDollars}$ and ${finalCents} cents`);
});
