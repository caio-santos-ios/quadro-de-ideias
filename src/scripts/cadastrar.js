import db from "../db/conexão.js"

function fazerLogin() {

    const botaoFazerLogin = document.querySelector('.botao__fazer__login')
    botaoFazerLogin.addEventListener('click', (evento) => {
        evento.preventDefault()

        document.location.replace('../pages/login.html')
    })
}
fazerLogin()

function cadastrarUsuario() {
    const usuario = document.querySelector('.usuario')
    const senha = document.querySelector('.senha')


    const botaoCadastrar = document.querySelector('.botao__cadastrar')
    botaoCadastrar.addEventListener('click', (evento) => {
        evento.preventDefault()



        const usuarioCadastrar = {
            nome: usuario.value,
            password: senha.value
        }

        db.collection('usuarios').add(usuarioCadastrar)

        document.querySelector('form').reset()
    })
}
cadastrarUsuario()