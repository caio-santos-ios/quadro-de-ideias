export const botaoEntrarConta = document.querySelector('.botao__entar__conta')
botaoEntrarConta.addEventListener('click', (evento) => {
    evento.preventDefault()
    
    
    document.location.replace('./home.html')
})

export const botaoVoltar= document.querySelector('.botao__voltar')
botaoVoltar.addEventListener('click', (evento) => {
    evento.preventDefault()
    
    document.location.replace('../.././index.html')
})
