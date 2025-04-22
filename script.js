document.addEventListener("DOMContentLoaded", function () {
    // Animação de fade-in na seção principal
    const mainSection = document.querySelector("main section");
    mainSection.style.opacity = 0;
    mainSection.style.transition = "opacity 2s";
    setTimeout(() => {
        mainSection.style.opacity = 1;
    }, 500);

    // Mudança de cor nos links do menu ao passar o mouse
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "red"; // Cor ao passar o mouse
        });

        link.addEventListener("mouseout", function () {
            this.style.color = ""; // Retorna à cor original
        });
    });

    // Alerta ao clicar em "FALE CONOSCO"
    const faleConosco = document.querySelector("nav a[href='contato.html']");
    if (faleConosco) {
        faleConosco.addEventListener("click", function (event) {
            event.preventDefault(); // Evita o redirecionamento imediato
            alert("Você será direcionado para a página de contato!");
            window.location.href = this.href; // Redireciona após o alerta
        });
    }
});
