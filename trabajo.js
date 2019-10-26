let nombre = prompt("¡Bienvenida a nuestra tienda! ¿Cómo te llamás?"); 
const bienvenida = confirm(`Hola ${nombre}! Tenemos dos productos en promoción: lamparas y floreros`);

let producto1 = "lamparas"
let producto2 = "floreros"

let respuesta1= "si"

let pregunta1 = prompt(`¿Te gustaría comprar ${producto1}? Respondé con SI o NO`)

let cantidadProducto1 = pregunta1 == respuesta1 && prompt("¿Cuántas unidades te gustaría comprar?")

let pregunta2 = prompt(`¿Te gustaría comprar ${producto2}? Respondé con SI o NO`)

let cantidadProducto2 = pregunta2 == respuesta1 && prompt("¿Cuántas unidades te gustaría comprar?")

alert(cantidadProducto1 + cantidadProducto2)


// mostrar la cantidad de lamparas y floreros que compro el usuario 
// crear variable precio 
// crear variable TOTAL 
// preguntar si desea abonar con tarjeta de credito 

