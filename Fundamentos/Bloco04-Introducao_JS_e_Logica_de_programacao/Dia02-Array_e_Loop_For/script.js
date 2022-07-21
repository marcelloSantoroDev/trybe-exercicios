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

//let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for (let index = 1; index < array.length; index += 1) {
//    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//      if (array[index] < array[secondIndex]) {
//        let position = array[index];
//        array[index] = array[secondIndex];
//        array[secondIndex] = position;
//      }
//    }
//  }

//console.log(array);




