const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  const currentTime = date.toLocaleTimeString();
  // console.log(currentTime);
  clock.innerHTML = currentTime;
}, 1000);
