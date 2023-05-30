import db from "../db/conexão.js"

//console.log(db.collection('ideias').get())

const botaoVoltar = document.querySelector('.botao__voltar')
botaoVoltar.addEventListener('click', (evento) => {
    evento.preventDefault()

    document.location.replace('./home.html')
})

const botaoCriar = document.querySelector('.botao__cria')
botaoCriar.addEventListener('click', (evento) => {
    evento.preventDefault()

    document.location.replace('./criar.html')
})

/* função para renderizar os cards */

export function renderizarIdeias(ideia) {
    //console.log(ideia)

    //console.log(password)

    /*
        arr.forEach(ideia => {
            const itemIdeia = document.createElement('li')
            itemIdeia.id = ideia.idIdeia
    
            const div = document.createElement('div')
            div.id = ideia.idUsuario
            div.classList.add('container')
            if (tokeUsuario.id == div.id) {
    
                const iconeDeletar = document.createElement('span')
                iconeDeletar.classList.add('material-symbols-outlined')
                iconeDeletar.id = ideia.idIdeia
                iconeDeletar.innerText = "delete"
                iconeDeletar.addEventListener('click', (evento) => {
                    const id = evento.target.id
    
    
                    deletarIdeia(id)
                })
    
                const iconeEditar = document.createElement('span')
                iconeEditar.classList.add('material-symbols-outlined')
                iconeEditar.id = ideia.idIdeia
                iconeEditar.innerText = "edit"
                iconeEditar.addEventListener('click', (evento) => {
                    const id = evento.target.id
    
                    editarIdeia(id)
                })
    
                const nomeCriador = document.createElement('p')
                nomeCriador.classList.add('nome__criador__ideia')
    
                const iconeRevelar = document.createElement('span')
                iconeRevelar.classList.add('material-symbols-outlined')
                iconeRevelar.innerText = "visibility"
                iconeRevelar.id = ideia.idIdeia
                iconeRevelar.addEventListener('click', (evento) => {
                    iconeRevelar.innerText = "visibility_off"
    
                    const listaIdeias = JSON.parse(localStorage.getItem('@QI:listaIdeias'))
                    let teste = listaIdeias.filter(el => el.idIdeia == evento.target.id)
    
    
    
                    if (ideia.autor == false) {
    
                        nomeCriador.innerText = tokeUsuario.nome
    
                        ideia.autor = true
                        localStorage.setItem(`@QI:autor${evento.target.id}`, true)
                        itemIdeia.append(nomeCriador)
                    } else {
    
                        ideia.autor = false
                        iconeRevelar.innerText = "visibility"
                        localStorage.setItem(`@QI:autor${evento.target.id}`, false)
                        nomeCriador.remove()
                    }
    
    
                    const autor = JSON.parse(localStorage.getItem(`@QI:autor${evento.target.id}`))
                    console.log(autor)
                    if (autor == true) {
                        console.log('if')
                        nomeCriador.innerText = tokeUsuario.nome
                    } else {
                        console.log('else')
    
                    }
                })
    
                div.append(iconeDeletar, iconeEditar, iconeRevelar)
            }
    
            if (tokeUsuario.adm) {
                const statusProjeto = document.createElement('div')
                statusProjeto.classList.add('container__status')
    
                const aprovado = document.createElement('button')
                aprovado.classList.add('botao__aprovado')
                aprovado.innerText = "Aprovado"
                aprovado.addEventListener('click', (evento) => {
                    let i = arr.filter(ideia => ideia.idIdeia != itemIdeia.id)
                    let i2 = arr.filter(ideia => ideia.idIdeia == itemIdeia.id)
    
    
                    let ideia = {
                        idUsuario: i2[0].idUsuario,
                        nomeIdeia: i2[0].nomeIdeia,
                        descricaoIdeia: i2[0].descricaoIdeia,
                        idIdeia: i2[0].idIdeia,
                        status: 'Aprovado'
                    }
    
                    i.push(ideia)
                    localStorage.setItem('@QI:listaIdeias', JSON.stringify(i))
                })
    
                const analise = document.createElement('button')
                analise.innerText = "Analise"
                analise.classList.add('botao__analise')
                analise.addEventListener('click', () => {
                    let i = arr.filter(ideia => ideia.idIdeia != itemIdeia.id)
                    let i2 = arr.filter(ideia => ideia.idIdeia == itemIdeia.id)
    
    
                    let ideia = {
                        idUsuario: i2[0].idUsuario,
                        nomeIdeia: i2[0].nomeIdeia,
                        descricaoIdeia: i2[0].descricaoIdeia,
                        idIdeia: i2[0].idIdeia,
                        status: 'Analise'
                    }
                    i.push(ideia)
                    localStorage.setItem('@QI:listaIdeias', JSON.stringify(i))
                })
    
                const reprovado = document.createElement('button')
                reprovado.innerText = "Reprovado"
                reprovado.classList.add('botao__reprovado')
                reprovado.addEventListener('click', () => {
                    let i = arr.filter(ideia => ideia.idIdeia != itemIdeia.id)
                    let i2 = arr.filter(ideia => ideia.idIdeia == itemIdeia.id)
    
    
                    let ideia = {
                        idUsuario: i2[0].idUsuario,
                        nomeIdeia: i2[0].nomeIdeia,
                        descricaoIdeia: i2[0].descricaoIdeia,
                        idIdeia: i2[0].idIdeia,
                        status: 'Reprovado'
                    }
    
    
                    i.push(ideia)
                    localStorage.setItem('@QI:listaIdeias', JSON.stringify(i))
                })
    
                statusProjeto.append(aprovado, analise, reprovado)
                itemIdeia.append(statusProjeto)
            } else {
    
                const status = document.createElement('span')
                status.classList.add('status__ideia')
    
                if (ideia.status == 'Aprovado') {
    
                    status.classList.add('status__ideia__aprovado')
                } else if (ideia.status == 'Reprovado') {
    
                    status.classList.add('status__ideia__reprovado')
                } else if (ideia.status == 'Analise') {
    
                    status.classList.add('status__ideia__analise')
                } else if (ideia.status == null) {
    
                }
    
                itemIdeia.append(status)
            }
    
    
    
    
            const tituloIdeia = document.createElement('p')
            tituloIdeia.innerText = ideia.nomeIdeia
    
            const descricao = document.createElement('p')
            descricao.classList.add('descricao__ideia')
    
            const iconeVerDescricao = document.createElement('span')
            iconeVerDescricao.classList.add('material-symbols-outlined')
            iconeVerDescricao.classList.add('botao__ver__melhoria')
            iconeVerDescricao.innerText = "keyboard_arrow_down"
            iconeVerDescricao.addEventListener('click', () => {
    
                if (itemIdeia.style.height == "20rem") {
    
                    itemIdeia.style.height = "5rem"
                    descricao.remove()
                } else {
    
                    itemIdeia.style.height = '20rem'
                    descricao.style.flexFlow = 'wrap'
    
                    if (ideia.descricaoIdeia.length < 7) {
                        descricao.innerText = ideia.descricaoIdeia
    
                    } else {
    
                        let st = ideia.descricaoIdeia
                        let arr = []
    
                        for (let i = 0; i < ideia.descricaoIdeia.length; i++) {
                            //console.log(ideia.descricaoIdeia)
    
                            arr.push(st.substring(0, 20))
                            descricao.insertAdjacentHTML('afterbegin', `
                            <p>
                            ${arr[i]}
                            </p>
                            `
                            )
    
                        }
    
                        arr.push(st.substring(0, 20))
                        descricao.style.overflowX = 'scroll'
                    }
                    itemIdeia.append(descricao)
                }
            })
    
    
    
            div.append(tituloIdeia, iconeVerDescricao)
            itemIdeia.append(div)
            listaUL.append(itemIdeia)
        })
    */
}

