document.addEventListener("DOMContentLoaded", () => {

    const galerias = document.querySelectorAll(".galeria-slider");

    galerias.forEach((galeria) => {

        const track = galeria.querySelector(".galeria-track");
        const btnAnterior = galeria.querySelector(".anterior");
        const btnProximo = galeria.querySelector(".proximo");

        const scrollAmount = 340; // distância do scroll (ajuste se quiser)

        btnAnterior.addEventListener("click", () => {
            track.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        btnProximo.addEventListener("click", () => {
            track.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });

    });

});
