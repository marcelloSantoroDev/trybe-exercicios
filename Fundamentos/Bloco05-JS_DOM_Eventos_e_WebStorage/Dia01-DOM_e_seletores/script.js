
        // Aqui você vai modificar os elementos já existentes utilizando apenas as funções:

        // - document.getElementById()
        // - document.getElementsByClassName()
        // - document.getElementsByTagName()

//  Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos.
//  Crie e execute uma função que corrija o texto da tag <h1>.
const changeP = document.getElementsByTagName('p')[1];
const changeTitle = document.getElementsByClassName('title')[0];

function changeTagText(element, text){
element.innerText = text;

}

changeTagText(changeP, 'Contradado, feliz e saudável.')
changeTagText(changeTitle, 'Exercício 5.1 - JavaScript')



//  Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
//  Crie e execute uma função que mude a cor do quadrado vermelho para branco.
const changeC = document.getElementsByClassName('main-content')[0];
const changeC2 = document.getElementsByClassName('center-content')[0];

function changeColor(element, color){
element.style.backgroundColor = color
}

changeColor(changeC, 'rgb(76,164,109)');
changeColor(changeC2, 'white');

//  Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
const changePAll = document.querySelectorAll('p');

function upperCase(element){
for(let i = 0; i < element.length; i += 1){
    element[i].style.textTransform = 'uppercase'
}
}

upperCase(changePAll);

//  Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function showP(element){
for(let i = 0; i < element.length; i += 1){
    console.log(element[i]);
}
}

showP(changePAll);