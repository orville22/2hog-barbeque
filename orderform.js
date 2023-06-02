//DELIVERY type selection--If a delivery is selected, display address. else display pickup location
const deliveryType = document.getElementsByName('delivery-type');
const deliveryAddress = document.getElementById('delivery-address');
const pickupAddress = document.getElementById('pickup-address');

deliveryType.forEach((type)=> {
  type.addEventListener('change', ()=> {
    let selected = type.value;
    if(selected == 'delivery') {
      deliveryAddress.style.display = 'flex';
      pickupAddress.style.display = 'none';
    }
    if(selected == 'pickup'){
      deliveryAddress.style.display = 'none';
      pickupAddress.style.display = 'block';
    }
  })
})

//FORM VALIDATION
const orderForm = document.getElementById('order-form');

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('customer-name');
  const email = document.getElementById('customer-email');
  const mobile = document.getElementById('customer-mobile');
  const address = document.getElementById('customer-address');
  const customer = document.querySelector('.customer');
  const totalPrice = parseInt(document.querySelector('#total-price').textContent.slice(1));

  //Remove/reset all error messages
  const errorMessages = orderForm.querySelectorAll('.error-container');
  errorMessages.forEach((errorMessage) => {
      errorMessage.remove();
  })
  ////

  //Checks if ORDER is present
  if(totalPrice == 0) {
    const noOrderMessage = document.createElement('p');
    noOrderMessage.className = 'error-container';
    noOrderMessage.innerHTML = 'No order to process. Add an item.'
    orderForm.appendChild(noOrderMessage);
    console.log(totalPrice)
  }

  //validates customer info
  const validateField = function(element, fieldName) {
    element.style.border = "none";

    if(element.value === '') {
      let errorContainer = document.createElement('p');
      let errorMessage = `Please enter your ${fieldName}`;

      errorContainer.className = 'error-container';
      errorContainer.textContent = errorMessage;
      customer.append(errorContainer);
      element.style.border = '2px solid red';

    }else if(element === mobile) { //mobile number validation
      const regex = /^(\+?63|0)9\d{9}$/;
      const formattedMobile = element.value.replace(/\s/g, "");
      if(!regex.test(formattedMobile)) {
        mobile.value = '';
        let errorContainer = document.createElement('p');
        let errorMessage = 'Please enter a valid mobile number.'
        errorContainer.className = 'error-container';
        errorContainer.textContent = errorMessage;
        customer.append(errorContainer);
        mobile.style.border = '2px solid red';
      }
      console.log(formattedMobile)
    }
  }

  validateField(name, 'name');
  validateField(email, 'email');
  validateField(mobile, 'mobile number');
  validateField(address, 'address');
})


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