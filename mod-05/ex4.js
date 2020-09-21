/**
  dado um vetor rtorne um obj com quantas vezes cada valor esta presente no 
  vetor
 */

 const vetor =   [1,2,3,4,5,5, 2, 3, 1]
const mayTimes = (curr, val) => {
  if(!curr[val]) {
    curr[val] = 0
  }

  curr[va]++
  return curr
}
 

 const times  = vetor.reduce(mayTimes, {})
 console.log(times)