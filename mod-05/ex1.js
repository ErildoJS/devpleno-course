/**
  dado um vetor como fazer a soma deles usando o reduce
 */

 //reduce - pega um vetor e pra cada item ele vai chamar uma func
 //falando qual é o valor anterior e qual é o actual

 const vetor = [1,2,3,4,5]
const sum = 0

//sem reduce
for(let i = 0; i<vetor.length; i++) {
  sum = sum + vetor[i]
}


 const somadora = (numA, numAc)  => {
   //o valor anterior é o total
   return numA + numAc
 }

 const soma = vetor.reduce(somadora, 0)
 console.log(soma)