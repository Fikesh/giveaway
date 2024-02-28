var countDown = new Date("March 2, 2024 12:00:00").getTime();

var myCountdownFunc = setInterval(function () {
  var now = new Date().getTime();
  var remainingTime = countDown - now;

  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  var digitdays = days.toString().padStart(2, '0');
  var digithours = hours.toString().padStart(2, '0');
  var digitminutes = minutes.toString().padStart(2, '0');
  var digitseconds = seconds.toString().padStart(2, '0');

  document.getElementById("days").textContent = `${digitdays}`;
  document.getElementById("hours").textContent = `${digithours}` ;
  document.getElementById("mins").textContent = `${digitminutes}` ;
  document.getElementById("secs").textContent = `${digitseconds}`;

  if (remainingTime < 0) {
    countDown = new Date(countDown + 10 * 24 * 60 * 60 * 1000).getTime();
    remainingTime = countDown - now;
}
}, 1000);
