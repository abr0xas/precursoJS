debugger;
bingo();
function bingo(){


function generateRandomNumber(){                        
return Math.floor(Math.random()*10);       
}
     

let carton = [];
bingoCard();
    
function bingoCard(){
    


while(carton.length < 5){
    newNumber = generateRandomNumber();
    if(newNumber !== 0 && !carton.includes(newNumber)){
        console.log(newNumber);
        carton.push(newNumber);
    } else(newNumber = generateRandomNumber());
}
console.log(carton);
console.table(carton);

}bombo()

function bombo(){
    let comparar = [];
    while (comparar.length < 10) {
    let numberBombo = generateRandomNumber();
    //if (comparar.indexOf(numberBombo) === -1) {
    //comparar.push(numberBombo);
    //}
    if(numberBombo !== 0 && !comparar.includes(numberBombo)){
        comparar.push(numberBombo);
        console.log(comparar);

        if(numberBombo !== 0 && carton.includes(numberBombo)){
            console.log(numberBombo);
            
    
        
            let index = carton.indexOf(numberBombo);
            carton[index] = 'x';
            console.log(carton);
            
            if(carton.toString() === "x,x,x,x,x"){
                alert('Linea!')
            }else(nextTurn())
            
            //let index = carton.findIndex(carton => carton[i] === numberBombo)
        //if(index !== -1){
            //carton[i][index] = 'x';
            //console.log(carton)
        //};
        }else(bombo());
         
    } else(bombo());
    }
    
    //let comparar = [];
    //numberBombo = generateRandomNumber();
    //console.log(numberBombo);
    //if(numberBombo !== 0 && !Comparar.includes(numberBombo)){
        //comparar.push(numberBombo);
         
    //} else(bombo());
   //for(let i= 0; i<carton.length; i++){
        
    
    
//}
    
    
}

function nextTurn(){
    const accion = prompt("Nuevo turno? si/no") 
    switch (accion){
        case 'si':
            bombo()
            break;
        case 'no':
            alert('Gracias por jugar')
            break;    
        }
}

}




