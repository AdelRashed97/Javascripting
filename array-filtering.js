function evenNumbers(x){
  return x % 2 === 0
}
let numbers=[1,2,3,4,5,6,7,8,9,10]
filtered=numbers.filter(evenNumbers)
console.log(filtered)
