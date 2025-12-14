// =======================
// ANIMAÇÃO DE APARECER
// =======================
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
    threshold: 0.3
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// =======================
// TROCA DE PALAVRAS
// =======================
const palavras = ["Dedicada", "Atenciosa", "Experiente", "Inspiradora"];
let i = 0;
const h1 = document.getElementById("troca");

setInterval(() => {
  h1.classList.remove("entrando");
  h1.classList.add("saindo");

  setTimeout(() => {
    i = (i + 1) % palavras.length;
    h1.textContent = palavras[i];

    h1.classList.remove("saindo");
    h1.classList.add("entrando");
  }, 600);
}, 2000);


// =======================
// MODAL COM TEXTOS DIFERENTES
// =======================
const modal = document.getElementById("modalPersonagem");
const tituloModal = document.getElementById("modalTitulo");
const textoModal = document.getElementById("modalTexto");
const fechar = document.querySelector(".fechar");

// TEXTOS ESPECÍFICOS DE CADA PERSONAGEM
const textosPersonagens = {
    "Virgília": `

Rio de Janeiro, 18—

Meu querido Brás,

Escrevo-lhe porque ultimamente tenho sido tomada por uma inquietação que não ouso confessar a ninguém. Nossos encontros, antes tão leves e arrebatadores, agora pesam sobre mim como lembranças que não sei se devo guardar ou enterrar.

Sei que você me recorda como a moça que abandonou um amor para casar-se com um político promissor. Mas peço que compreenda: minha escolha não foi feita apenas por conveniência, mas por medo. Medo da instabilidade, medo de perder minha posição, medo de não corresponder às expectativas de minha família.

E, ainda assim, mesmo depois de tantos anos, você continua sendo uma memória que me escapa no silêncio das noites. Não sei se fomos corajosos demais ou covardes demais — talvez um pouco dos dois.

Espero que, ao menos em suas lembranças póstumas, eu não apareça como vilã, mas como alguém que desejou amar, embora não tenha sabido como.

Com afeto, Virgília

    `,

    "Brás Cubas": `
Título: Sobre a vaidade e o vazio da existência — uma reflexão póstuma

Opinião de: Brás Cubas

Tendo já deixado este mundo, posso escrever com a liberdade que só os mortos possuem. E afirmo: minha vida foi marcada pela vaidade, pela ociosidade e por um desperdício monumental de oportunidades. Vivi cercado de privilégios, e justamente por isso fiz tão pouco — o conforto amolece mais que a dor.

Criamos ilusões para justificar nossa própria mediocridade: a política, a glória, o amor proibido. Fui atrás de tudo isso, e nada me trouxe frutos reais. O que restou de mim? Talvez uma história engraçada, talvez uma crítica à elite sem propósito da qual fiz parte.

Minha opinião, se ainda vale algo, é que o maior problema do homem é a vaidade que o impede de agir. A vida exige esforço; eu escolhi o devaneio. Mas tive, ao menos, uma vantagem: por não ter filhos, não transmiti às gerações seguintes a herança de meus fracassos.

Talvez essa seja minha única vitória.

    `,

    "Quincas Borba": `
   Entrevistador: Senhor Quincas Borba, poderia explicar sua filosofia do Humanitismo?

Quincas Borba: Com prazer. O Humanitismo é a única doutrina capaz de explicar a verdadeira natureza do mundo. Para começar, não existe indivíduo — existe apenas o Humanitas, a entidade universal da qual somos manifestações temporárias.

Entrevistador: E como isso se aplica à vida prática?

Quincas Borba: Simples: o sofrimento de um homem ou a vitória de outro não significam nada isoladamente. Tudo é benefício de Humanitas. Quando dois homens lutam por comida, por exemplo, o vencedor não triunfa sozinho — é Humanitas celebrando sua obra; o derrotado, bem… serve de lição. Ao vencedor, as batatas!

Entrevistador: Brás Cubas acreditava em sua teoria?

Quincas Borba: Brás era um homem observador, mas hesitante. Não tinha o impulso necessário para compreender a grandeza de meu pensamento. Morreu sem entender que a vida é um grande experimento filosófico.

Entrevistador: E o senhor, viveu feliz?

Quincas Borba: Felicidade? Isso é uma invenção dos que precisam se consolar. Vivi como pude — o resto deixo ao Humanitas.

    `
};


// =======================
// ABRIR MODAL
// =======================
document.querySelectorAll(".cardPersonagem").forEach(card => {
    card.addEventListener("click", () => {

        const nome = card.querySelector("h1").innerText.trim();

        tituloModal.innerText = nome;
        textoModal.innerText = textosPersonagens[nome] || "Texto não encontrado.";

        modal.style.display = "flex";
    });
});


// =======================
// FECHAR MODAL
// =======================
fechar.onclick = () => {
    modal.style.display = "none";
};

modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};
