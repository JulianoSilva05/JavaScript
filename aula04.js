/**
 * Operadores Matemáticos em Javascript
 * +
 * -
 * /
 * *
 * %
 * ++
 * --
 * +=
 * -=
 */

// let num1, num2, num3 /** inicializar variaveis é uma boa pratica de programação*/
// num1=num2=num3=10
// console.log(num1,num2,num3)

let num1 = 5
let num2 = 11
let res = 0

function soma(){
    res = num1 + num2 
    console.log("A soma de ",num1," + " , num2 ," = " , res)
}
function subtracao(){
    res = num1 - num2
    console.log("A subtração de ",num1," - " , num2 ," = " , res)
}

soma()
subtracao()

/**Procedencia */
res = num1+num2 * 2
console.log(res)

res = (num1+num2 )* 2
console.log(res)

console.log("Incremento, Numero 1 começa com = ", num1)
console.log("Incremento",num1++)
console.log("Incremento",num1++)
console.log("Incremento",num1++)
console.log("Incremento",num1++)
console.log("Incremento",num1++)
console.log("Incremento",num1++)
console.log("Incremento de 3",num1+=3)
console.log(num1)