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
export function renderizarIdeias(arr) {
    const tokeUsuario = JSON.parse(localStorage.getItem('@QI:tokenUsuario'))

    const listaUL = document.querySelector('ul')


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
            //iconeDeletar.addEventListener('click', ()=>)

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

                //console.log(localStorage.getItem(`@QI:autor${evento.target.id}`))

                const autor = JSON.parse(localStorage.getItem(`@QI:autor${evento.target.id}`))
                console.log(autor)
                if (autor == true) {
                    console.log('if')
                    nomeCriador.innerText = tokeUsuario.nome
                } else {
                    console.log('else')

                }
            })

            div.append(iconeDeletar, iconeRevelar)
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
            }else if(ideia.status == 'Analise'){
                
                status.classList.add('status__ideia__analise')
            }else if(ideia.status == null){
                
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
                descricao.innerText = ideia.descricaoIdeia


                itemIdeia.append(descricao)
            }
        })



        div.append(tituloIdeia, iconeVerDescricao)
        itemIdeia.append(div)
        listaUL.append(itemIdeia)
    })
}
renderizarIdeias(JSON.parse(localStorage.getItem('@QI:listaIdeias')))