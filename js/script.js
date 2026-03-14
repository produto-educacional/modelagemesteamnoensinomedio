document.addEventListener("DOMContentLoaded", () => {

    /* MENU LATERAL */
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    /* MENU DE ACESSIBILIDADE */
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');

    if (botaoAcessibilidade && opcoesAcessibilidade) {

        botaoAcessibilidade.addEventListener('click', () => {

            const aberto = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';

            botaoAcessibilidade.setAttribute('aria-expanded', (!aberto).toString());

            opcoesAcessibilidade.classList.toggle('escondido');

            botaoAcessibilidade.classList.toggle('aberto');

        });

    }
    /* FONTE */
    let escalaFonte = 1;

    document.getElementById('aumentar-fonte').addEventListener('click', () => {
        escalaFonte += 0.1;
        document.documentElement.style.fontSize = `${16 * escalaFonte}px`;
    });

    document.getElementById('diminuir-fonte').addEventListener('click', () => {
        escalaFonte -= 0.1;
        if (escalaFonte < 0.8) escalaFonte = 0.8;
        document.documentElement.style.fontSize = `${16 * escalaFonte}px`;
    });

    /* CONTRASTE */
    document.getElementById('alterna-contraste').addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });
})

const menuLinks = document.querySelectorAll('.sidebar a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });


    function voltarTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

    /* ==============================
   SLIDER DE ARTIGOS
============================== */

let artigoAtual = 0;

function mostrarArtigo(index) {

    const artigos = document.querySelectorAll('.artigo-slide');

    if (!artigos.length) return;

    artigos.forEach(artigo => {
        artigo.classList.remove('active');
    });

    if (index >= artigos.length) {
        artigoAtual = 0;
    } 
    else if (index < 0) {
        artigoAtual = artigos.length - 1;
    } 
    else {
        artigoAtual = index;
    }

    artigos[artigoAtual].classList.add('active');
}

function mudarArtigo(direcao) {
    mostrarArtigo(artigoAtual + direcao);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarArtigo(0);
});