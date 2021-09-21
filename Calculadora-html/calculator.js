









/* 
function calculatorPro() {
    let newNumber;
    let numberList = [];

    
    do {
        newNumber = prompt('Enter a number or press cancel to stop');
        numeroValido = parseFloat(newNumber); 
        if (newNumber === null && isNaN(numeroValido)){
        alert('introduzca un valor permitido');
      }else if(!isNaN(newNumber)){
        numberList.push((Number(newNumber)));
        
      };
    } while (newNumber !== null);
        if(numberList.length === 1){
            
                  function numRaiz();
                   let hacerRaiz = numRaiz(numberList[0]);
                   hacerRaiz = hacerRaiz.toFixed(3);
            console.log(hacerRaiz);   
                 
            
     }else if(numberList.length >= 2){
      
      function numSuma(numberList){
        let totalSuma = 0;
           len = numberList.length
    
      for (let i = 0; i < len; i++){
        totalSuma += numberList[i];
        
      };
      
      return totalSuma.toFixed(3);
      
      };
      let hacerSuma = (numSuma(numberList));
          console.log(hacerSuma); 
              
          
               function numResta(numberList){
                let totalResta = numberList[0];
                numberList.shift();
                len = numberList.length;
                       
                for (let i = 0; i < len; i++){
                totalResta -= numberList[i];
                 
                };
                
                 return totalResta.toFixed(3);
              };
              
               let hacerResta = numResta(numberList);
               console.log(hacerResta);
          
              function numMult(numberList){
                let totalMult = 1;
                len = numberList.length
                for (let i = 0; i < len; i++){
                  
                totalMult *= numberList[i];
                  
                };
                  return totalMult.toFixed(3);
              }; 
              let hacerMult = numMult(numberList);
              console.log(hacerMult);
            
         
              function numDiv(numberList){
                let totalDiv = numberList[0];
                numberList.shift();
                   len = numberList.length
              for (let i = 0; i < len; i++){

                totalDiv /= numberList[i]
                
              };
              return totalDiv.toFixed(3);
            };
              let hacerDiv = numDiv(numberList);
              console.log(hacerDiv);
     };
    
  };
  
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

} */