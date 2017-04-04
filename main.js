/**
 * Tipos de datos en JS
 * 
 * Principalmente son 3:
 * Booleans
 *   Los booleans pueden tener sólo 2 valores: true o false
 * Numbers
 *   Números que pertenecen a los números reales
 * Strings
 *   Son cadenas de caracteres - Nombre completo de alguien, incluyendo
 *   espacios
 */

// Definiendo booleans
var miVariableBoolean = true
var miVariableBoolean2 = false
console.log("Imprimiendo booleans:", miVariableBoolean, miVariableBoolean2)

// Definiendo números
var miNumero = -17
var miNumero2 = 56
var miNumero3 = 87923489734278979238
var miNumero4 = -78923479842378
var miNumeroDecimal = 0.798123
var miNumeroDecimal2 = -7.798123
console.log("Imprimiendo números:", miNumero, miNumero2, miNumero3, miNumero4)

// Definiendo Strings
var miString1 = "Mi primer string"
var miString2 = "Pueden contener números! como el 2, 3, 4, 5, 6 & % #"
var miString3 = "2"
console.log("Imprimiendo strings:", miString1, miString2, miString3)

var miNumero5 = Number(miString3)
var miString4 = String(miNumeroDecimal2)

var miNuevoNumero = Number(miString4)
console.log(typeof miNuevoNumero)

console.log("Suma:", 1 + 3)
console.log("Restar:", 1 - 3)
console.log("Multiplicar:", 9 * 3)
console.log("Dividir:", 28 / 7)

var suma = 5 + 5
var mensajeParaElUsuario = "El resultado de la suma es: " + suma
alert(mensajeParaElUsuario)

var nombre = prompt("Ingresa tu nombre")
var edad = prompt("Ingresa tu edad")

alert("Hola! " + nombre + ", tienes " + edad + " años!")

/**
 * Crear un programa!, que consulte el nombre, el apellido, la edad
 * y también le pregunte al usuario cuantos años más quiere tener.
 */