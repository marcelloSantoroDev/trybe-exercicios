//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercício 1

//for (let i = 0 ; i < numbers.length ; i++){
    //console.log(numbers[i]);
//}

//exercício 2

//let result = 0;
//for (let i = 0 ; i < numbers.length ; i++) {
//  result += numbers[i]  
//}

//console.log(result);

//exercício 3

//let result = 0;
//let mediaAritmetica;
//for (let i = 0 ; i < numbers.length ; i++){
//    result = result + numbers[i]
//}

//mediaAritmetica = result / numbers.length

//console.log(mediaAritmetica);

//exercício 4

//if(mediaAritmetica > 20) {
//    console.log('valor maior que 20');
//} else {
//    console.log('valor menor ou igual a 20');
//}

//exercício 5

//let maiorValor = 0;

//for (let i = 0 ; i < numbers.length ; i++){
//    if (numbers[i] > maiorValor){
//        maiorValor = numbers[i]
//}

//}
//console.log(maiorValor);

//exercício 6
//let valoresImpar = [];
//for (let i = 0 ; i < numbers.length ; i++){
//    if(numbers[i] % 2 != 0){
//        valoresImpar.push(numbers[i])
//    }
//}

//if(valoresImpar.length > 0) {
//   console.log(valoresImpar.length);
//} else {
//    console.log('Nenhum valor ímpar encontrado');
//}

//exercício 7
//let menorValor = 100;

//for (let i = 0 ; i < numbers.length ; i +=1) {
//    if(numbers[i] < menorValor){
//        menorValor = numbers[i];
//    }
//}

//console.log(menorValor)


//let menorValor = numbers[0];

//for (let i = 0 ; i < numbers.length ; i +=1) {
//    if(numbers[i] < menorValor){
//        menorValor = numbers[i];
//    }
//}

//console.log(menorValor)



//exercício 8 
//for (let i = 1 ; i <= 25 ; i +=1) {
//    console.log(i);
//}

//exercício 9
//for (let i = 1 ; i <= 25 ; i +=1) {
//    let divisao = i / 2;
//    console.log(divisao);
//}

//EXERCÍCIOS BÔNUS

//1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let segundaPosicao = 1 ; segundaPosicao < numbers.length ; segundaPosicao += 1){
//  for (let primeiraPosicao = 0 ; primeiraPosicao < segundaPosicao ; primeiraPosicao += 1){
//        if(numbers[segundaPosicao] < numbers[primeiraPosicao]){
//            let posicao = numbers[segundaPosicao];
//            numbers[segundaPosicao] = numbers[primeiraPosicao];
//            numbers[primeiraPosicao] = posicao;
//        }
//    }

// }

// console.log(numbers);

//2

// for (let segundaPosicao = 1 ; segundaPosicao < numbers.length ; segundaPosicao += 1){
//     for (let primeiraPosicao = 0 ; primeiraPosicao < segundaPosicao ; primeiraPosicao += 1){
//           if(numbers[segundaPosicao] > numbers[primeiraPosicao]){
//               let posicao = numbers[segundaPosicao];
//               numbers[segundaPosicao] = numbers[primeiraPosicao];
//               numbers[primeiraPosicao] = posicao;
//           }
//       }
   
//    }
   
//    console.log(numbers);

//3

// let novoArray = [];

// for (let i = 0 ; i < numbers.length ; i += 1){
//         if(i + 1 < numbers.length){
//             novoArray.push(numbers[i] * numbers[i + 1])
//         } else {
//             novoArray.push(numbers[i] * 2)
//         }
//     }

// console.log(novoArray);