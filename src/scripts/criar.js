const botaoVoltar = document.querySelector('.botao__voltar')
botaoVoltar.addEventListener('click', (evento) => {
    evento.preventDefault()

    document.location.replace('./home.html')
})

const botaIrHistorico = document.querySelector('.botao__ir__historico')
botaIrHistorico.addEventListener('click', (evento) => {
    evento.preventDefault()

    document.location.replace('../pages/historico.html')
})


/* função para criar nova ideia */
export function criarIdeia() {
    const tokeUsuario = JSON.parse(localStorage.getItem('@QI:tokenUsuario'))

    const titulo = document.querySelector('.titulo')
    const descricao = document.querySelector('.descricao')

    const botaoSalvar = document.querySelector('.botao__salvar')

    botaoSalvar.addEventListener('click', (evento) => {
        evento.preventDefault()
        let i = JSON.parse(localStorage.getItem('@QI:listaIdeias'))


        const ideia = {
            idUsuario: tokeUsuario.id,
            nomeIdeia: titulo.value,
            descricaoIdeia: descricao.value,
            autor: false,
            idIdeia: i.length + 1,
            status: null
        }
        i.push(ideia)
        localStorage.setItem('@QI:listaIdeias', JSON.stringify(i))

        document.querySelector('dialog').showModal()
    })
}
criarIdeia()