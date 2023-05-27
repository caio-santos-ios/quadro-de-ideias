const botaIrCriar = document.querySelector('.bota__ir__criar')
botaIrCriar.addEventListener('click', (evento) => {
    evento.preventDefault()

    document.location.replace('./criar.html')
})

const botaIrHistorico = document.querySelector('.bota__ir__historico')
botaIrHistorico.addEventListener('click', (evento) => {
    evento.preventDefault()
    
    
    document.location.replace('./historico.html')
})

const botaIrHome = document.querySelector('.botao__ir__home')
botaIrHome.addEventListener('click', (evento) => {
    evento.preventDefault()
    
    localStorage.removeItem('@QI:tokenUsuario')
    document.location.replace('../.././index.html')
})