import db from "../db/conexão.js"

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

        //console.log(usuarioCadastrar)
        document.querySelector('form').reset()
    })
}
cadastrarUsuario()