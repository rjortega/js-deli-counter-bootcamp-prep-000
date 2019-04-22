function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

// var i = 0
// function takeANumber(line){
//   i++
//   line.push(i)
//   return i
// }
//
// takeANumber(line) -> 1
// takeANumber(line) -> 2
// noseSeving(line) -> 1
// nowServing(line) -> 2
// takeANumber(line) -> 3

function nowServing(katzDeliLine){
  if (katzDeliLine.length){
    return "Currently serving " + katzDeliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
      for (let i = 0; i < katzDeliLine.length; i++){
        katzDeliLine[i]=" "+`${i+1}`+". "+katzDeliLine[i]
      }
  }
  return `The line is currently:${katzDeliLine}`
}
/*
function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  } else {
  const numbersAndNames = []
  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
  }
}
*/
