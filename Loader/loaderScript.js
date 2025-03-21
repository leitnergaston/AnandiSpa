// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(() => {
//         document.querySelector(".loader").style.display = "none";
//         document.body.style.overflow = "auto";
//     }, 2000);
// })

// tiempo del loader para detectar cuando toda la pagina se ha cargado por compelto
window.onload = function () {
    setTimeout(() => {
        document.querySelector(".loader").classList.add("loader-hidden");
        // Vuelve a habilitar el scroll
        document.body.style.overflow = 'auto';
    }, 1500);
}
