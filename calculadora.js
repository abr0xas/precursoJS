const num1 = parseFloat(prompt("Operaciones"));
const num2 = parseFloat(prompt("Operaciones"));
var Resultado = [];

function calculatorPro() {
  let newNumber;
  let numberList = [];

  do {
    newNumber = prompt('Enter a number or press cancel to stop');
    numberList.push(newNumber)
  } while (newNumber !== null)

  
}

if(!isNaN(num1) && isNaN(num2)){
  function numRaiz(num1){
    return Math.sqrt(num1)
  }
  var hacerRaiz = numRaiz(num1);
  console.log(hacerRaiz);
  
} else if(isNaN(num1) && !isNaN(num2)){
  function numRaiz(num2){
    return Math.sqrt(num2)
  }
  var hacerRaiz = numRaiz(num2);
  console.log(hacerRaiz);

} else if (isNaN(num1) || isNaN(num2)){
  
  console.log('No es un numero');

} else if(!isNaN(num1) || !isNaN(num2)){
  function numSuma(num1, num2){
    
    return  num1 + num2 ;
      
  }
  var hacerSuma = numSuma(num1, num2);
  console.log(hacerSuma);
  
  function numResta(num1, num2){
    
    return  num1 - num2 ;
      
  }
  var hacerResta = numResta(num1, num2);
  console.log(hacerResta);
  
  function numMult(num1, num2){
    
    return  num1 * num2 ;
      
  }
  var hacerMult = numMult(num1, num2);
  console.log(hacerMult);
  
  function numDiv(num1, num2){
    
    return  num1 / num2 ;
      
  }
  var hacerDiv = numDiv(num1, num2);
  console.log(hacerDiv);
}

prompt("New numbers? y/n")

  Case 'y' => calculatorPro()

    //Output => 
    //The result of the sum is resultSum
    //The result of the rest is resultRest
    
    
  Case 'n' => "Bye!"