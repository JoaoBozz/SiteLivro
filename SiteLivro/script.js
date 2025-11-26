const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
        } else {
            entry.target.classList.add("hidden");
            entry.target.classList.remove("visible");
        }
    });
}, {
    threshold: 0.3 // 20% visível na tela
});

// Seleciona tudo com a classe reveal
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