renderizarIdeias(JSON.parse(localStorage.getItem('@QI:listaIdeias')))

async function listarIdeias() {
    const listaUL = document.querySelector('ul')
    listaUL.innerText = ''

    const inf = db.collection("ideias");
    inf.get()
        .then((resposta) => {
            resposta.forEach(ideia => {
                const informacao = ideia.data()

                console.log(informacao.descricaoIdeia)

                const itemIdeia = document.createElement('li')
                itemIdeia.id = informacao.idIdeia


                const div = document.createElement('div')
                div.id = informacao.idUsuario
                div.classList.add('container')

                const tituloIdeia = document.createElement('p')
                tituloIdeia.innerText = informacao.nomeIdeia
                
                const descricao = document.createElement('p')
                descricao.innerText = informacao.descricaoIdeia
                descricao.classList.add('descricao__ideia')

                const iconeVerDescricao = document.createElement('span')
                iconeVerDescricao.classList.add('material-symbols-outlined')
                iconeVerDescricao.classList.add('botao__ver__melhoria')
                iconeVerDescricao.innerText = "keyboard_arrow_down"

                itemIdeia.append(tituloIdeia, descricao)
                listaUL.append(itemIdeia)
            });
        })


    db.collection("ideias").get()
        .then((resposta) => {
            resposta.forEach(ideia => {

                /*           
                           if (tokeUsuario.id == div.id) {
               
                               const iconeDeletar = document.createElement('span')
                               iconeDeletar.classList.add('material-symbols-outlined')
                               iconeDeletar.id = ideia.idIdeia
                               iconeDeletar.innerText = "delete"
                               iconeDeletar.addEventListener('click', (evento) => {
                                   const id = evento.target.id
               
               
                                   deletarIdeia(id)
                               })
               
                               const iconeEditar = document.createElement('span')
                               iconeEditar.classList.add('material-symbols-outlined')
                               iconeEditar.id = ideia.idIdeia
                               iconeEditar.innerText = "edit"
                               iconeEditar.addEventListener('click', (evento) => {
                                   const id = evento.target.id
               
                                   editarIdeia(id)
                               })
               
                               const nomeCriador = document.createElement('p')
                               nomeCriador.classList.add('nome__criador__ideia')
               
                               const iconeRevelar = document.createElement('span')
                               iconeRevelar.classList.add('material-symbols-outlined')
                               iconeRevelar.innerText = "visibility"
                               iconeRevelar.id = ideia.idIdeia
                               iconeRevelar.addEventListener('click', (evento) => {
                                   iconeRevelar.innerText = "visibility_off"
               
                                   const listaIdeias = JSON.parse(localStorage.getItem('@QI:listaIdeias'))
                                   let teste = listaIdeias.filter(el => el.idIdeia == evento.target.id)
               
               
               
                                   if (ideia.autor == false) {
               
                                       nomeCriador.innerText = tokeUsuario.nome
               
                                       ideia.autor = true
                                       localStorage.setItem(`@QI:autor${evento.target.id}`, true)
                                       itemIdeia.append(nomeCriador)
                                   } else {
               
                                       ideia.autor = false
                                       iconeRevelar.innerText = "visibility"
                                       localStorage.setItem(`@QI:autor${evento.target.id}`, false)
                                       nomeCriador.remove()
                                   }
               
               
                                   const autor = JSON.parse(localStorage.getItem(`@QI:autor${evento.target.id}`))
                                   console.log(autor)
                                   if (autor == true) {
                                       console.log('if')
                                       nomeCriador.innerText = tokeUsuario.nome
                                   } else {
                                       console.log('else')
               
                                   }
                               })
               
                               div.append(iconeDeletar, iconeEditar, iconeRevelar)
                           }
               
                           if (tokeUsuario.adm) {
                               const statusProjeto = document.createElement('div')
                               statusProjeto.classList.add('container__status')
               
                               const aprovado = document.createElement('button')
                               aprovado.classList.add('botao__aprovado')
                               aprovado.innerText = "Aprovado"
                               aprovado.addEventListener('click', (evento) => {
                                   let i = arr.filter(ideia => ideia.idIdeia != itemIdeia.id)
                                   let i2 = arr.filter(ideia => ideia.idIdeia == itemIdeia.id)
               
               
                                   let ideia = {
                                       idUsuario: i2[0].idUsuario,
                                       nomeIdeia: i2[0].nomeIdeia,
                                       descricaoIdeia: i2[0].descricaoIdeia,
                                       idIdeia: i2[0].idIdeia,
                                       status: 'Aprovado'
                                   }
               
                                   i.push(ideia)
                                   localStorage.setItem('@QI:listaIdeias', JSON.stringify(i))
                               })
               
                               const analise = document.createElement('button')
                               analise.innerText = "Analise"
                               analise.classList.add('botao__analise')
                               analise.addEventListener('click', () => {
                                   let i = arr.filter(ideia => ideia.idIdeia != itemIdeia.id)
                                   let i2 = arr.filter(ideia => ideia.idIdeia == itemIdeia.id)
               
               
                                   let ideia = {
                                       idUsuario: i2[0].idUsuario,
                                       nomeIdeia: i2[0].nomeIdeia,
                                       descricaoIdeia: i2[0].descricaoIdeia,
                                       idIdeia: i2[0].idIdeia,
                                       status: 'Analise'
                                   }
                                   i.push(ideia)
                                   localStorage.setItem('@QI:listaIdeias', JSON.stringify(i))
                               })
               
                               const reprovado = document.createElement('button')
                               reprovado.innerText = "Reprovado"
                               reprovado.classList.add('botao__reprovado')
                               reprovado.addEventListener('click', () => {
                                   let i = arr.filter(ideia => ideia.idIdeia != itemIdeia.id)
                                   let i2 = arr.filter(ideia => ideia.idIdeia == itemIdeia.id)
               
               
                                   let ideia = {
                                       idUsuario: i2[0].idUsuario,
                                       nomeIdeia: i2[0].nomeIdeia,
                                       descricaoIdeia: i2[0].descricaoIdeia,
                                       idIdeia: i2[0].idIdeia,
                                       status: 'Reprovado'
                                   }
               
               
                                   i.push(ideia)
                                   localStorage.setItem('@QI:listaIdeias', JSON.stringify(i))
                               })
               
                               statusProjeto.append(aprovado, analise, reprovado)
                               itemIdeia.append(statusProjeto)
                           } else {
               
                const status = document.createElement('span')
                status.classList.add('status__ideia')

                if (ideia.status == 'Aprovado') {

                    status.classList.add('status__ideia__aprovado')
                } else if (ideia.status == 'Reprovado') {

                    status.classList.add('status__ideia__reprovado')
                } else if (ideia.status == 'Analise') {

                    status.classList.add('status__ideia__analise')
                } else if (ideia.status == null) {

                }

                itemIdeia.append(status)
            }
*/




            })
        })

}
/* 
iconeVerDescricao.addEventListener('click', () => {

                if (itemIdeia.style.height == "20rem") {

                    itemIdeia.style.height = "5rem"
                    descricao.remove()
                } else {

                    itemIdeia.style.height = '20rem'
                    descricao.style.flexFlow = 'wrap'

                    if (ideia.descricaoIdeia.length < 7) {
                        descricao.innerText = ideia.descricaoIdeia

                    } else {

                        let st = ideia.descricaoIdeia
                        let arr = []

                        for (let i = 0; i < ideia.descricaoIdeia.length; i++) {
                            //console.log(ideia.descricaoIdeia)

                            arr.push(st.substring(0, 20))
                            descricao.insertAdjacentHTML('afterbegin', `
                        <p>
                        ${arr[i]}
                        </p>
                        `
                            )

                        }

                        arr.push(st.substring(0, 20))
                        descricao.style.overflowX = 'scroll'
                    }
                    itemIdeia.append(descricao)


                    console.log(usuario.data())
                    //renderizarIdeias(usuario.data())
                    //console.log(usuario.data())
                })
*/

