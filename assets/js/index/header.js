let inputsearch = document.getElementById('inputserch')
let searchbar = document.getElementById('head-searchbar')
let prevScrollPos = window.pageYOffset;



//Verica se o usuario clicou no campo de pesquisa e dispara o evento focus que vai selecionar automaticamente a partir do evento o campo desejado que nesse caso é a barra de pdsquisa
searchbar.addEventListener("click", ()=>{
    searchbar.classList.toggle('searching')

    inputsearch.focus();
    searchbar.style.transform = 'scale(1.2)';
    searchbar.style.boxShadow = '0px 1px 1px 0px rgba(0, 0, 0, 0.219)';
})



// Adicione um event listener para cliques no documento
document.addEventListener('click', function(event) {
    // Verifique se o clique ocorreu fora do campo desejado
    if (!searchbar.contains(event.target)) {
        // O clique ocorreu fora do campo desejado, execute a lógica desejada aqui
        searchbar.style.transform = 'scale(1)';
        }
    })

    

window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;

    // Verifica se a rolagem está para baixo
    if (prevScrollPos > currentScrollPos) {
        document.getElementById('header').style.top = '0'; // Exibe o cabeçalho
    } else {
        document.getElementById('header').style.top = '-100px'; // Esconde o cabeçalho
    }
    prevScrollPos = currentScrollPos;
});
