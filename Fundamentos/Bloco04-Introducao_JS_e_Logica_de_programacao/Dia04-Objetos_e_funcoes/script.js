//Para fixar objeto

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 }
// };

// console.log('A jogadora', player.name, 'tem', player.age, 'anos de idade');

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
// player['fullName'] = player.name + ' ' + player.lastName

// console.log('A jogadora', player.fullName, 'foi eleita a melhor do mundo por', player.bestInTheWorld.length, 'vezes');

// console.log('A jogadora possui', player.medals.golden , 'medalhas de outro e', player.medals.silver, 'medalhas de prata');

//Para fixar for/in for/of

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for(let firstName in names){
//     console.log('Olá,', names[firstName]);
//   }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let key in car){
//     console.log(key, car[key]);
//   }

//Exercícios Objetos e Funções
//Parte I

//1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente:'Sim'
// };

// console.log('Bom dia,', info.personagem);

//2

// info.recorrente = 'Sim';

// console.log(info);

//3

// for(let key in info){
//     console.log(key);
// }

// for(let properties in info){
//     console.log(info[properties]);
// }

//4

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente:'Sim'
// };

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };

// for(let properties in info){
//     if( properties === 'recorrente' && info[properties] === 'Sim' && info2[properties] === 'Sim'){
//         console.log('Ambas são recorrentes');
//     } else {
//         console.log(info[properties], 'e', info2[properties]);
//     }
// }

//5

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama "' + leitor.livrosFavoritos[0].titulo + '"');

// leitor.livrosFavoritos[1] = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }

// console.log(leitor);

// console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');

//Parte II

//1

// let str = 'ararar'

//     function verificaPalindromo(str){

//     let strInvertida = [];
//     let ehPalindromo;

//         for(let i = str.length - 1; i >= 0; i -=1){
//             strInvertida.push(str[i]);
//     }

//     let transformString = strInvertida.join('');

//     if(str == transformString){
//         ehPalindromo = true
//     } else {
//         ehPalindromo = false
//     }

// return ehPalindromo;

// }

//     console.log(verificaPalindromo('arara'));

//Exercício 2

// function arrayIndex(arr) {
//   let index = 0;

//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] > arr[index]) {
//       index = i;
//     }
//   }

//   return index;
// }

// console.log(arrayIndex([2, 3, 6, 7, 10, 1]));

//let maiorValor = 0;

//for (let i = 0 ; i < numbers.length ; i++){
//    if (numbers[i] > maiorValor){
//        maiorValor = numbers[i]
//}

//}
//console.log(maiorValor);

// function arrayIndex(arr) {
// let arr = [-1, 6, 0, 7, 10, 3]
// let smallestNumber = arr[0];
// for (let i = 0; i < arr.length; i += 1) {
//     console.log(i);
//     if (arr[i] < smallestNumber) {
//         console.log(i);
//     }

// }

// console.log(smallestNumber);

//}

// console.log(arrayIndex([1, 6, 7, 10, 3]));

//5

//function repeteValor(arr) {

// let valor = [];
//   for (let i = 2; i < arr.length; i += 1)
//     for (let j = 0; j < i; j += 1) {
//       if (arr[i] === arr[j]) {
//         valor.push(arr[j]);
//       }
//     }

// return valor

// }

//console.log(repeteValor([2, 3, 2, 5, 8, 2, 3]));

// function repeteValor(arr) {

//     let numero = [];
//     let numeroCerto = [];
//     for(let i = 0; i < arr.length; i+=1){
//         for(let j = 0; j < i; j+=1){
//             if(arr[i] === arr[j]){
//                 numero.push(arr[i])
//             }
//         }
//     for(let k = 0; k < numero.length; k += 1){
//         for(let l = 0; l < k; l+= 1){
//             if(numero[k] === numero[l]){
//                 numeroCerto.push(numero[k])
//             }
//         }
//     }
//     }
    
//     return numeroCerto;

//     }

// console.log(repeteValor([2, 3, 2, 5, 8, 2, 3]))

// function percorreValor(arr){

//     let numRepetido = [];
//     for(let i = 0; i < arr.length; i += 1){
//         for(j = 0; j < i; j+= 1){
//             if(arr[i] === arr[j]){
//                 numRepetido.push(arr[i]);
//             }
//         }
//     }
// return numRepetido
// }

// console.log(repeteValor([2, 3, 2, 5, 8, 2, 3]))

// function repeteValor
// function contador(arr, valor){

//     let count = 0;
//     for(let j in arr){
//         if(valor === arr[j]){
//             count += 1
//         }
//     }

// return count

// }

// function repeteValor (arr){

//     let count = 0;
//     let countRepetidos = 0;
//     let count3 = 0;
    
//     for(let i in arr){
//         count = 0;
//         let valor = arr[i];
//         count = contador(arr, valor)
//             if(count > countRepetidos){
//             countRepetidos = count;
//             count3 = arr[i]
//     }
        
//     }

//     return count3;

// }

// console.log(repeteValor([2, 3, 2, 5, 8, 3, 2, 3, 2, 2]))



