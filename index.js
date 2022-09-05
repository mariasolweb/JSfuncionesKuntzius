let valorUno = parseFloat(prompt("Ingresar el monto total de su compra ej: 5000"))
let valorDos = parseFloat(prompt("Ingresar numero de cuotas seleccionada (3 o 6 cuotas)"))

let resultadoDiv = divisorCuotas(valorUno, valorDos)

mostarResultado(resultadoDiv)

function divisorCuotas(one, two) {
    const DIV = one / two
    return DIV
}

function mostarResultado(resultado) {
    alert("Cada cuota es de $" + resultado)
}