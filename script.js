const body = document.getElementById("body");
const button = document.getElementById("button");
const name = document.getElementById("name");
const number = document.getElementById("number");
const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const mm = document.getElementById("mm");
const yy = document.getElementById("yy");
const expiry = document.getElementById("expiry");
const cardCvc = document.getElementById("cardCvc");
const cvc = document.getElementById("cvc");


const handleClick = (e) => {
    e.preventDefault();
    body.innerHTML = "<h1>THANK YOU!</h1> <h5>We've added your card details</h5> <button>Continue</button>"
    cardName.innerText = name.value;
    cardNumber.innerText = number.value;
    expiry.innerText = `${mm.value}/${yy.value}`;
    cardCvc.innerText = cvc.value;
}

button.addEventListener("click", handleClick)