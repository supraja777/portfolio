const filterProjects = (category) => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const catText = card.querySelector('.category').innerText.toLowerCase();
        if (category === 'all' || catText.includes(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
};