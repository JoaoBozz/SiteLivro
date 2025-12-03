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

const palavras = ["Dedicada", "Atenciosa", "Experiente", "Inspiradora"];
let i = 0;
const h1 = document.getElementById("troca");

setInterval(() => {
  // sai
  h1.classList.remove("entrando");
  h1.classList.add("saindo");

  setTimeout(() => {
    // troca palavra
    i = (i + 1) % palavras.length;
    h1.textContent = palavras[i];

    // entra
    h1.classList.remove("saindo");
    h1.classList.add("entrando");
  }, 600); // mesmo tempo do transition
}, 2000);

const modal = document.getElementById("modalPersonagem");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const fechar = document.querySelector(".fechar");

// Seleciona todos os cards
document.querySelectorAll(".cardPersonagem").forEach(card => {
    card.addEventListener("click", () => {

        const nome = card.querySelector("h1").innerText;

        // Texto placeholder gigante (troque pelo seu depois)
        const textoGrande = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse potenti. Mauris nec justo vel leo consequat
        faucibus. Sed sit amet ipsum a urna pulvinar feugiat.
        Vivamus tincidunt nulla at ipsum elementum, in commodo
        velit venenatis. Cras porta sem at arcu consequat,
        sed sodales lectus gravida. Aenean ac nisl non nunc 
        fermentum fermentum. (COLOQUE SEU TEXTO AQUI)
        `.repeat(8); // deixa grande

        modalTitulo.innerText = nome;
        modalTexto.innerText = textoGrande;

        modal.style.display = "flex";
    });
});

// Fechar no X
fechar.onclick = () => {
    modal.style.display = "none";
};

// Fechar clicando fora da caixa
modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};


// Seleciona tudo com a classe reveal
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