listarIdeias()


export function deletarIdeia(id) {
    const modalDeletar = document.querySelector('.modal__deletar')
    modalDeletar.showModal()


    const botaoCancelar = document.querySelector('.botao__cancelar')
    botaoCancelar.addEventListener('click', () => {

        modalDeletar.close()
    })


    const botaoDeletar = document.querySelector('.botao__deletar')
    botaoDeletar.addEventListener('click', () => {
        const listaIdeias = JSON.parse(localStorage.getItem('@QI:listaIdeias'))

        const listaFiltrada = listaIdeias.filter(ideia => ideia.idIdeia != id)

        localStorage.setItem('@QI:listaIdeias', JSON.stringify(listaFiltrada))
        renderizarIdeias(listaFiltrada)

        modalDeletar.close()
    })

}

export function editarIdeia(id) {
    const modalEditar = document.querySelector('.modal__editar')
    modalEditar.showModal()

    const titulo = document.querySelector('.titulo')
    const descricao = document.querySelector('.descricao')

    const listaIdeias = JSON.parse(localStorage.getItem('@QI:listaIdeias'))

    const listaFiltrada = listaIdeias.filter(ideia => ideia.idIdeia == id)

    titulo.value = listaFiltrada[0].nomeIdeia
    descricao.value = listaFiltrada[0].descricaoIdeia


    const botaoCancelar = document.querySelector('.botao__cancelar__edicao')
    botaoCancelar.addEventListener('click', () => {

        modalEditar.close()
    })


    const botaoSalvar = document.querySelector('.botao__salvar__edicao')
    botaoSalvar.addEventListener('click', (evento) => {
        evento.preventDefault()

        const ideiaEdita = {
            idUsuario: JSON.parse(localStorage.getItem('@QI:tokenUsuario')).id,
            nomeIdeia: titulo.value,
            descricaoIdeia: descricao.value,
            autor: false,
            idIdeia: parseInt(id),
            status: 0
        }

        const listaFiltrada = listaIdeias.filter(ideia => ideia.idIdeia != id)
        listaFiltrada.push(ideiaEdita)

        localStorage.setItem('@QI:listaIdeias', JSON.stringify(listaFiltrada))
        renderizarIdeias(listaFiltrada)

        modalEditar.close()
    })

}