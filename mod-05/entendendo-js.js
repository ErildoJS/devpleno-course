//map - dado um vetor m ele passa item por item e vai converter esse valor pro 
//um outro valorm, retornando um novo vetor

const vetor = [
  1, 2, 3, ,4,5
]

const dobrado = vetor.map(function(item){
  return item * 2
})

//filter - 

vetor.filter(function(item) {
  return item % 2 === 0
})