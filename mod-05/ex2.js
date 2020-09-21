/**
  dado um vetor como fazer a soma de pares deles usando o reduce e filtrando
 */

 //reduce - pega um vetor e pra cada item ele vai chamar uma func
 //falando qual é o valor anterior e qual é o actual

 const vetor = [1,2,3,4,5]
const ehPar = numero => numero & 2 === 0

const somadora = (total, actual) => total + actual
const soma = vetor.filter(ehPar).reduce(somadora, 0)

 console.log(soma)