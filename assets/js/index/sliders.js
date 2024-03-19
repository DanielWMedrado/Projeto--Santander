let radio = document.querySelector('.manual-btn')
let cont = 1

//Verfica se o radio esta marcado e define a condição verdadeira pra deixar ele marcado
document.getElementById('radio1').checked = true

//Setar o intervalo entre as imagens
setInterval(()=> {
    proximaImg()
}, 8000)


//Função responsavel por contar os slides, qual silde está e marcar o radio correspondente ao slide
function proximaImg() {
    cont++

    if (cont > 3) { 
        cont = 1

    }

    document.getElementById('radio'+cont).checked = true
}

