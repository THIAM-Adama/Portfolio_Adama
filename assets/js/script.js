/*
========================================================
            PORTFOLIO ADAMA THIAM
            Fichier JavaScript principal
========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio chargé avec succès !");

    /* ==========================
       Animation d'apparition
    ========================== */

    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.2
    });

    elements.forEach(element=>{

        observer.observe(element);

    });

});