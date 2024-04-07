function calculateTimeLeft() {
  var now = new Date();
  var targetDate = new Date();
  targetDate.setHours(18); // 6 PM
  targetDate.setMinutes(19); // 10 minutes
  targetDate.setSeconds(0); // 0 seconds

  var timeLeft = targetDate - now;

  if (timeLeft < 0) {
    // If time is already over, calculate time for tomorrow
    targetDate.setDate(targetDate.getDate() + 1);
    timeLeft = targetDate - now;
  }

  var hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
  var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft };
}

// Function to update the time left every second
function updateTimeLeft() {
  var timeLeft = calculateTimeLeft();
  document.getElementById('left').innerHTML = timeLeft.hours + ' : ' + timeLeft.minutes + ' : ' + timeLeft.seconds ;
}

// Update the time left initially
updateTimeLeft();

// Update the time left every second
setInterval(updateTimeLeft, 1000);