document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";
    drops.forEach((y, i) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}
setInterval(drawMatrix, 50);

const projects = [
    { title: "Football Prediction System", description: "A high-accuracy football prediction tool using machine learning." },
    { title: "E-commerce Website", description: "A fully responsive e-commerce platform with secure payment integration." },
    { title: "Portfolio Website", description: "A modern, interactive portfolio showcasing my projects and skills." }
];

function displayProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        container.appendChild(projectCard);
    });
}

document.addEventListener("DOMContentLoaded", displayProjects);