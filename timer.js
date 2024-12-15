const future = new Date(2025, 0, 1, 10, 33, 30);
let x;
function timer() {
  let d = new Date();
  let ms = future.getTime() - d.getTime();
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hours = Math.floor(ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  document.getElementById("time").innerHTML = `days ${days} ${hours}:${minutes}:${seconds}`;
  x = setInterval(timer, 1000);
}
