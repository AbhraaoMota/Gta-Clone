 const botao = document.querySelector(".btn-plataforma");

 const elementoPlataforma = document.querySelector(".btn-plataforma .plataforma");

 botao.addEventListener("click", () => {

    elementoPlataforma.classList.toggle("ativo");

    // const botaoEstaAberto = elementoPlataforma.classList.contains("ativo")
    
    // if(botaoEstaAberto) {
    //     elementoPlataforma.classList.remove("ativo")
    // }else{
    //     elementoPlataforma.classList.add("ativo")
    // }

 });
 