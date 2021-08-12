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


    const tipoUsuario = prompt("Tipo de usuario? ADMIN/USER") 
  switch (tipoUsuario) {
    case 'ADMIN':
        menuAdmin();  
        break;     
    case 'USER':
        menuUsuario();
         break;
    default:
        alert('Adios')
        break;
    
}

function menuAdmin(){
    const accion = prompt("Tipo de acción? Agregar/Borrar") 
    switch (accion){
        case 'Agregar':
            airlines()
            break;
        case 'Borrar':
            borrar()
            break;    
        }
}


function airlines() {

    let newFlight = {id:'', to:'', from:'', cost:'', scale:'' };

    for(let i=0; i < flights.length; i++ ){
        if(flights.length < 16){

            vueloId = prompt ('Introducir id');
            vueloId = parseInt(vueloId);
        //if (vueloDestino === NaN){
            newFlight.id = vueloId;
            vueloDestino = prompt ('Introducir Destino');
            //if (vueloDestino === NaN){
                newFlight.to = vueloDestino;
        //}
        vueloOrigen = prompt ('Introducir Origen');
        //if (vueloOrigen === NaN){
            newFlight.from = vueloOrigen;
        //}
        vueloCosto = prompt ('Introducir Costo');
        vueloCosto = parseInt(vueloCosto);
        //if (vueloCosto === isNaN){
            newFlight.cost = vueloCosto;
        //}
        vueloEscala = prompt ('Escala? true/false');
        //if (vueloEscala === true || false){
            newFlight.scale = vueloEscala;
        //}
        flights.push(newFlight);

        }; 
            console.log(flights[i])           
        break;

    }
    //El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala
     
}menuAdmin();

function borrar(){
    let eliminarId;
    eliminarId = prompt('Introduzca la id del vuelo a borrar');
        eliminarId = parseInt(eliminarId); 
           
      let index = flights.findIndex(flights => flights.id === eliminarId);  
      if(index > -1){
        flights.splice(index, 1);
      };
      for(let i=0; i < flights.length; i++ ){
        console.log(flights[i])
      };
      
}menuAdmin();

function menuUsuario(){
    const accion = prompt("Tipo de acción? Mayor/Menor/Igual") 
    switch (accion){
        case 'Mayor':
            mayorPrecio()
            break;
        case 'Menor':
            menorPrecio()
            break;
        case 'Igual':
            igualPrecio()
            break;    
        }
}

  function mayorPrecio(){
    flights.sort(function(a, b) {
        return (b.cost - a.cost);
      });
    for(let i=0; i < flights.length; i++ ){
        console.log(flights[i])
    };
    compraVuelo = prompt('ID vuelo');
    compraVuelo = parseInt(compraVuelo);
    
    for(let i=0; i < flights.length; i++ )
    if (flights[i].id === compraVuelo){
        console.log(flights[i])
        
        alert('Gracias por su compra, vuelva pronto.')
    }
}
  
  function menorPrecio(){
    flights.sort(function (a, b){
        return (a.cost - b.cost)
    });
    for(let i=0; i < flights.length; i++ ){
        console.log(flights[i])
    };
    compraVuelo = prompt('ID vuelo');
    compraVuelo = parseInt(compraVuelo);
    
    for(let i=0; i < flights.length; i++ )
    if (flights[i].id === compraVuelo){
        console.log(flights[i])
        
        alert('Gracias por su compra, vuelva pronto.')
    }
}

  function igualPrecio(){
    flights.sort(function (a, b){
        
        if (a.cost > b.cost) {
            return 1;
          }
          if (a.cost < b.cost) {
            return -1;
          }
          // a must be equal to b
          return 0;
        
    });
    for(let i=0; i < flights.length; i++ ){
        console.log(flights[i])
    };
    compraVuelo = prompt('ID vuelo');
    compraVuelo = parseInt(compraVuelo);
    
    for(let i=0; i < flights.length; i++ )
    if (flights[i].id === compraVuelo){
        console.log(flights[i])
        
        alert('Gracias por su compra, vuelva pronto.')
    }
}    
    


    



