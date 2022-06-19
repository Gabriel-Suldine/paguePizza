let read = require("readline-sync") // inclusão da biblioteca para leitura de dados do usuário
let valorPizza = 0 , pagantes = 0, valorCada = 0
valorPizza = read.questionFloat(`Qual valor da Pizza? R$ `)
pagantes = read.questionInt(`Pago em quantas pessoas? `)
valorCada = valorPizza / pagantes
console.log(`O valor para cada pessoa: R$ ${valorCada.toFixed(2)}`)
