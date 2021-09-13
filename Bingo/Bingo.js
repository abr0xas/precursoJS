debugger;

function bingo(){

let jugador = {nombre:'',inicio: 100, final:''}
let rankingJugadores = [{nombre: 'Miguel', inicio: 100, final: 20},
               {nombre: 'Pedro', inicio: 100, final: 45}];
let historicoNumeros = [];
let carton = [];
let vueltas = 0;
let score = 100;
let play = true

nuevaPartida();

function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function nuevaPartida() {
  if (confirm("desea jugar?")) {
      if(players()){
        bingoCard();
        generarBombo();
        jugar();
        comparar();
        listarankingJugadores();
      }
  } 
}
 //players();
 function players() {
    let newName = null;
    do {
      newName = prompt("Introducir Nombre jugador");
    } while (!newName);

    jugador.nombre = newName;
    rankingJugadores.push(jugador);
    console.log(rankingJugadores);
    alert(
      "El sistema de ranking consite en tener la mayor cantidad de puntos finales al terminar la partida"
    );

    return newName != null;
  }
 //bingoCard();
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

 }
 //generarBombo();

 function generarBombo(){
    
    //while (historicoNumeros.length < 9) {
    let numberBombo = generateRandomNumber();
    //if (historicoNumeros.indexOf(numberBombo) === -1) {
    //historicoNumeros.push(numberBombo);
    //}
    if(numberBombo !== 0 && !historicoNumeros.includes(numberBombo)){
        console.log(numberBombo);
        alert(`Ha salido el numero ${numberBombo}!`)
        historicoNumeros.push(numberBombo);
       
         
    } else(numberBombo = generateRandomNumber());
  //}
  console.log(historicoNumeros);

  
    
    //let historicoNumeros = [];
    //numberBombo = generateRandomNumber();
    //console.log(numberBombo);
    //if(numberBombo !== 0 && !historicoNumeros.includes(numberBombo)){
        //historicoNumeros.push(numberBombo);
         
    //} else(generarBombo());
   //for(let i= 0; i<carton.length; i++){
            
 //}    
 }
 //jugar();
 
function jugar(){

  for (let i = 0; i < historicoNumeros.length; i++){
      for (let j = 0; j < carton.length; j++){
        if (historicoNumeros[i] === carton[j]){
          console.log(carton[j])
  //if(numberBombo !== 0 && carton.includes(numberBombo)){
      //console.log(numberBombo);
      

  
      let index = carton.indexOf(historicoNumeros[i]);
      carton[index] = 'x';
      console.log(carton);
      vueltas += (index +1)*carton.length
          console.log(vueltas)
      
          /* if(carton.toString() === "x,x,x,x,x"){
            alert('Linea!');
            puntuacion();
        
           }else(nextTurn()) */
      
      //let index = carton.findIndex(carton => carton[i] === numberBombo)
  //if(index !== -1){
      //carton[i][index] = 'x';
      //console.log(carton)
  //};
  }
 }
}
}

 function comparar(){
   while(carton.toString() !== "x,x,x,x,x"){
    generarBombo();
    jugar();
    if(carton.toString() === "x,x,x,x,x"){
      alert('Linea!');
      puntuacion();
  
     }else(nextTurn());
     

   }
 
  
} 

function nextTurn(){
 /* const accion = prompt("Nuevo turno? si/no") 
switch (accion){
    case 'si':
      generarBombo()
        break;
    case 'no':
        alert('Gracias por jugar');
        nuevaPartida();
        break;
    default:
        alert('Elejir entre si/no')
        break;    
}    */
 if (confirm("Seguir jugando?")) {
  generarBombo();
 } else (nuevaPartida())  
}

 
 function puntuacion(){
     jugador.final = score - vueltas;
     console.log(jugador.final)
     rankingJugadores.push(jugador);
 }
 //listarankingJugadores();

 function listarankingJugadores(){
    rankingJugadores.sort(function(a, b){
        return (b.final - a.final);
    });
    for(let r=0; r < rankingJugadores.length; r++ ){
        console.log(rankingJugadores[r])
    }
 }
 nuevaPartida();

 

}bingo();