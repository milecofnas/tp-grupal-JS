let nombre = prompt("¡Bienvenida a nuestra tienda! ¿Cómo te llamás?"); 

let producto1 = "lamparas"
let producto2 = "floreros"

const bienvenida = confirm(`Hola ${nombre}! Tenemos dos productos en promoción: 

${producto1}
${producto2}`);

let respuesta1= "si"
let respuesta2 = "no"

let pregunta1 = prompt(`¿Te gustaría comprar ${producto1}? Respondé con SI o NO`)

let cantidadProducto1 = pregunta1 == respuesta1 && prompt("¿Cuántas unidades te gustaría comprar?") || 
pregunta1 == respuesta2 && Number(0)

let pregunta2 = prompt(`¿Te gustaría comprar ${producto2}? Respondé con SI o NO`)

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

let cuotasTarjeta = detalleCompra == respuesta1 && 
prompt("Seleccione el número de cuotas a abonar. Ingrese un número del 1 al 6") || detalleCompra == respuesta2 &&
Number(1)

//pregunta: ¿como hacemos para que el usuario sólo pueda poner el número que le pedimos?

let montoCuotas = detalleCompra == respuesta2 && confirm("Usted abona el monto en un pago") || confirm(`El pago a realizar en cada cuota es de:

$${total / cuotasTarjeta}`) 

let codigoDescuento = prompt("¿Tiene usted un código de descuento?") 
/*si responde que NO me aparece que el codigo es incorrecto*/

let codigoIngresado = codigoDescuento == respuesta1 && prompt("Ingrese el código")

let codigoRespuesta = (codigoIngresado == "BestTienda123OK" /*como hago para ingresar otro valor aca */) && 
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








