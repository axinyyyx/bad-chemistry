const canvas = document.getElementById('chemicalBondsCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Bond {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.angle = Math.random() * Math.PI * 2;
    this.speed = Math.random() * 2 + 1;
    this.length = Math.random() * 50 + 30;
    this.type = Math.floor(Math.random() * 3); // 0: single, 1: double, 2: triple
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    if (this.x < -this.length || this.x > canvas.width + this.length ||
        this.y < -this.length || this.y > canvas.height + this.length) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.angle = Math.random() * Math.PI * 2;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(173, 216, 230, 0.5)';
    ctx.lineWidth = 2;

    const x1 = this.x - Math.cos(this.angle) * this.length / 2;
    const y1 = this.y - Math.sin(this.angle) * this.length / 2;
    const x2 = this.x + Math.cos(this.angle) * this.length / 2;
    const y2 = this.y + Math.sin(this.angle) * this.length / 2;

    // Draw single, double, or triple bond
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    if (this.type >= 1) {
      ctx.beginPath();
      ctx.moveTo(x1, y1 - 5);
      ctx.lineTo(x2, y2 - 5);
      ctx.stroke();
    }
    if (this.type === 2) {
      ctx.beginPath();
      ctx.moveTo(x1, y1 + 5);
      ctx.lineTo(x2, y2 + 5);
      ctx.stroke();
    }
  }
}

const bonds = Array.from({ length: 20 }, () => new Bond());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bonds.forEach(bond => {
    bond.update();
    bond.draw();
  });
  requestAnimationFrame(animate);
}

animate();

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});