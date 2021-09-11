function bingo() {
  let jugador = { nombre: "", inicio: 100, final: "" };
  //cambiar nombre coherente  =
  let ranking = [
    { nombre: "Miguel", inicio: 100, final: 20 },
    { nombre: "Pedro", inicio: 100, final: 45 },
  ];
  //cambio nombre -> comparar por historicoNumeros
  let historicoNumeros= [];
  let carton = [];
  let vueltas = 0;
  let score = 100;
  //let play = true;

 debugger;
  nuevaPartida();

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  function nuevaPartida() {
    if (confirm("desea jugar?")) {
        if(players()){
          bingoCard();
          bombo();
          jugar();
        }
    } 
  }

  function players() {
    let newName = null;
    do {
      newName = prompt("Introducir Nombre jugador");
    } while (!newName);

    jugador.nombre = newName;
    ranking.push(jugador);
    console.log(ranking);
    alert(
      "El sistema de ranking consite en tener la mayor cantidad de puntos finales al terminar la partida"
    );

    return newName != null;
  }

 

  function bingoCard() {
    while (carton.length < 5) {
      newNumber = generateRandomNumber();
      if (newNumber !== 0 && !carton.includes(newNumber)) {
        console.log(newNumber);
        carton.push(newNumber);
      } else newNumber = generateRandomNumber();
    }
    console.log(carton);
    console.table(carton);
  }
 
//generarBombo()
  function bombo() {
    while (historicoNumeros.length < 9) {
      let numberBombo = generateRandomNumber();
      //if (historicoNumeros.indexOf(numberBombo) === -1) {
      //historicoNumeros.push(numberBombo);
      //}
      if (numberBombo !== 0 && !historicoNumeros.includes(numberBombo)) {
        console.log(numberBombo);
        historicoNumeros.push(numberBombo);
      } else numberBombo = generateRandomNumber();
    }
    console.log(historicoNumeros);

    //let historicoNumeros = [];
    //numberBombo = generateRandomNumber();
    //console.log(numberBombo);
    //if(numberBombo !== 0 && !Comparar.includes(numberBombo)){
    //historicoNumeros.push(numberBombo);

    //} else(bombo());
    //for(let i= 0; i<carton.length; i++){

    //}
  }
  
   function jugar() {
 
    for (let i = 0; i < historicoNumeros.length; i++) {
      for (let j = 0; j < carton.length; j++) {
        if (historicoNumeros[i] === carton[j]) {
          console.log(carton[j]);
          //if(numberBombo !== 0 && carton.includes(numberBombo)){
          //console.log(numberBombo);

         // let index = carton.indexOf(historicoNumeros[i]);
         // carton[index] = "x";
          carton[j] = "x";
          console.log(carton);
         // vueltas += (index + 1) * carton.length;
          vueltas += (j + 1) * carton.length;

          console.log(vueltas);         

          //let index = carton.findIndex(carton => carton[i] === numberBombo)
          //if(index !== -1){
          //carton[i][index] = 'x';
          //console.log(carton)
          //};
        }
      }
    }

    if (carton.toString() === "x,x,x,x,x") {
        alert("Linea!");
        puntuacion();
      } else nextTurn();
  }

  function puntuacion() {
    jugador.final = score - vueltas;
    console.log(jugador.final);
    ranking.push(jugador);
  }
  listaRanking();

  function listaRanking() {
    ranking.sort(function (a, b) {
      return b.final - a.final;
    });
    for (let r = 0; r < ranking.length; r++) {
      console.log(ranking[r]);
    }
  } 

  function nextTurn() {
    const accion = prompt("Nuevo turno? si/no");
    switch (accion) {
      case "si":
        jugar();
        break;
      case "no":
        alert("Gracias por jugar");
        nuevaPartida();
        break;
      default:
        alert("Elejir entre si/no");
        break;
    }
  }
}
bingo();
