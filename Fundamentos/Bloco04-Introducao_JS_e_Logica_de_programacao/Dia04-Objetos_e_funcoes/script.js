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

function arrayIndex(arr) {

    let biggestNumber = 0;
    for (let i = 0; i < arr.length; i+=1) {
        if (arr[i] > biggestNumber) {
            biggestNumber = i
        }

    }

    return biggestNumber;

}

console.log(arrayIndex([20, 3, 6, 10, 1]));

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

