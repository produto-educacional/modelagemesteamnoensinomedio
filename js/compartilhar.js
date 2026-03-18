function configurarCompartilhamento() {
    const urlAtual = window.location.href;
    const titulo = document.title;
    const texto = "Conheça este produto educacional:";

    const linkWhatsApp = document.getElementById("link-whatsapp");
    const linkEmail = document.getElementById("link-email");
    const qrCodeImg = document.getElementById("qrcode-img");
    const btnShareNativo = document.getElementById("btn-share-nativo");

    if (linkWhatsApp) {
        linkWhatsApp.href =
            `https://wa.me/?text=${encodeURIComponent(texto + " " + urlAtual)}`;
    }

    if (linkEmail) {
        linkEmail.href =
            `mailto:?subject=${encodeURIComponent(titulo)}&body=${encodeURIComponent(texto + "\n" + urlAtual)}`;
    }

    if (qrCodeImg) {
        qrCodeImg.src =
            `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(urlAtual)}`;
    }

    if (btnShareNativo && !navigator.share) {
        btnShareNativo.style.display = "none";
    }
}

function copiarLink() {
    const link = window.location.href;
    const mensagem = document.getElementById("mensagem-copiado");

    navigator.clipboard.writeText(link).then(() => {
        if (mensagem) {
            mensagem.textContent = "Link copiado com sucesso!";
        }
    });
}

async function compartilharNativo() {
    if (!navigator.share) return;

    try {
        await navigator.share({
            title: document.title,
            text: "Conheça este produto educacional:",
            url: window.location.href
        });
    } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
    configurarCompartilhamento();
});
