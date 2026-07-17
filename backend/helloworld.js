//es primero en el call stack
console.log('first')

//es segundo en el call stack
//el orden de procesamiento
setTimeout(() => {
  console.log('second')
}, 0)

console.log('third')
