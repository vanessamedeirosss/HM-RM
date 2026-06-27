/* ==========================================================
   SCROLL SUAVE PARA LINKS INTERNOS
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================================
   DESTACA O LINK DA PÁGINA ATUAL
========================================================== */

const paginaAtual = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

    if(link.getAttribute("href") === paginaAtual){

        link.classList.add("active");

    }

});


/* ==========================================================
   BOTÃO VOLTAR AO TOPO
========================================================== */

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "btnTopo";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        botaoTopo.style.display = "block";

    }

    else{

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================================
   ANO AUTOMÁTICO NO RODAPÉ (SE EXISTIR)
========================================================== */

const ano = document.getElementById("ano");

if(ano){

    ano.textContent = new Date().getFullYear();

}


/* ==========================================================
   MENSAGEM DE BOAS-VINDAS (OPCIONAL)
========================================================== */

window.addEventListener("load", function(){

    console.log("Produto Educacional carregado com sucesso.");

});
