var e = 10
var e = 73
console.log('Var declarado dos veces ' + e)
let b =28
console.log('declarado con let ' + b)
b= 32
console.log('let actualizado ' + b)
const c = 9
console.log('const asignado ' + c)
const d = [10,3,4]
console.log('const array ' + d)
d.push(20)
console.log('const array push ' + d)

// Funciones tradicionales

function sum (num1, num2){
    return num1+num2
}
const resultado= sum(4,2)
console.log(resultado)

// funciones con flechas 

const suma = (a,b) => (a+b)
const resultado2 = suma(2,7)
console.log(resultado2)
const resta = (a,b) => {
    return a-b
}
const resultado3 = resta(3,2)
console.log(resultado3)

// Template string

const resta2 = (a,b) => {
    return `la resta es ${a-b}`  // tienen que ser comillas invertidas


}
const resultado4 = resta2(3,2)
console.log(resultado4)

// Objetos 

const mascota = {
    nombre: 'firulais',
    edad : 22,
    color: 'cafe'
}
const persona = {
    nombre: 'jose',
    edad: 37,
    sexo: 'masculino'
}
console.log(mascota)
console.log(persona.nombre)
persona.nombre= 'Jose'
console.log(persona.nombre)

// fuera del objeto si se determinan con el igual

persona.apellido = 'Perez'  // agregamos unapropiedad al objeto
console.log(persona)

persona.biometrico = [4,6,5]
console.log(persona)  // array no se imprimen valores
console.log(persona.biometrico)  // impirmir array
console.log(persona.biometrico[1])  // con index
const nombreMascota = mascota.nombre
console.log(
nombreMascota
)

// destrucctuting objects

const {edad, nombre} = mascota
console.log(edad + nombre)