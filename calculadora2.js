const num1 = parseFloat(prompt("Operaciones"));
const num2 = parseFloat(prompt("Operaciones"));
var Resultado = [];

function numRaiz(x){
  return Math.sqrt(x);
};
function numSuma(num1, num2){
  return  num1 + num2 ;  
};
function numResta(num1, num2){  
  return  num1 - num2 ;
};
function numMult(num1, num2){ 
  return  num1 * num2 ;  
};
function numDiv(num1, num2){  
  return  num1 / num2 ; 
}

if(!isNaN(num1) && isNaN(num2)){
  
  var hacerRaiz = numRaiz(num1);
  console.log(hacerRaiz);
  
} else if(isNaN(num1) && !isNaN(num2)){
  
  var hacerRaiz = numRaiz(num2);
  console.log(hacerRaiz);

} else if (isNaN(num1) || isNaN(num2)){
  
  console.log('No es un numero');

} else if(!isNaN(num1) || !isNaN(num2)){
  
  var hacerSuma = numSuma(num1, num2);
  console.log(hacerSuma);
  
  var hacerResta = numResta(num1, num2);
  console.log(hacerResta);
  
  var hacerMult = numMult(num1, num2);
  console.log(hacerMult);
  
  var hacerDiv = numDiv(num1, num2);
  console.log(hacerDiv);
}

