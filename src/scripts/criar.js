import db from "../db/conexão.js"


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
    const tokeUsuario = localStorage.getItem('@QI:token')
    const geradorId = Math.floor(Math.random() * (0, 999999999999) + 1)

    const titulo = document.querySelector('.titulo')
    const descricao = document.querySelector('.descricao')

    const botaoSalvar = document.querySelector('.botao__salvar')
    botaoSalvar.addEventListener('click', (evento) => {
        evento.preventDefault()

        if (titulo.value != '' && descricao.value != '') {
            console.log(1)
            const inf = db.collection("ideias");

            const ideia = {
                idUsuario: tokeUsuario,
                nomeIdeia: titulo.value,
                descricaoIdeia: descricao.value,
                autor: false,
                idIdeia: geradorId,
                status: "Analise"
            }
            
            inf.doc(geradorId.toString()).set(ideia)
            document.querySelector('dialog').showModal()
        }

       
    })
}
criarIdeia()