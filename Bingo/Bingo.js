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
    return Math.floor(Math.random()*10);       
 }

 nuevaPartida();

 function nuevaPartida(){

    
        if(confirm('Nueva partida')){
            players()
        }else(alert('Gracias por jugar'))
    

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
    
  while(carton.length < 5){
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
    
    while (comparar.length < 9) {
    let numberBombo = generateRandomNumber();
    //if (comparar.indexOf(numberBombo) === -1) {
    //comparar.push(numberBombo);
    //}
    if(numberBombo !== 0 && !comparar.includes(numberBombo)){
        console.log(numberBombo);
        comparar.push(numberBombo);
       
         
    } else(numberBombo = generateRandomNumber());
  }
  console.log(comparar);

    
    //let comparar = [];
    //numberBombo = generateRandomNumber();
    //console.log(numberBombo);
    //if(numberBombo !== 0 && !Comparar.includes(numberBombo)){
        //comparar.push(numberBombo);
         
    //} else(bombo());
   //for(let i= 0; i<carton.length; i++){
            
 //}    
 }jugar();

 function jugar(){

    for (let i = 0; i < comparar.length; i++){
        for (let j = 0; j < carton.length; j++){
          if (comparar[i] === carton[j]){
            console.log(carton[j])
    //if(numberBombo !== 0 && carton.includes(numberBombo)){
        //console.log(numberBombo);
        

    
        let index = carton.indexOf(comparar[i]);
        carton[index] = 'x';
        console.log(carton);
        vueltas += (index +1)*carton.length
            console.log(vueltas)
        
        if(carton.toString() === "x,x,x,x,x"){
            alert('Linea!');
            puntuacion();

        }else(nextTurn())
        
        //let index = carton.findIndex(carton => carton[i] === numberBombo)
    //if(index !== -1){
        //carton[i][index] = 'x';
        //console.log(carton)
    //};
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


//Notas:
// Este es en teoria el simple pero me confundi y lo hice como si fuera el Pro,
// la unica diferencia es que en este son 5 numeros y en el pro son 15.
// Lo que no consigo resolver es:
// Como ves tengo una funcion global y dentro muhcas, cada una funciona bien pero
// no se porque ahora a la hora de hacer que funcione no lo hace bien, en el sentido que las
// funciones no siguen el orden que les he puesto, supongo que me faltan condiciones para que
// dejen de ejecutar cuando toca.
// Y el otro problema es ya con el pro, he de poner una funcion mas para que los 15 numeros
// se conporten como si fueran 3 partes distintas.




