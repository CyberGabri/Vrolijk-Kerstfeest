function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("card").style.display = "block";
  mostrarMensagens();
  criarNeve();
  setInterval(fogos, 1500);
}

function mostrarMensagens() {
  const msgs = document.querySelectorAll(".msg");
  msgs.forEach((msg, i) => {
    setTimeout(() => {
      msg.style.display = "block";
    }, i * 2000);
  });
}
function criarNeve() {
  for (let i = 0; i < 40; i++) {
    const floco = document.createElement("div");
    floco.className = "snow";
    floco.innerHTML = "❄";
    floco.style.left = Math.random() * 100 + "vw";
    floco.style.fontSize = (10 + Math.random() * 20) + "px";
    floco.style.animationDuration = (6 + Math.random() * 6) + "s";
    document.body.appendChild(floco);
  }
}
function fogos() {
  const f = document.createElement("div");
  f.style.position = "absolute";
  f.style.width = "6px";
  f.style.height = "6px";
  f.style.borderRadius = "50%";
  f.style.background = `hsl(${Math.random()*360},100%,60%)`;
  f.style.left = Math.random() * 100 + "vw";
  f.style.top = Math.random() * 50 + "vh";
  f.style.animation = "explode 1s linear";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 1000);
}
