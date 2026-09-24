const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const navLinkItems = navLinks.querySelectorAll('a');

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

const projects = [
    {
        title: "Slicing Website Portfolio",
        tech: "HTML, CSS, JavaScript",
        desc: "Tugas kuliah slicing website responsive dengan DOM manipulation.",
        github: "https://github.com/hilmaadiafadila-collab/portofolio.git"
    },
    {
        title: "CollabBuy",
        tech: "C#, Windows Forms, MySQL",
        desc: "Platform group-buying/pre-order kolaboratif",
        github: "https://github.com/razshelia/CollabBuy.git"
    }
];

const projectGrid = document.getElementById('projectGrid');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const githubLink = project.github
        ? `<a href="${project.github}" target="_blank">GitHub →</a>`
        : '';

    card.innerHTML = `
        <div class="card-body">
            <p class="tech">${project.tech}</p>
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="project-links">
                ${githubLink}
            </div>
        </div>
    `;
    projectGrid.appendChild(card);
});