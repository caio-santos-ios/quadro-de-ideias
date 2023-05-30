import db from "../db/conexão.js"


export const botaoEntrarConta = document.querySelector('.botao__entar__conta')
botaoEntrarConta.addEventListener('click', (evento) => {
    evento.preventDefault()

    //const

    const usuario = document.querySelector('.usuario').value
    const senha = document.querySelector('.senha').value

    
    const msgErro = document.querySelector('.msg__usuario__incorreto')
    if (msgErro != null) {
        msgErro.remove()
    }

    db.collection("usuarios").get()
        .then((resposta) => {

            resposta.forEach((user) => {
                console.log(user.data())
                if (user.data().nome == usuario && user.data().password == senha) {

                    localStorage.setItem("@QI:token", user.id)
                    document.location.replace('./home.html')
                } else {

                    //console.log('usuario não conectado')
                }
            })
        })
})







export const botaoVoltar = document.querySelector('.botao__voltar')
botaoVoltar.addEventListener('click', (evento) => {
    evento.preventDefault()

    document.location.replace('../.././index.html')
})
