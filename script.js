const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Lista de puntos (cuerpo del dragón)
let points = [];

let angle = 0;
let radius = 0;

// Centro (puedes hacerlo seguir el dedo luego)
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

function animate() {
  // Fondo con efecto estela
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Posición de la cabeza (espiral)
  let x = centerX + radius * Math.cos(angle);
  let y = centerY + radius * Math.sin(angle);

  // Agregamos la cabeza al cuerpo
  points.push({ x, y });

  // Dibujar cuerpo
  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    // Tamaño decrece (efecto cuerpo)
    let size = 6 * (1 - i / points.length);

    ctx.beginPath();
    ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
    ctx.fillStyle = "cyan";
    ctx.fill();
  }

  // Limitar tamaño del cuerpo
  if (points.length > 120) {
    points.shift(); // elimina el más viejo
  }

  // Movimiento
  angle += 0.08;
  radius += 0.3;

  requestAnimationFrame(animate);
}

animate();