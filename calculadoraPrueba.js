debugger;

function numRaiz(numberList){
    return Math.sqrt(numberList);
  };
  function numSuma(numberList){
    var total = 0,
       len = numberList.length

  for (var i = 0; i < len; i++){
    total += numberList[i];
  }
  return total;
      
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
    //let numberList2 = numberList.pop()
     
  
    
    
    do {
        newNumber = prompt('Enter a number or press cancel to stop');
        numeroValido = parseFloat(newNumber); 
        if (newNumber !== null && isNaN(numeroValido)){
        alert('introduzca un valor permitido');
      }else if(!isNaN(newNumber)){
        numberList.push((Number(newNumber)));
        
      };
    } while (newNumber !== null){
        if(numberList.length === 1){
            // const elegirOperacion = prompt("Que operacion desea realizar? raiz/suma/resta/multiplicar/dividir") 
            // switch (elegirOperacion) {
            //   case 'raiz':
                   numRaiz();
                   var hacerRaiz = numRaiz(numberList[0]);
            console.log(hacerRaiz);   
                  //break;}
            
     }else if(numberList.length >= 2){
      numberList += numberList.pop()

      // function numSuma(numberList){
      //   var totalSuma = 0;
        
        
      //      len = numberList.length
    
      // for (var i = 0; i < len; i++){
      //   totalSuma += numberList[i];
        
      // }
      // console.log(totalSuma);
      
      // };
      // var hacerSuma = (numSuma(numberList));
      //     console.log(hacerSuma); 

   


        // const elegirOperacion = prompt("Que operacion desea realizar? raiz/suma/resta/multiplicar/dividir") 
        // switch (elegirOperacion) {
        //     case 'suma':
        
              
           //break;
          //  case 'resta':
              // numResta();
              function numResta(numberList){
              var totalResta = numberList[0];
              len = numberList.length
              numberList.shift()
            
              for (var i = 0; i < len; i++){
              totalResta -= numberList[i];
               
              }
               console.log(totalResta);
            }
               var hacerResta = numResta(numberList);
               console.log(hacerResta);
          //     break;
          // case 'multipicar':
              //numMult();
              function numMult(numberList){
                
              var totalMult = 1;
                
              len = numberList.length
            
              for (var i = 0; i < len; i++){
                
              totalMult *= numberList[i];
                
              }
            
              console.log(totalMult)  
            } 
              var hacerMult = numMult(numberList);
              console.log(hacerMult);
            
          // break;
          // case 'dividir':
              //numDiv();
              function numDiv(numberList){
                
                
                   len = numberList.length
            
              for (var i = 0; i < len; i++){
                
                
              }
            }
              var hacerDiv = numDiv(numberList);
              console.log(hacerDiv);
        //       break;
        //   default:
        //       alert('Elejir una operacion')
        //       break;
         //}
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