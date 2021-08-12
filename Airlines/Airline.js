debugger;

let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];


//function airlines() {

let ultimosVuelos = [];
let costeTotal = [];
let costeMedio = [];
let escalaVuelos = [];

    
const newName = prompt('Introducir Nombre');
if(newName === isNaN){
    alert('Bienvenido');  
}

//El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala

for(let i = 0; i < flights.length; i++){
    if (flights[i].scale === true) {
        escalaVuelos.push(flights[i].scale)

        console.log(`El vuelo con origen: ${flights[i].from} y destino: ${flights[i].to} tiene un coste de ${flights[i].cost} y realiza escala`);
    }else {
        console.log(`El vuelo con origen: ${flights[i].from} y destino: ${flights[i].to} tiene un coste de ${flights[i].cost} y no realiza ninguna escala`);
        
    };

    if (i>5 ) {
        
        ultimosVuelos.push(flights[i].to);
    };
    
    costeTotal.push(flights[i].cost);
    
    
}
console.log(costeTotal)
function numSuma(costeTotal){
    var totalSuma = 0;
    
    
       len = costeTotal.length

  for (var x = 0; x < len; x++){
    totalSuma += costeTotal[x];
    
  };
  
  return totalSuma;
  
  };
  var hacerSuma = (numSuma(costeTotal));
      console.log(hacerSuma); 

   costeMedio = hacerSuma/len;
   console.log(costeMedio);

   console.log(escalaVuelos.length);

   console.log(ultimosVuelos);


//}


