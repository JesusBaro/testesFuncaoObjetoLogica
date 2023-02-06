//alert exibe caixa na tela vazia

// alert`sou um alert. O alert exibe caixa na tela vazia. Capaz de exibir texto.`
//   console.log("funcionando")



//alert exibe caixa na tela com campo de inserção de texto
// opção ok e cancelar
//  prompt `sou um prompt`
//   console.log("funcionando")


// let continuar; // variável no continuar para que ela seja utilizada como indicador e paramentro para a função das respostas
//a ideia aqui é faer um prompt que pergunta se entendeu, e qunaod receber nao ele para 



//Estudos de prompt
// function entendendPrompt(
//     resposta1 = prompt (`Voce entendeu o promtp?`) )
//      {
// if (resposta1 == `sim`) {
//     console.log(`pergnuta sim. para`)
// } else if(resposta1 == `não`) {
//     console.log(`pergnuta sim.resposta não`)

// switch (continuar) {
//     case `sim`:
//         console.log(`resposta sim`)
//         break;
//     case `não`:
//         console.log(`resposta não`)
//     default:
//         console.log(`resposta não aceita`)

//         break;
//  }
// }


//aula -3/02
//DOM --------------------------
// let corpo = document.body //conectando o dom ao body do html

// // corpo.innerText= `òlá pessoal` //inserindo texto em uma variavel

// // let titulo=document.querySelector('.NomedaClasse') // conectando pela classe
// let titulo=document.querySelector('h1') //conectando texto
// console.log(tittle)

// let photo=document.querySelector (`#foto`)
// console.log(photo)

// let caixa= document.querySelector('[tittle˜=teste]') // conectando pelo atributo. nome do atributo ˜= o conteudo vai pra o 
// console.log(caixa)


//nodelist
// let lista= document.querySelectorAll(`li`) //node lista estatica
// console.log(lista)


// let [item1, item2, item3, item4]= document.querySelectorAll(`li`) // desestruturando uma nodelist, usando array uma variavel pra cada item. variaveis dentro da array
// console.log(item1)
// console.log(item2)
// console.log(item3)
// console.log(item4)

// let input = "<input/>"
// caixa.innerHTML= "<input/>" //criando tags no html
 
// const paragh= `<p>ola<p/>` //criando tags no html
// corpo.innerHTML= paragh  //criando tags no html


//craindo funcionalidade
//TME QUE ATRIBIR 
function trocar() {

    if(corpo.style.backgroundColor ===`white`){
        corpo.style.backgroundColor= `red`
    } else {
        corpo.style.backgroundColor =`white`
    }
}

// modal 

// function trocar() {

//     if(corpo.style.backgroundColor ===`white`){
//        tittle.innertext= `Bom dia BEBE`
//     } else {
//         tittle.innertext= `Boa tarde`
//         foto.setAttribute(`src`, `data:image/jpeg;base64,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`)
//         corpo.style.backgroundColor =`white`
//     }

// }

// aula noite -- ------- ------ ----- ----- 


// capturar o body numa variável

let corpo= document.body 
// corpo.style.backgroundColor = `red`


// let title= document.querySelector(`h1`) // tag
// console.log(title)

let title= document.querySelector(`.aula`) //classe
// console.log(`.aula`)


// let photo=document.querySelector (`#foto`) //id
// console.log(photo)

// let caixa = document.querySelector(`[title˜=teste]`)//conectando pelo atributo
// console.log(caixa)