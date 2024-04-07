function calculateTimeRemaining() {
  var now = new Date();
  var eventTime = new Date();
  eventTime.setHours(04); // 6 PM
  eventTime.setMinutes(27); // 10 minutes
  eventTime.setSeconds(30); // 0 seconds

  // Check if event time has already passed for today
  if (now > eventTime) {
    // Calculate time for tomorrow
    eventTime.setDate(eventTime.getDate() + 1);
  }

  var timeRemaining = eventTime - now;

  var hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
  var minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { hours: hoursRemaining, minutes: minutesRemaining, seconds: secondsRemaining };
}

// Function to update the remaining time every second
function updateRemainingTime() {
  var timeRemaining = calculateTimeRemaining();
  document.getElementById('suhoor').innerHTML = timeRemaining.hours + ' : ' + timeRemaining.minutes + ' : ' + timeRemaining.seconds ;
}

// Update the remaining time initially
updateRemainingTime();

// Update the remaining time every second
setInterval(updateRemainingTime, 1000);