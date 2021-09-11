debugger;
const questions = [

    { letter: [{letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
          {letter: "a", answer: "anticuario", status: 0, question: "CON LA A. Persona que colecciona o negocia con antigüedades"},
          {letter: "a", answer: "arteria", status: 0, question: "CON LA A. Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo"}]},

    { letter: [{letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
          {letter: "b", answer: "biberón", status: 0, question: "CON LA B. Utensilio para la lactancia artificial que consiste en una botella pequeña con una tetina de goma"},
          {letter: "b", answer: "bitácora", status: 0, question: "CON LA B. En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula"}]},

    { letter: [{letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
          {letter: "c", answer: "capo", status: 0, question: "CON LA C. Jefe de la mafia, especialmente de narcotraficantes"},
          {letter: "c", answer: "cicerone", status: 0, question: "CON LA C. Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes"}]},

    /* { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"}, */

    { letter: [{letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
          {letter: "z", answer: "zumbado", status: 0, question: "CON LA Z. Participio del verbo zumbar"},
          {letter: "z", answer: "zócalo", status: 0, question: "CON LA Z. Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación"}]} ]

//function palabraRandom(questions){
   // return questions.letter[Math.floor((Math.random()*questions.length))]
//}
/*questions
let rosco2 = [];
let listKeys = Object.keys(letter);
let randomIndex = Math.floor(Math.random() * listKeys.length);
let randomObject = questions.letter[listKeys[randomIndex]];
rosco2.push(randomObject)
console.log(rosco2);*/


function generarPasapalabra(){
    return rosco2[Math.floor(Math.random()*rosco2.length)];
}
    //let palabra = palabraRandom();
    let rosco = [];
    let rosco2 = [];

    for(let i=0; i<questions.length; i++){
        for (let Memb in questions[i].letter) {
            console.log(questions[i].letter[Memb]);
            rosco2.push(questions[i].letter[Memb])
           // console.log(rosco2)
            /*let listKeys = Object.keys(questions[i].letter);
            let randomIndex = Math.floor(Math.random() * listKeys.length);
            let randomObject = questions[i].letter[listKeys[randomIndex]];
            console.log(randomObject)
            rosco.push(randomObject)*/

            
        }
        console.log(rosco2)
        let palabra = generarPasapalabra();
        if(!rosco.includes(palabra) && !rosco.includes(questions[i].letter[Memb].letter) ){
            console.log(palabra)
            rosco.push(palabra)
        
        } else(newNumber = generarPasapalabra());
        //}
        
            
        
        
    }
    
    console.log(rosco)
        
//}generarPasapalabra();

    