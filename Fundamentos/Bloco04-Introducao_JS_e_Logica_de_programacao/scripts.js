//exercício 1
const a;
const b;

let adicao = (a + b);
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

switch(num, num2, num3){
    case num > num2:
    case num > num3:
        return num;
        break;
    case num2 > num:
    case num2 > num3:
    return num2;
        break;
    case num3 > num:
    case num3 > num2:
        return num3;
        break;
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

let pecaXadrez = "Peão";



