let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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
let valoresImpar = [];
for (let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 != 0){
        valoresImpar.push(numbers[i])
    }
}

if(valoresImpar.length > 0) {
    console.log(valoresImpar.length);
} else {
    console.log('Nenhum valor ímpar encontrado');
}


