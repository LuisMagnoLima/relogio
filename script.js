function updateClock() {
  let now = new Date();
  document.getElementById("horas").textContent = String(
    now.getHours()
  ).padStart(2, "0");
  document.getElementById("minutos").textContent = String(
    now.getMinutes()
  ).padStart(2, "0");
  document.getElementById("segs").textContent = String(
    now.getSeconds()
  ).padStart(2, "0");
}

setInterval(updateClock, 1000);
updateClock();
