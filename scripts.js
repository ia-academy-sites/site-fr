// Set the launch date (August 1, 2025)
const countDownDate = new Date("August 10, 2025 00:00:00").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const timeRemaining = countDownDate - now;
    
    // Calculate days, hours, minutes and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Format numbers to always have two digits
    const formatNumber = (number) => {
        return number < 10 ? '0' + number : number;
    };
    
    // Update the display
    document.getElementById("days").textContent = formatNumber(days);
    document.getElementById("hours").textContent = formatNumber(hours);
    document.getElementById("minutes").textContent = formatNumber(minutes);
    document.getElementById("seconds").textContent = formatNumber(seconds);
    
    // When countdown is finished
    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.querySelector(".countdown-container").innerHTML = "<p style='font-size: 2rem; color: #ff9500;'>Disponible maintenant!</p>";
    }
}, 1000);