let inputsearch = document.getElementById('inputsearch')
let searchbar = document.getElementById('head-searchbar')
let iconsearch = document.getElementById('iconsearch')
let iconsearch2 = document.getElementById('iconsearch2')
let iconreturn = document.getElementById('iconreturn')



//Verica se o usuario clicou no campo de pesquisa e dispara o evento focus que vai selecionar automaticamente a partir do evento o campo desejado que nesse caso é a barra de pdsquisa
inputsearch.addEventListener("click", ()=>{
    iconsearch.classList.add('hidden');
    iconreturn.classList.remove('hidden');
    iconsearch2.classList.remove('hidden2');
    inputsearch.focus();
    searchbar.style.boxShadow = '0px 1.5px 3px 1px rgba(0, 0, 0, 0.219)';
})

iconsearch.addEventListener("click", ()=>{
    iconsearch.classList.add('hidden')
    iconreturn.classList.remove('hidden')
    inputsearch.focus();
    searchbar.style.boxShadow = '0px 1px 1px 1px rgba(0, 0, 0, 0.219)';
})

iconreturn.addEventListener('click', ()=>{
    iconsearch.classList.remove('hidden');
    iconreturn.classList.add('hidden');
    iconsearch2.classList.add('hidden2');
    searchbar.style.boxShadow = 'none';
    
})

// Adicione um event listener para cliques no documento
document.addEventListener('click', function(event) {

    // Verifique se o clique ocorreu fora do campo desejado
    if (!searchbar.contains(event.target)) {
        // O clique ocorreu fora do campo desejado, execute a lógica desejada aqui
        iconsearch.classList.remove('hidden');
        iconreturn.classList.add('hidden')
        iconsearch2.classList.add('hidden2');
        searchbar.style.boxShadow = 'none';

        }
    })


