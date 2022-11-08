const body = document.getElementById("body");
const button = document.getElementById("button");

const handleClick = (e) => {
    e.preventDefault();
    body.innerHTML = "<h1>THANK YOU!</h1> <h5>We've added your card details</h5> <button>Continue</button>"
}

button.addEventListener("click", handleClick)