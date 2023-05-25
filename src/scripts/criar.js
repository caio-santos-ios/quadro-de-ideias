const botaoVoltar = document.querySelector('.botao__voltar')
botaoVoltar.addEventListener('click', (evento)=>{
    evento.preventDefault()

    document.location.replace('./home.html')
})