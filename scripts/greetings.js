document.addEventListener("DOMContentLoaded", function() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greeting = (currentHour < 18) ? "Dzień dobry" : "Dobry wieczór";
    document.getElementById("greetings").textContent = greeting + " użytkowniku!";
});
