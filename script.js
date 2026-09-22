const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const projects = [
    {
        title: "Slicing Website Portfolio",
        tech: "HTML, CSS, JavaScript",
        desc: "Tugas kuliah slicing website responsive dengan DOM manipulation.",
        github: "https://github.com/razshelia/CollabBuy.git"
    },
    {
        title: "RakitKru.id",
        tech: "Business Development, Pitch Deck",
        desc: "Project kompetisi GEMASTIK XIX — platform fractional talent cloud.",
        github: "https://github.com/hilmaadiafadila-collab/SewaAlatCamping.git"
    }
];

const projectGrid = document.getElementById('projectGrid');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    // Kalau link kosong, link nggak ditampilkan
    const githubLink = project.github
        ? `<a href="${project.github}" target="_blank">GitHub →</a>`
        : '';
    const demoLink = project.demo
        ? `<a href="${project.demo}" target="_blank">Live Demo →</a>`
        : '';

    card.innerHTML = `
        <div class="card-body">
            <p class="tech">${project.tech}</p>
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="project-links">
                ${githubLink}
                ${demoLink}
            </div>
        </div>
    `;
    projectGrid.appendChild(card);
});