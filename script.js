let totalPrice = 0;
let count = 1;

const total = document.getElementById("total");

const blankArr = [];
function calculateCard(card, voucherName) {
  const name = card.querySelector("h3").innerText;
  let totalName = document.getElementById(voucherName);
  const createPara = document.createElement("p");
  createPara.innerText = count + ". " + name;
  createPara.classList.add("text-lg");
  if (blankArr.includes(name)) {
    const message = `no Duplicate Allowed`;
    throw message;
  }
  blankArr.push(name);
  totalName.appendChild(createPara);
  count++;
}

function calculatePrice(card) {
  const productPrice = card.querySelector("span").innerText;
  const priceArr = productPrice.split(" ")[1];
  const priceNumber = parseFloat(priceArr);
  totalPrice += priceNumber;

  document.getElementById("totalPrice").innerText = totalPrice;
}

function discount() {
  const getDiscount = document.getElementById("discountPrice");
  const couponInput = document.getElementById("input-field").value;
  const errorMessage = document.getElementById("error-message");
  const inputInSensitive = couponInput.split(" ").join("").toUpperCase();

  const discountPrice = (totalPrice * 20) / 100;

  // condition

  if (totalPrice >= 200) {
    if (inputInSensitive === "SELL200") {
      getDiscount.innerText = discountPrice.toFixed(2);
      errorMessage.innerText = "";
      const discountTotal = totalPrice - discountPrice;
      total.innerText = discountTotal.toFixed(2);
      errorMessage.innerText = "";
      document.getElementById("apply-btn").setAttribute("disabled", true);
    } else if (!(couponInput === "")) {
      errorMessage.innerText = "Wrong coupon";
    }
  } else {
    errorMessage.innerText = `Your purchase amount is below 200. purchase any more`;
  }
  document.getElementById("input-field").value = "";
}

function totalAmount() {
  total.innerText = totalPrice.toFixed(2);
}



