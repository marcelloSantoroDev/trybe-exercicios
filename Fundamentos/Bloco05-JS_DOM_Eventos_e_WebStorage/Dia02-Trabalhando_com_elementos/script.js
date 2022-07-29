//1 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

const body = document.getElementsByTagName('body')[0];
const newElement = document.createElement('h1');
newElement.innerText = 'Exercício 5.2 - JavaScript DOM'
body.appendChild(newElement);

//2 🚀 Adicione a tag main com a classe main-content como filho da tag body;

const newElement2 = document.createElement('main');
newElement2.className = 'main-content';
body.appendChild(newElement2);

//3 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const tagMain = document.getElementsByClassName('main-content')[0];
const newElement3 = document.createElement('section');
newElement3.className = 'center-content';
tagMain.appendChild(newElement3);

//4 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const section = document.getElementsByClassName('center-content')[0];
const newElement4 = document.createElement('p');
newElement4.innerHTML = 'Adicionando algum texto à tag p';
section.appendChild(newElement4);

//5 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const newElement5 = document.createElement('section');
newElement5.className = 'left-content';
tagMain.appendChild(newElement5);

//6 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const newElement6 = document.createElement('section');
newElement6.className = 'right-content';
tagMain.appendChild(newElement6);

//7 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const section2 = document.getElementsByClassName('left-content')[0];
const newElement7 = document.createElement('img');
newElement7.src = 'https://picsum.photos/200'
newElement7.className = 'small-image';
section2.appendChild(newElement7)

//8 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let list = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const section3 = document.getElementsByClassName('right-content')[0];
const elementUl = document.createElement('ul');
section3.appendChild(elementUl);

for(let i = 0; i < list.length; i += 1){
    const newElement8 = document.createElement('li');
    newElement8.innerHTML = list[i];   
    elementUl.appendChild(newElement8);
}


//9 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for(let j = 1; j <= 3; j += 1){
    const newElement9 = document.createElement('h3');
    tagMain.appendChild(newElement9);
}

//10 Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//11 🚀 Adicione a classe title na tag h1 criada;

const tagH1 = document.getElementsByTagName('h1')[0];
tagH1.className = 'title';

//12 🚀 Adicione a classe description nas 3 tags h3 criadas;

const tagH3 = document.querySelectorAll('h3');
for(let k = 0; k < 3; k +=1){
    tagH3[k].className = 'description';
}

//13 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

tagMain.removeChild(section2);

//14 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

section3.style.marginRight = 'auto';

//15 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

const pai = document.getElementsByClassName('center-content')[0].parentElement;
pai.style.backgroundColor = 'green';

//16 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

const tagUl = document.getElementsByTagName('ul')[0];

tagUl.lastChild.remove();
tagUl.lastChild.remove();

