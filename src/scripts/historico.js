const botaoVoltar = document.querySelector('.botao__voltar')
botaoVoltar.addEventListener('click', (evento) => {
    evento.preventDefault()

    document.location.replace('./home.html')
})

const items = document.querySelectorAll('li')

const botaoDescricao = document.querySelectorAll('.botao__ver__melhoria')


botaoDescricao.forEach(botao => {
    botao.addEventListener('click', (evento) => {

        let id = evento.target.id
        for (let i = 0; i < items.length; i++) {
            //console.log(items[id - 1])


            let li = items[id - 1]
            console.log(li)

            if (li.style.height == "30rem") {
                li.style.height = "5rem"


                document.querySelector('.descricao__ideia').remove()
            } else {
                li.style.height = "30rem"

                const descricao = document.createElement('p')
                descricao.classList.add('descricao__ideia')
                descricao.innerText = 'teste teste teste teste teste teste'

                li.append(descricao)

            }
            console.log(li)

            break
        }
    })
})