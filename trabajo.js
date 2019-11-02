let nombre = prompt("¡Bienvenida a nuestra tienda! ¿Cómo te llamás?"); 

let producto1 = "lamparas"
let producto2 = "floreros"

const bienvenida = confirm(`Hola ${nombre}! Tenemos dos productos en promoción: 

${producto1}
${producto2}`);


// Recordemos siempre dejar un espacio antes y despues de un operador, aunque sea el =
// let respuesta1 = "si"

//Por otro lado, ¿son nombres descriptivos "respuesta1" y "respuesta2" para valores como "si" o "no"?
let respuesta1= "si"
let respuesta2 = "no"

let pregunta1 = prompt(`¿Te gustaría comprar ${producto1}? Respondé con SI o NO`)


// Que pasa si el usuario responde algo que no es "no"? Por ejemplo, hace enter o escribe "asdfg"? 
// No se le asigna el 0 a cantidadProducto1 y el codigo se rompe. Quiza seria mejor hacer que, cualquier cosa
// que escriba el usuario que no sea "si", ya asigne 0 a la cantidad
// Por otro lado, no es necesario hacer Number(0) - 0 ya es un número, no hace falta convertirlo a número nuevamente 

// Con todas esas observaciones, esta variable quedaría así
// let cantidadProducto1 = pregunta1 == respuesta1 && prompt("¿Cuántos pasajes te gustaría comprar?") || 0
let cantidadProducto1 = pregunta1 == respuesta1 && prompt("¿Cuántas unidades te gustaría comprar?") || 
pregunta1 == respuesta2 && Number(0)

let pregunta2 = prompt(`¿Te gustaría comprar ${producto2}? Respondé con SI o NO`)

// mismas observaciones que en cantidadProducto1 
let cantidadProducto2 = pregunta2 == respuesta1 && prompt("¿Cuántas unidades te gustaría comprar?") ||
pregunta2 == respuesta2 && Number(0)

let precioProducto1 = 30
let precioProducto2 = 40
let total = cantidadProducto1 * precioProducto1 + cantidadProducto2 * precioProducto2

let detalleCompra = prompt(`El detalle de tu compra es: 

${producto1}: ${cantidadProducto1} x $${precioProducto1}
${producto2}: ${cantidadProducto2} x $${precioProducto2}

TOTAL DE TU COMPRA: $${total}

¿Desea abonar con tarjeta de crédito?`)

// Misma observacion que antes: hagamos que aunque el usuario no escriba no, igual se ponga 1 sola cuota. 
// Recordar que no es necesario el Number(1) 
let cuotasTarjeta = detalleCompra == respuesta1 && 
prompt("Seleccione el número de cuotas a abonar. Ingrese un número del 1 al 6") || detalleCompra == respuesta2 &&
Number(1)

//pregunta: ¿como hacemos para que el usuario sólo pueda poner el número que le pedimos?

// Respuesta: Quiza podriamos hacer una validación más del tipo:
// (cuotasTarjeta != 1) && (cuotasTarjeta != 2) &&  (cuotasTarjeta != 3) && alert("Ingresó un número de cuotas incorrecto")
// y después repetir el prompt. Pero no me parece necesario en este caso porque tu calculo (total / cuotasTarjeta) funciona
// con cualquier cuota que ponga el usuario. 

let montoCuotas = detalleCompra == respuesta2 && confirm("Usted abona el monto en un pago") || confirm(`El pago a realizar en cada cuota es de:

$${total / cuotasTarjeta}`) 

let codigoDescuento = prompt("¿Tiene usted un código de descuento?") 
/*si responde que NO me aparece que el codigo es incorrecto*/

//porque mas abajo decimos codigoIngresado != "BestTienda123OK" && confirm("Lo sentimos, el código ingresado es INCORRECTO")
// y "no" es distinto a "BestTienda123OK"
// podriamos decir 
// (codigoIngresado != "no" && codigoIngresado != "BestTienda123OK") && confirm("Lo sentimos, el código ingresado es INCORRECTO")
// Despues tendriamos que hacer otro alerta, sin el descuento, solo en caso de que el codigo ingresado sea incorrecto. 

let codigoIngresado = codigoDescuento == respuesta1 && prompt("Ingrese el código")

let codigoRespuesta = (codigoIngresado == "BestTienda123OK" /*como hago para ingresar otro valor aca RESPUESTA: no 
entiendo la pregunta, te referis a cambiar el valor del codigo? Habria que ponerlo en una variable. */) && 
confirm("El código ingresado es CORRECTO. Usted tiene un 25% de descuento en el total de su compra") || 
codigoIngresado != "BestTienda123OK" && confirm("Lo sentimos, el código ingresado es INCORRECTO")

let detalleConDescuento = (codigoIngresado == "BestTienda123OK") && confirm(`El detalle de tu compra es: 

${producto1}: ${cantidadProducto1} x $${precioProducto1}
${producto2}: ${cantidadProducto2} x $${precioProducto2}

TOTAL DE TU COMPRA: $${total - (total * 0.25)}

CUOTAS A ABONAR POR MES: $${(total - (total * 0.25)) / cuotasTarjeta}`)

let detalleSinDescuento = (codigoIngresado != "BestTienda123OK") && confirm(`El detalle de tu compra es: 

${producto1}: ${cantidadProducto1} x $${precioProducto1}
${producto2}: ${cantidadProducto2} x $${precioProducto2}

TOTAL DE TU COMPRA: $${total}

CUOTAS A ABONAR POR MES: $${total / cuotasTarjeta}`)

let saludoFinal = confirm(`¡Gracias por su visita!
${"Les esperamos pronto nuevamente"}`)








