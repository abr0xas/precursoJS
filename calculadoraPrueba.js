debugger;

function numRaiz(numberList){
    return Math.sqrt(numberList);
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
  };
  
function calculatorPro() {
    let newNumber;
    let numberList = [];
  
    
    
    do {
        newNumber = prompt('Enter a number or press cancel to stop');
        numeroValido=parseFloat(newNumber); 
        if (newNumber !== null && isNaN(numeroValido)){
        alert('introduzca un valor permitido');
      }else if(!isNaN(newNumber)){
        numberList.push(newNumber);
        
      };
    } while (newNumber !== null){
        if(numberList.length === 1){
            const elegirOperacion = prompt("Que operacion desea realizar? raiz/suma/resta/multiplicar/dividir") 
            switch (elegirOperacion) {
              case 'raiz':
                   numRaiz();
                   var hacerRaiz = numRaiz(numberList[0]);
            console.log(hacerRaiz);   
                  break;}
            
     }else if(numberList.length >= 2){
        const elegirOperacion = prompt("Que operacion desea realizar? raiz/suma/resta/multiplicar/dividir") 
        switch (elegirOperacion) {
            case 'suma':
              numSuma();
              var hacerSuma = numSuma(numberList[0], numberList[1]);
          console.log(hacerSuma);    
           break;
           case 'resta':
               numResta();
               var hacerResta = numResta(numberList[0], numberList[1]);
               console.log(hacerResta);
              break;
          case 'multipicar':
              numMult()   
              var hacerMult = numMult(numberList[0], numberList[1]);
          console.log(hacerMult);
          break;
          case 'dividir':
              numDiv()
              var hacerDiv = numDiv(numberList[0], numberList[1]);
          console.log(hacerDiv);
              break;
          default:
              alert('Elejir una operacion')
              break;
        }
     }else if (isNaN(num1) || isNaN(num2)){
      
          console.log('No es un numero');
        
        }
    
  }
    
  }
  
  
  
  
  
  const inicioCalculo = prompt("New numbers? y/n") 
  switch (inicioCalculo) {
    case 'y':
        calculatorPro()
        
        
         break;
    case 'n':    
    
     alert ("Bye!");
    break;
    default:
        alert('Elejir entre y/n')
        break;

    //Case 'y' => calculatorPro()
  
      //Output => 
      //The result of the sum is resultSum
      //The result of the rest is resultRest
      
      
    //Case 'n' => "Bye!"
}