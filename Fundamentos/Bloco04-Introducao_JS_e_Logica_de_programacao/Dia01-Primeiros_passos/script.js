//exercício 1
const a;
const b;

let adicao = (a + b;
let subtracao = (a - b);
let multiplicacao = (a * b);
let divisao = (a / b);
let modulo = (a % b);

//exercício 2
if (a > b) {
    return a;
} else {
    return b;
}


//exercício 3
const num = x;
const num2 = y;
const num3 = z;

if (num > num2 && num > num3) {
    return num
} else if (num2 > num && num2 > num3) {
    return num2
} else {
    return num3
}


//exercício 4
function verificaPositivo (param) {
    if(param > 0) {
        return "positive";
    } else if(param < 0) {
        return "negative";
    } else {
        return "zero";
    }
}


//exercício 5
function verificaTriangulo (t1, t2, t3) {

    if(t1 + t2 + t3 === 180){
        return true
    } else {
        return false
    }
}

//exercício 6

let pecaXadrez = 'Peão';

switch (pecaXadrez.toLowerCase()) {
    case 'rei':
    console.log('Se move em qualquer direção, uma casa por vez');
    break;
    case  'dama':
    console.log('Se move em qualquer direção, quantas casas quiser');
    break;
    case  'torre':
    console.log('Se move em linha reta, quantas casas quiser');
    break;
    case  'bispo':
    console.log('Se move na diagonal, quantas casas quiser');
    break;
    case  'cavalo':
    console.log('Se move em L');
    break;
    case  'peão':
    console.log('Se move para frente, uma casa por vez');
    break;
}

//exercício 7

function convertePorcentagem (num){


    if(num < 0 || num > 100){
        console.log('Erro');
    } else if(num >= 90){
        console.log('A');
    } else if(num >= 80){
        console.log('B');
    } else if(num >= 70){
        console.log('C');
    } else if(num >=60){
        console.log('B');
    } else if(num >= 50){
        console.log('E');
    } else if(num < 50){
        console.log('F');
    }

    }

//exercício 8

const num;
const num2;
const num3;

if(numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0){
    console.log(True);
} else {
    console.log(False);
}

//exercício 9

if(numero1 % 2 != 0 || numero2 % 2 != 0 || numero3 % 2 != 0){
    console.log(True);
} else {
    console.log(False);
}

//exercício 10

const custoProduto;
const custoVenda;
const imposto;

if(custoProduto >= 0 && custoVenda >= 0){
const custoTotal = custoProduto + imposto;
const lucro = custoVenda - custoTotal;
const lucroMil = lucro * 1000;
} else {
    return 'Erro'
}

//exercício 11
let salario;




