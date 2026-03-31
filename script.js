const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;
let radius = 0;

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let x = canvas.width / 2 + radius * Math.cos(angle);
  let y = canvas.height / 2 + radius * Math.sin(angle);

  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2);
  ctx.fillStyle = "cyan";
  ctx.fill();

  angle += 0.05;
  radius += 0.2;

  requestAnimationFrame(animate);
}

animate();