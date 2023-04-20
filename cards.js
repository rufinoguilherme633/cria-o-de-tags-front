'use strict'

class card extends HTMLElement {
    constructor() {
        super()
            //const shadow = this.attachShadow({mode:'open'});

        //Variaveis globais
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = 'Nome Aluno'
        this.foto = null
        this.cor = 'tomato'
        this.turma = 'turma'

        //Primeiro exemplo
        // const titulo = document.createElement('h1')
        // titulo.textContent = "Senai Jandira"


        //Segundo exemplo
        // const html = document.createElement('div')
        // const titulo = document.createElement('h1')
        // titulo.textContent = "Senai Jandira"
        // html.appendChild(titulo)
        // const css = document.createElement('style')
        // css.textContent = `

        // div{
        //     display: flex;
        //     justify-content: center;
        //     width: 400px;
        //     height: 400px;
        //     background-color: green;
        //     color: white
        // }

        // `
        //shadow.appendChild(titulo)
        //shadow.append(html,css)
    }

    static get observedAttributes() {
        return ['nome', 'foto', 'cor', 'turma']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue // colchetes para mandar varuavel
    }



    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            padding : 0;
            margin : 0;
            box-sizing : border-box;
        }

        .card{
            width: 200px;
            height:300px;
            display: grid;
            grid-template-rows: 20% 1fr 20%;
            place-items: center;
            background-color:${this.cor} ;
        }

        .card_text{
            color: #fff;
            font-size: 1.5rem;
            font-weight: 600;
        }

        .card_image{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: blue;
            background-image: url(${this.foto});
            background-size:cover;
        }
        `

        return css
    }
    component() {
        const card = document.createElement('div')
        card.classList.add('card')
        const nome = document.createElement('div')
        nome.classList.add('card_text')
        nome.textContent = this.nome
        const imagem = document.createElement('div')
        imagem.classList.add('card_image')
        const turma = document.createElement('div')
        turma.classList.add('card_text')
        turma.textContent = this.turma
        card.append(nome, imagem, turma)
        return card
    }
}

customElements.define('card-gustavo', card)







// class card extends HTMLElement {
//     constructor(){
//         super()
//         //virando global this.
//         this.shadow = this.attachShadow({mode: 'open'}) //pode alterar as opções


//         // const titulo = document.createElement('h1')
//         // titulo.textContent = "SENAI Jandira"

//         //adicionando no shadow outro elemento
//         //shadow.appendChild(titulo) //so aceita um elemento
//     }

//     connectedCallback(){
//         //metodos/função
//         this.shadow.appendChild(this.component())
//         this.shadow.appendChild(this.styles())
//     }
//     styles(){

//         const css = document.createElement('style')
//         css.textContent = `
//             *{
//                 padding: 0;
//                 margin: 0;
//                 box-sizing: border-box;
//             }

//             .card{
//                 width: 200px;
//                 height: 300px;
//                 display: grid;
//                 grid-template-rows: 20% 60% 20%;
//                 place-items: center;
//                 background-color: blue;
//             }

//         `
//         return css
//     }
//     component(){
//         const card = document.createElement('div')
//         card.classList.add('card')

//         const nome = document.createElement('div')
//         nome.classList.add('card__text')

//         const imagem = document.createElement('div')
//         imagem.classList.add('card__image')

//         const turma = document.createElement('div')
//         turma.classList.add('card__text')

//         card.append(nome, imagem, turma)
//         return card
//     }

// }

// //criando no html, precisa ter nome composto + nome da classe (ali de cima)
// //instanciando
// customElements.define('card-gustavo', card)