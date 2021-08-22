debugger;
bingo();
function bingo(){

let jugador = {nombre:'',inicio: 100, fianl:''}
let ranking = [{nombre: 'Miguel', inicio: 100, final: 20},
               {nombre: 'Pedro', inicio: 100, final: 45}];
let comparar = [];
let carton = [];
let vueltas = 0;
let score = 100;

 function generateRandomNumber(){                        
    return Math.floor(Math.random()*20);       
 }

 nuevaPartida();

 function nuevaPartida(){

    const accion = prompt("Nueva partida? si/no") 
    switch (accion){
        case 'si':
            players()
            break;
        case 'no':
            alert('Gracias por jugar')
            break;
        default:
            alert('Elejir entre si/no')
            break;    
    };

 }players();

 function players(){

    for(let j = 0; j<ranking.length; j++){
        jugador.nombre = prompt('Introducir Nombre jugador');
    ranking.push(jugador);
    break;
  };
  for(let j = 0; j<ranking.length; j++){
  console.log(ranking[j])
  };
  //alert('El sistema de ranking consite en tener la mayor cantidad de puntos finales al terminar la partida')
 }bingoCard();

    
 function bingoCard(){
    
  while(carton.length < 15){
    newNumber = generateRandomNumber();
    if(newNumber !== 0 && !carton.includes(newNumber)){
        console.log(newNumber);
        carton.push(newNumber);
    } else(newNumber = generateRandomNumber());
  }
  console.log(carton);
  console.table(carton);

 }bombo();

 function bombo(){
    
    while (comparar.length < 19) {
    let numberBombo = generateRandomNumber();
    
    if(numberBombo !== 0 && !comparar.includes(numberBombo)){
        console.log(numberBombo);
        comparar.push(numberBombo);
       
         
    } else(numberBombo = generateRandomNumber());
  }
  console.log(comparar);

    
    
 }jugar();

 function jugar(){

    for (let i = 0; i < comparar.length; i++){
        for (let j = 0; j < carton.length; j++){
          if (comparar[i] === carton[j]){
            console.log(carton[j])
    
        

    
        let index = carton.indexOf(comparar[i]);
        carton[index] = 'x';
        console.log(carton);
        vueltas += (index +1)*carton.length
            console.log(vueltas)
        
        if(carton.toString() === "x,x,x,x,x"){
            alert('Linea!');
            puntuacion();

        }else(nextTurn())
        
       
    
    };
   }
  }
 }

 function puntuacion(){
     jugador.final = score - vueltas;
     console.log(jugador.final)
     ranking.push(jugador);

 }listaRanking();

 function listaRanking(){
    ranking.sort(function(a, b){
        return (b.final - a.final);
    });
    for(let r=0; r < ranking.length; r++ ){
        console.log(ranking[r])
    }
 }nuevaPartida();

 function nextTurn(){
    const accion = prompt("Nuevo turno? si/no") 
    switch (accion){
        case 'si':
            jugar()
            break;
        case 'no':
            alert('Gracias por jugar')
            break;
        default:
            alert('Elejir entre si/no')
            break;    
    }
 }

}


