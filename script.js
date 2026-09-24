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
        github: "https://github.com/hilmaadiafadila-collab/portofolio"
    },
    {
        title: "CollabBuy",
        tech: "C#, Windows Forms, MySQL",
        desc: "Platform group-buying/pre-order kolaboratif",
        github: "https://github.com/razshelia/CollabBuy"
    }
];

const projectGrid = document.getElementById('projectGrid');

function getRepoPath(githubUrl) {
    const parts = githubUrl.replace('https://github.com/', '').replace(/\/$/, '').replace('.git', '');
    return parts;
}

async function loadRepoData(repoPath, cardElement) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repoPath}`);

        if (!response.ok) {
            throw new Error('Repo tidak ditemukan atau limit API tercapai');
        }

        const data = await response.json();

        const stars = data.stargazers_count;
        const language = data.language || '-';
        const updatedDate = new Date(data.updated_at).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });

        const metaEl = cardElement.querySelector('.repo-meta');
        metaEl.innerHTML = `
            <span><i class="fa-solid fa-code"></i> ${language}</span>
    <span><i class="fa-solid fa-arrows-rotate"></i> ${updatedDate}</span>
        `;
    } catch (error) {
        const metaEl = cardElement.querySelector('.repo-meta');
        metaEl.innerHTML = `<span class="repo-error">Data GitHub tidak tersedia</span>`;
        console.log('Gagal ambil data repo:', error.message);
    }
}

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
            <div class="repo-meta">Memuat data GitHub...</div>
            <div class="project-links">
                ${githubLink}
            </div>
        </div>
    `;
    projectGrid.appendChild(card);

    if (project.github) {
        const repoPath = getRepoPath(project.github);
        loadRepoData(repoPath, card);
    }
});