debugger;
let roscoPasapalabra = [];
const questions1 = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},

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

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ]

const questions2 = [

    { letter: "a", answer: "anticuario", status: 0, question: "CON LA A. Persona que colecciona o negocia con antigüedades"},

    { letter: "b", answer: "biberón", status: 0, question: "CON LA B. Utensilio para la lactancia artificial que consiste en una botella pequeña con una tetina de goma"},

    { letter: "c", answer: "capo", status: 0, question: "CON LA C. Jefe de la mafia, especialmente de narcotraficantes"},

    /* { letter: "d", answer: "desodorante", status: 0, question: "CON LA D. Producto que se utiliza para suprimir el olor corporal o de algún recinto"},

    { letter: "e", answer: "efímero", status: 0, question: "CON LA E. Pasajero, de corta duración"},

    { letter: "f", answer: "faja", status: 0, question: "CON LA F. Prenda interior elástica que ciñe la cintura, o la cintura y las caderas"},

    { letter: "g", answer: "gominola", status: 0, question: "CON LA G. Golosina blanca masticable, generalmente recubierta de azúcar "},

    { letter: "h", answer: "historia", status: 0, question: "CON LA H. Conjunto de todos los hechos ocurridos en tiempos pasados "},

    { letter: "i", answer: "ilves", status: 0, question: "CON LA I. Apellido del político que fue presidente de Estonia entre los años 2006 y 2016"},

    { letter: "j", answer: "judión", status: 0, question: "CON LA J. Variedad de judía de vainas anchas y semilla grande"},

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "linaje", status: 0, question: "CON LA L. Ascendencia o descendencia de una familia, especialmente noble"},

    { letter: "m", answer: "madriguera", status: 0, question: "CON LA M. Cueva en la que habitan ciertos animales, especialmente los conejos"},

    { letter: "n", answer: "navato", status: 0, question: "CON LA N. Espinazo de los vertebrados"},

    { letter: "ñ", answer: "acuñar", status: 0, question: "CONTIENE LA Ñ. Hacer o fabricar moneda"},

    { letter: "o", answer: "onírico", status: 0, question: "CON LA O. Perteneciente o relativo a los sueños"},

    { letter: "p", answer: "piolet", status: 0, question: "CON LA P. Instrumento con forma de pico que utilizan los alpinistas para asegurar sus movimientos sobre la nieve o el hielo"},

    { letter: "q", answer: "equilátero", status: 0, question: "CON LA Q. Triángulo que tiene todos sus lados iguales"},

    { letter: "r", answer: "risaralda", status: 0, question: "CON LA R. Departamento de Colombia con capital en la ciudad de Pereira"},

    { letter: "s", answer: "sentar", status: 0, question: "CON LA S. Poner o colocar a alguien en una silla o banco, de manera que quede apoyado y descansando sobre las nalgas"},

    { letter: "t", answer: "tipi", status: 0, question: "CON LA T. Tienda de piel de forma cónica que utilizaban como vivienda los indios de las praderas de América del Norte"},

    { letter: "u", answer: "unilateral", status: 0, question: "CON LA U. Que se refiere o se circunscribe solamente a una parte o a un aspecto de algo"},

    { letter: "v", answer: "vilano", status: 0, question: "CON LA V. Flor del cardo"},

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "dux", status: 0, question: "CONTIENE LA X. En las repúblicas de Venecia o Génova, príncipe o magistrado supremo"},

    { letter: "y", answer: "ensayar", status: 0, question: "CONTIENE LA Y. Preparar el montaje y ejecución de un espectáculo antes de ofrecerlo al público"}, */

    { letter: "z", answer: "zumbado", status: 0, question: "CON LA Z. Participio del verbo zumbar"}, ]

const questions3 = [

    { letter: "a", answer: "arteria", status: 0, question: "CON LA A. Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo"},

    { letter: "b", answer: "bitácora", status: 0, question: "CON LA B. En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula"},

    { letter: "c", answer: "cicerone", status: 0, question: "CON LA C. Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes"},

    /* { letter: "d", answer: "diplomacia", status: 0, question: "CON LA D. Actividad que realiza un país para mantener buenas relaciones con el resto de países"},

    { letter: "e", answer: "equinoccio", status: 0, question: "CON LA E. Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra"},

    { letter: "f", answer: "fisiología", status: 0, question: "CON LA F. Ciencia que estudia las funciones de los órganos de los seres vivos"},

    { letter: "g", answer: "glaciación", status: 0, question: "CON LA G. Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo"},

    { letter: "h", answer: "hinojo", status: 0, question: "CON LA H. Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión"},

    { letter: "i", answer: "ingenio", status: 0, question: "CON LA I. Capacidad para inventar cosas o para pensar y hablar con gracia"},

    { letter: "j", answer: "jade", status: 0, question: "CON LA J. Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno"},

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "lema", status: 0, question: "CON LA L. Frase que expresa la forma en que debe actuar una persona"},

    { letter: "m", answer: "miriñaque", status: 0, question: "CON LA M. Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo"},

    { letter: "n", answer: "ninfa", status: 0, question: "CON LA N. En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos"},

    { letter: "ñ", answer: "ñandú", status: 0, question: "CONTIENE LA Ñ. Ave parecida al avestruz, pero más pequeña y con tres dedos en cada pie"},

    { letter: "o", answer: "onomatopeya", status: 0, question: "CON LA O. Palabra que imita el sonido que hace un animal o una cosa"},

    { letter: "p", answer: "pabellón", status: 0, question: "CON LA P. Palabra que imita el sonido que hace un animal o una cosa"},

    { letter: "q", answer: "quimera", status: 0, question: "CON LA Q. Cosa que, sin ser real, alguien la imagina como posible o verdadera"},

    { letter: "r", answer: "rémora", status: 0, question: "CON LA R. Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes"},

    { letter: "s", answer: "sotana", status: 0, question: "CON LA S. Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos"},

    { letter: "t", answer: "testamento", status: 0, question: "CON LA T. Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias"},

    { letter: "u", answer: "urbanización", status: 0, question: "CON LA U. Conjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven"},

    { letter: "v", answer: "vencejo", status: 0, question: "CON LA V. Pájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido"},

    { letter: "w", answer: "whisky", status: 0, question: "CONTIENE LA W. Licor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales"},

    { letter: "x", answer: "xilografía", status: 0, question: "CONTIENE LA X. Manera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo"},

    { letter: "y", answer: "yak", status: 0, question: "CONTIENE LA Y. Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío"}, */

    { letter: "z", answer: "zócalo", status: 0, question: "CON LA Z. Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación"}, ]




 
function pasapalabra(){

    let respuesta='';

    //Función para ejecutar el rosco
    function rosco(){
        for(i=0; i<questions.length; i++){
            do{
                respuesta = prompt(`${questions[i].question}`);
                if(respuesta === 'pasapalabra' || respuesta === null){
                questions[i].status = 0;

                }else if(respuesta !== questions[i].answer){
                questions[i].status = 1;

                }else(questions[i].status = 2);
            console.log(questions[i].status);
            break;

            }while(questions[i].status === 0);
        }
    }rosco();
}pasapalabra();

    