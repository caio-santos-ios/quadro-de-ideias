import { listaUsuarios } from "../db/usuario.js"



export function autenticacao(arr) {
    const usuario = document.querySelector('.usuario')
    const senha = document.querySelector('.senha')

    listaUsuarios.forEach(usuarioAutenticado => {
        //console.log(usuario.value)
        //console.log(senha.value)
        //console.log(usuarioAutenticado.nome)

        if (usuarioAutenticado.nome == usuario.value && usuarioAutenticado.senha == senha.value) {

            document.location.replace('./home.html')
            localStorage.setItem('@QI:tokenUsuario', JSON.stringify(usuarioAutenticado))
        } else {

            senha.classList.add('usuario__incorreto')
            senha.insertAdjacentHTML('afterend', `<p class="msg__usuario__incorreto">Usuario incorreto</p>`)
        }
    })

}
//autenticacao(listaUsuarios)


export const botaoEntrarConta = document.querySelector('.botao__entar__conta')
botaoEntrarConta.addEventListener('click', (evento) => {
    evento.preventDefault()

    const msgErro = document.querySelector('.msg__usuario__incorreto')
    if (msgErro != null) {
        msgErro.remove()
    }
    autenticacao(listaUsuarios)
})







export const botaoVoltar = document.querySelector('.botao__voltar')
botaoVoltar.addEventListener('click', (evento) => {
    evento.preventDefault()

    document.location.replace('../.././index.html')
})
