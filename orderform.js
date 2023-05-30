//FORM VALIDATION
const name = document.getElementById('customer-name');
const email = document.getElementById('customer-email');
const mobile = document.getElementById('customer-mobile');
const address = document.getElementById('customer-address');

if(name.value.length < 1 ) {
  console.log('invalid name')
}

///////////////////////////////////////////

const items = document.querySelectorAll('.order-item');
const plusButtons = document.querySelectorAll(".plusOne");
const minusButtons = document.querySelectorAll(".minusOne");
const quantities = document.querySelectorAll(".item-qty");
let prices = [];

// Update qty
plusButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    let quantityElement = quantities[i];
    if (quantityElement) {
      let quantityValue = parseInt(quantityElement.value);
      quantityValue++;
      quantityElement.value = quantityValue;
      calculateTotalPrice();
    }
  });
});

minusButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    let quantityElement = quantities[i];
    if (quantityElement) {
      let quantityValue = parseInt(quantityElement.value);
      if (quantityValue > 0) {
        quantityValue--;
        quantityElement.value = quantityValue;
      }
      calculateTotalPrice();
    }
  });
});

function calculateTotalPrice() {
  let totalPrice = 0;

  items.forEach((item, i) => {
    const price = prices[i];
    const quantityElement = quantities[i];
    if (quantityElement) {
      const quantityValue = parseInt(quantityElement.value);
      totalPrice += price * quantityValue;
    }
  });
  //updates Total Price display
  document.querySelector('#total-price').textContent = `₱${totalPrice.toFixed(2)}`;
}

// Store prices in an array
items.forEach((item) => {
  const price = parseFloat(item.querySelector(".item-price").textContent.slice(1));
  prices.push(price);
});


//Online order arrows and group visibility
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const orderGroup1 = document.querySelector(".order-group-1");
const orderGroup2 = document.querySelector(".order-group-2");
const viewPortWidth = window.innerWidth;

arrowLeft.addEventListener("click", () => {
    orderGroup1.style.display = "block";
    orderGroup2.style.display = "none";
    arrowLeft.style.display = "none";
    arrowRight.style.display = "block";
});
arrowRight.addEventListener("click", () => {
    orderGroup1.style.display = "none";
    orderGroup2.style.display = "block";
    arrowLeft.style.display = "block";
    arrowRight.style.display = "none";
});

function updateOrderGroupVisibility() {
    var viewportWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    if (viewportWidth >= 480) {
        orderGroup1.style.display = "block";
        orderGroup2.style.display = "block";
        arrowLeft.style.display = "none";
        arrowRight.style.display = "none";
    }
    if (viewportWidth <= 480) {
        if (orderGroup2.style.display == "block") {
            orderGroup1.style.display = "block";
            orderGroup2.style.display = "none";
            arrowRight.style.display = "block";
        } else if (orderGroup2.style.display == "none") {
            arrowLeft.style.display = "none";
            arrowRight.style.display = "block";
        }
    }
}

window.addEventListener("resize", updateOrderGroupVisibility);