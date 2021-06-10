const num1 = 10;
const num2 = 's';
var Resultado = [];

function numSuma(num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
    return 'No es un numero!';
  }
  return  num1 + num2 ;
    
}
var hacerSuma = numSuma(num1, num2);
console.log(hacerSuma);

function numResta(num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
    return 'No es un numero!';
  }
  return  num1 - num2 ;
    
}
var hacerResta = numResta(num1, num2);
console.log(hacerResta);

function numMult(num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
    return 'No es un numero!';
  }
  return  num1 * num2 ;
    
}
var hacerMult = numMult(num1, num2);
console.log(hacerMult);

function numDiv(num1, num2){
  if (isNaN(num1) || isNaN(num2)) {
    return 'No es un numero!';
  }
  return  num1 / num2 ;
    
}
var hacerDiv = numDiv(num1, num2);
console.log(hacerDiv);