function oneThroughTwenty() {
    
  
    let retorno = [];
    for (let contador = 1; contador <= 20; contador++) {
        retorno.push(contador)
    }
    return retorno;
}
console.log(oneThroughTwenty());
    

function evensToTwenty() {
    
  
  let retorno = [];
  //for (let contador = 2; contador <= 20; contador+=2)
  for (let contador = 1; contador <= 20; contador++)
  if (contador %2==0) {
   
       retorno.push(contador)
  }
  
  return retorno;
}
console.log(evensToTwenty());

function oddsToTwenty() {
    
  let retorno = [];
  //for (let contador = 1; contador <= 20; contador+=2)
  for (let contador = 1; contador <= 20; contador++)
  if (contador %2!==0) 
      retorno.push(contador)
  
  
  return retorno;}

console.log(oddsToTwenty());

function multiplesOfFive() {
    
  let retorno = [];
  for (let contador = 1; contador <= 100; contador++)
  if (contador %5==0)
  retorno.push(contador)
  return retorno;
}

console.log(multiplesOfFive())


function squareNumbers() {
 
 let retorno = [];
  for (let contador = 1; contador <= 10; contador++){
    
      retorno.push(contador*contador)
    
  }
  return retorno;

}

console.log (squareNumbers())

function countingBackwards() {
    
  let retorno = [];
    for (let contador = 20; contador >= 1; contador--) {
        retorno.push(contador)
    }
    return retorno;
}

console.log (countingBackwards())

function evenNumbersBackwards() {
    
  let retorno = [];
  for (let contador = 20; contador >= 1; contador--)
  if (contador %2==0)  {
      retorno.push(contador)
  }
  return retorno;
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
  let retorno = [];
  for (let contador = 20; contador >= 1; contador--)
  if (contador %2!==0)  {
      retorno.push(contador)
  }
  return retorno;
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    
  let retorno = [];
  for (let contador = 100; contador >= 1; contador--)
  {if (contador %5==0)  
      {retorno.push(contador)}
  }
  return retorno;
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    
let retorno = [];
for (let contador = 100; contador >= 1; contador--){
  for (let square = 1; square <= contador; square++) {
    if (square*square==contador){
      retorno.push(contador)
    }
  }
}
 return retorno
}

console.log(squareNumbersBackwards())
