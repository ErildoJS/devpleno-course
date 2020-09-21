/**
 * dado um vetor retorne apenas os dados unicos do vetor
 * 
 */

 const vetor = [1,1,2,3,4,6,3,4]

 const mayTimes = (curr, val) => {
  if(!curr[val]) {
    curr[val] = 0
  }

  curr[va]++
  return curr
}
 

 const times  = vetor.reduce(mayTimes, {})
 console.log(times)