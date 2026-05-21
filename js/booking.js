const params = new URLSearchParams(window.location.search);

const selectedPackage =
params.get("package") || "Basic Package";

const prices = {
    "Basic Package": 299,
    "Premium Package": 699,
    "Deluxe Package": 999,
    "Luxury Package": 1499,
    "Family Package": 899,
    "Custom Package": 1200
};

document.getElementById("selectedPackage").innerText =
"You are booking: " + selectedPackage;

document.getElementById("totalPrice").innerText =
"Total Price: $" + prices[selectedPackage];

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Booking Confirmed! ✈️");

    form.reset();

});