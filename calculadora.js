function calculatorPro() {
  let newNumber;
  let numberList = [];

  do {
    newNumber = parseFloat(prompt('Enter a number or press cancel to stop'));
    if (isNaN(newNumber)){
      alert('introduzca un valor permitido');
    }else if(!isNaN(newNumber)){
      numberList.push(newNumber)
    }
  } while (newNumber !== null)

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
  
}





prompt("New numbers? y/n")

  //Case 'y' => calculatorPro()

    //Output => 
    //The result of the sum is resultSum
    //The result of the rest is resultRest
    
    
 // Case 'n' => "Bye!"