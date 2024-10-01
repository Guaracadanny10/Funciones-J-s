//Ejercicio 1 
//Crea una función nombrada que sume dos números.
function sumaDos(n1,n2){
    let suma = 0
    suma = n1+n2
    console.log(suma)
}
sumaDos(10,6)

//Ejercicio 2 
//Escribe una función nombrada que reste dos números.
function resteDos(n1,n2){
    let resta = 0 
    resta = n1 -n2
    console.log(resta)
}
resteDos(20,10)

//Ejercicio 3
//Desarrolla una función nombrada que multiplique dos números.

function multiDos(n1,n2){
    let producto = 0
    producto = n1 * n2
    console.log(producto)
}
multiDos(20,4)

//Ejercicio 4 
//Implementa una función nombrada que divida dos números.
function diviDos(n1,n2){
    let divida = 0
    divida = n1 / n2
    console.log(divida)
}
diviDos(10,2)

//Ejercicio 5 
//. Diseña una función nombrada que calcule el módulo de dos números.
function moduDos(n1,n2){
    let modulo = 0
    modulo = n1 % n2
    console.log(modulo)
}
moduDos(30,5)

//Ejercicio 6
//Asigna una función anónima a una variable que eleve un número al cuadrado.
const eleva = function(a) {
    return a**2;
};

console.log(eleva(3)); // Imprime 9

//Ejercicio 7
//Usa una función anónima para convertir grados Celsius a Fahrenheit.
const conversion = function(Celsius){
    return Celsius * (9/5)+32 
}
console.log(conversion(1))

//Ejercicio 8
//Crea una función anónima que calcule el perímetro de un rectángulo.
const perimetro = function(base,altura){
    return 2*(base+altura)
}
console.log(perimetro(6,4))

//Ejercicio 9 
//Implementa una función anónima que determine si un número es par o impar.
const numer = function(n1){
    if(n1 % 2 == 0){
        return("Es un número par ")
    }else{
        return("Es un número impar")
    }
}
console.log(numer(5))

//Ejercicio 10 
//Escribe una función anónima que devuelva el número mayor entre dos números.
const mayorDe = function(n1,n2){
    if(n1>n2){
        return n1
    }else{
        return n2
    }
}
console.log("Este es el numero mayor " + mayorDe(30 , 40))

//Ejercicio 11 
//Desarrolla una función flecha que calcule el área de un círculo.
const circulo = (radio) => {
    let diametro = radio / 2
    let area = 3.1415 *(diametro**2)
    return area
}
console.log(circulo(38))

//Ejercicio 12
//Crea una función flecha que convierta kilómetros a millas.
const millas = (kilometros) => {
    let convir = kilometros / 1.609
    return convir
}
console.log(millas(8))

//Ejercicio 13 
//Escribe una función flecha que retorne el nombre completo dado un nombre y apellido.
const nameComplete = (nombre,apellido) =>{
    let completo = nombre +" " + apellido
    return completo
}
console.log(nameComplete("Danny","Guaraca"))

//Ejercicio 14
//. Implementa una función flecha que verifique si un texto contiene la letra 'a'.
const contieneLetraA = (texto) => texto.includes('a')
console.log(contieneLetraA("Hola"))

//Ejercicio 15 
//. Diseña una función flecha que cuente cuántos elementos en un array son números
const siNumeros = (array) => {
    let num = 0
    let caracter = 0
    for(let i = 0 ; i<array.length;i++){
        array[i]
        if( typeof array[i] == 'string'){
            caracter = caracter + 1
            
        }else{
        num = num + 1
        }
    }
    return ("Existe solo " + num +" numeros dentro del array")
}
console.log(siNumeros(["H",1,"d",2]))

//Ejercicio 16 
//Escribe una función de orden superior que tome una función y la aplique a todos los elementos de un array
let n1 = [1,5,9,19]
function aplicale(array){
    return array
}
console.log(n1.filter(aplicale))

//Ejercicio 17
//Crea una función de orden superior que filtre elementos de un array basándose en una condición dada
let numeros = [20,10,30,7,8]
function mayor(array){
    return array>10
}
console.log(numeros.filter(mayor))

//Ejercicio 18 
//. Desarrolla una función de orden superior que retorne una nueva función incrementadora.
valor = 15
function crearIncrementador(incremento) {
    return incremento + valor
}
    console.log(crearIncrementador(10))

//Ejercicio 19 
//. Implementa una función de orden superior que tome dos funciones como argumentos y elija una para ejecutar basada en una condición.
function elegirFuncion(funcionPar, funcionImpar, numero) {
    if (numero % 2 === 0) {
        return funcionPar(numero);
    } else {
        return funcionImpar(numero);
    }
}
function funcionPar(n){
    return n +"Es par"
}
function funcionImpar(n){
    return n +" Es impar"
}
let numero = 5 
let result = elegirFuncion(funcionPar, funcionImpar,numero)
console.log(result)

// Ejercicio 20 
//. Diseña una función de orden superior que modifique un objeto utilizando otra función proporcionada.
function modificarObjeto(objeto, funcionModificacion) {
    return funcionModificacion(objeto);
}

function agregarPropiedad(objeto) {
    objeto.nuevaPropiedad = "valor nuevo";
    return objeto;
}

let miObjeto = { propiedadExistente: "valor existente" };

console.log("Antes:", miObjeto);
miObjeto = modificarObjeto(miObjeto, agregarPropiedad);
console.log("Después:", miObjeto);

//Ejercicio 21
//Define una función constructora para un objeto "Coche" que tenga propiedades como marca, modelo y año.
function coche(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
const coche1 = new coche('Toyota', 'Corolla', 2020);
console.log(coche1)

//Ejercicio 22
//Crea una función constructora para un objeto "Libro" con propiedades de autor, título y año de publicación.
function libro(autor,titulo,año){
    this.autor = autor;
    this.titulo = titulo;
    this.año = año;
}
const libro1 = new libro('Robert greene','Naturaleza',2010)
console.log(libro1)

//Ejercicio 23
// Implementa una función constructora que cree objetos "Usuario" con nombre, correo electrónico y contraseña.
function usuarios(nombre,correo,contraseña){
    this.nombre = nombre
    this.correo = correo
    this.contraseña = contraseña
}
const usuarios1 = new usuarios('Danny','guaracadanny10',2004)
console.log(usuarios1)

//Ejercicio 24
//Escribe una función constructora para "Producto" con propiedades de nombre, precio y cantidad
function producto(nombre,precio,cantidad){
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
    this.total = this.precio * this.cantidad
    return this.total
    }
const producto1 = new producto('Danny',10,2)
console.log(producto1)

//Ejercicio 25
//. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, matrícula y carrera.
function Estudiante(nombre,matricula,carrera){
    this.nombre = nombre
    this.matricula = matricula
    this.carrera = carrera
}
const Estudiante1 = new Estudiante('Danny','1 matricula','software')
console.log(Estudiante1)

//Ejercicio 26
//Escribe una función recursiva para calcular el factorial de un número.
function factorial(n){
    if(n == 0 || n == 1){
return 1
    }
     return n *factorial(n-1)
    }

console.log(factorial(5))

//Ejercicio 27
//Crea una función recursiva que sume todos los números hasta un número dado.
function sumaHasta(n) {
    // Caso base: si n es 0, la suma es 0
    if (n === 0) {
        return 0;
    }
    return n + sumaHasta(n - 1);
}

const numero1 = 5;
console.log(`La suma de todos los números hasta ${numero1} es ${sumaHasta(numero1)}`)

//Ejercicio 28 
//. Implementa una función recursiva que encuentre el máximo común divisor (MCD) de dos números.
function mcd(a, b) {

    if (b === 0) {
        return a;
    }

    return mcd(b, a % b);
}
const num1 = 48;
const num2 = 18;
const resultado = mcd(num1, num2);
console.log(`El MCD de ${num1} y ${num2} es ${resultado}.`)

//Ejercicio 29 
// Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número específico.
function Fibonacci(num){
    if(num == 1 || num == 2){
        return 1
    }else{
        return Fibonacci(num-1) + Fibonacci(num-2) 
    }
}
let n8 = 8
console.log(Fibonacci(n8))

//Ejercicio 30
//Desarrolla una función recursiva que invierta una cadena de texto.
function invertirCadena(cadena) {
    return cadena.length === 0 ? '' : cadena[cadena.length - 1] + invertirCadena(cadena.slice(0, -1));
}

const texto = "hola";
console.log(invertirCadena(texto))

//Ejercicio 31 
//Demuestra el uso de una variable global modificándola dentro de una función.
let i = 2
function variable(n){
    for(let i = 0 ;i<10; i++){
        i = i + n
    }
    return i
}
console.log(variable(10))

//Ejercicio 32 
//Escribe un código donde una variable local oculte una variable global del mismo nombre.
let suma = 0
function oculte(n1,n2){
const suma = n1 +n2
return suma
}
console.log(oculte(10,20))

//Ejercicio 33 
//Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de nombre
let pepito = 0
function saludar10(nombre){
    const pepito = nombre
    return pepito
}
console.log(saludar10("danny"))

//Ejercicio 34 
// Implementa un contador utilizando una variable global
contador = 0
function incrementadora(i){
    while (i<=20){
        i++
        contador = contador + i
        return contador
    }
}
console.log(incrementadora(10))

//Ejercicio 35 
//Crea una función que intente modificar una variable local definida en otra función.
// Definimos una variable global
let variableGlobal = 10;

function modificarVariable() {
    variableGlobal += 5;  // Modificamos la variable global
}

function mostrarVariable() {
    console.log(variableGlobal);
}

mostrarVariable();  


//Ejercicio 36 
//Escribe una función que determine si un año es bisiesto
function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return true
    } else {
        return false
    }
}

console.log(esBisiesto(2020))

//Ejercicio 37 
//Implementa una función que evalúe tres números y retorne el mayor
function numMayor(n1,n2,n3){
    if(n1>n2 && n1>n3){
        console.log(n1 +" Es mayor")
    }else if(n2>n1 && n2>n3){
        console.log(n2 + " Es mayor")
    }else{
        console.log(n3 + " Es mayor")
    }
}
numMayor(10,20,30)

//Ejercicio 38
// Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota.
function aprobar(nota){
    if(nota>70){
        console.log("Aprobado")
    }else{
        console.log("Reprobado")
    }
}
aprobar(80)

//Ejercicio 39 
//Crea una función que clasifique una edad en categorías (niño, adolescente, adulto, anciano).
function clasificaEdad(edad){
    if(edad <= 8){
        console.log("Está en la categoría de niños")
    }else if(edad >= 13 && edad <= 17){
        console.log("Está en la categoría de adolescente")
    }else if(edad>= 18 && edad <= 40){
        console.log("Está en la categoría de adultos")
    }else{
        console.log("Está en la categoría de ancianos")
    }
}
clasificaEdad(19)


//Ejercicio 40
//Desarrolla una función que verifique si un usuario tiene acceso basado en su edad.
function acceder(edad){
    if(edad >= 18){
        console.log("Tienes acceso")
    }else{
        console.log("No tienes acceso")
    }
}
acceder(19)


//Ejercicio 41
// Escribe un bucle while que cuente de 1 a 100
function contador10(i){
    while(i < 100 ){
        i++;
        console.log(i);
    }
    
}
contador10(0)

//Ejercicio 42 
//Implementa un bucle while que sume los primeros 50 números naturales.
function sumeNatural(){
    let i = 0
    let suma = 0
while(i<50){
suma=suma+i
i++
}
return suma
}
console.log(sumeNatural(suma))

//Ejercicio 43
//Crea un bucle while que repita un saludo hasta que el usuario decida parar.
function saluParar(parar){
    let i = 1
    while(i <= parar){
console.log("Hola Saludos Marciano")
        i = i + 1
    }
}
(saluParar(2))

//Ejercicio 44
// Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango.
function divisible(){
let num = 1; 
while (num <= 50) {
    if (num % 7 === 0) {
        console.log("El primer número divisible por 7 en el rango es: " + num);
        break; 
    }
    num++; 
}
}
divisible()

//Ejercicio 45
//Diseña un bucle while que verifique la entrada del usuario hasta que sea válida
function cicloInfinito(entrada){
    let i = 0
    while(true){
        if(entrada > 0){
            console.log("Tienes entrada amigo")
            break;
        }else{
            console.log("No tienes entrada hasta enviar un numero positivo")
        }
    }
}
cicloInfinito(10)

//Ejercicio 46
//. Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en puntos.
function calificaciones(puntos){
    let calificacion = 0
    switch (true) {
        case (puntos >= 90):
            calificacion = 'A';
            break;
        case (puntos >= 80):
            calificacion = 'B';
            break;
        case (puntos >= 70):
            calificacion = 'C';
            break;
        case (puntos >= 60):
            calificacion = 'D';
            break;
        case (puntos < 50):
            calificacion = 'F';
            break;
        default:
            calificacion = 'no ingreso su calificacion '; 
            break;
    }

    return calificacion;
}
console.log(calificaciones(80))

//Ejercicio 47 
//Implementa una función que use switch para responder a diferentes comandos de un chatbot
function chatbot(texto){
    switch(texto){
        case "Saludo":
            console.log("Hola saludos marciano");
            break;
        case "Ayuda":
            console.log("Estoy aquí para apoyarte comentame que te sucede")
            break;
        case "Chiste":
            console.log("Habia un perro que se llamaba chiste lo atropellaron y se termino el chiste ")
            break;
        case "Historia":
            console.log("Mirate en ti en el espejo y crea una historia :)")
        break;
        default:
            console.log("Solo soy un chatbot y  dame comandos de Saludos , Ayuda,Chiste,Historia :)")
    }
}
chatbot("Chiste")

//Ejercicio 48 
//Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta, cheque).
function Pago(metodoPago, cantidad) {
    let mensaje;

    switch (metodoPago.toLowerCase()) {
        case 'efectivo':
            mensaje = `Has pagado $${cantidad} en efectivo. Gracias`;
            break;
        case 'tarjeta':
            mensaje = `Has pagado $${cantidad} con tarjeta. Gracias`;
            break;
        case 'cheque':
            mensaje = `Has pagado $${cantidad} con cheque. Gracias`;
            break;
        default:
            mensaje = 'Método de pago no a sido reconocido. elige entre efectivo, tarjeta o cheque.';
            break;
    }

    return mensaje;
}

console.log(Pago('efectivo', 50))

//Ejercicio 49
//Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /).
function calculos(operacion,n1,n2){
let result;
    switch (operacion){
        case "+":
            result = n1+n2;
        break;
        case "-":
            result = n1 -n2;
        break;
        case "*":
            result = n1 * n2;
        break
        case "/":
            result = n1 / n2;
        break;
        default:
        result = "Usted no ingreso bien la operación ya sea + , - , * , /"
    }
    return result
}
console.log(calculos("+",10,20))

//Ejercicio 50 
//Diseña un switch para cambiar entre diferentes idiomas de un sitio web.
function idiomaWeb(idioma) {
    let mensaje;

    switch (idioma.toLowerCase()) {
        case 'espanish':
            mensaje = 'Bienvenido a nuestro sitio web';
            break;
        case 'ingles':
            mensaje = 'Welcome to our website!';
            break;
        case 'frances':
            mensaje = 'Bienvenue sur notre site Web!';
            break;
        case 'aleman':
            mensaje = 'Willkommen auf unserer Website!';
            break;
        case 'italiano':
            mensaje = 'Benvenuto sul nostro sito web!';
            break;
        default:
            mensaje = 'Idioma no reconocido. Por favor, elige entre español, inglés, francés, alemán o italiano.';
            break;
    }

    return mensaje;
}

console.log(idiomaWeb('espanish'))

//Ejercicio 51
//Implementa un bucle for que imprima todos los elementos de un array.
function imprimir(array){
    for(let i = 0; i<array.length;i++){
        array[i]
        console.log(array[i])
    }
}
imprimir(["Patricio","Hola","Mundo"])

//Ejercicio 52
//Escribe un bucle for que multiplique todos los elementos de un array.
function multiarrays(array){
    let arreVaci = []
    for(let i = 0 ; i<array.length;i++){
    array[i]
    arreVaci.push(array[i]*2)
    }
    return arreVaci
}
console.log(multiarrays([1,4,6,8]))

//Ejercicio 53 
//Crea un bucle for para encontrar el menor número en un array.
function encontrarMenorNumero(array) {
    if (array.length === 0) {
        return 'El array está vacío';
    }
    let menorNumero = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < menorNumero) {
            menorNumero = array[i]; 
        }
    }

    return menorNumero;
}

const numl = [34, 12, 5, 78, 23, -2, 0]
console.log(encontrarMenorNumero(numl))

//Ejercicio 54
//Desarrolla un bucle for para verificar si un array contiene un elemento específico.
function contieneElemento(array, elemento) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true
        }
    }
    return false
}

// Ejemplo de uso
const numk = [1, 2, 3, 4, 5, 6];
console.log(contieneElemento(numk, 3))

//Ejercicio 55
//Diseña un bucle for que copie un array en otro.
function agregarBuc(array){
    let lista = []
    for(let i = 0 ; i<array.length; i++){
        array[i]
        lista.push(array[i])
    }
    return lista
}
console.log(agregarBuc([1,2,4,6,8]))

//Ejercicio 56
// Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea mayor que 10
function mayornum(num){
do {
num=11
} while (num<=10);
console.log(num);
}
mayornum()

//Ejercicio 57
//Implementa un for-in para mostrar todas las propiedades de un objeto.
function mostrarPropiedades(objeto) {
    for (let propiedad in objeto) {
        if (objeto.hasOwnProperty(propiedad)) {
            console.log(`${propiedad}: ${objeto[propiedad]}`);
        }
    }
}

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

mostrarPropiedades(persona);


//Ejercicio 58 
//  Usa un for-of para iterar sobre un array de nombres y saludar a cada uno.
function saludarname(nombres) {
    for (const nombre of nombres) {
        console.log("Hola "+" "+ nombre);
    }
}

const listaNombres = ["Luis", "Juana", "Fernanfloo", "Gordo"];
saludarname(listaNombres);

//Ejercicio 59 
//Crea un forEach para aplicar un descuento del 10% a precios en un array.
function aplicarDescuento1s(precios) {
    const preciosConDescuento = [];
    
    precios.forEach(precio => {
        const descuento = precio * 0.10;
        const precioFinal = precio - descuento;
        preciosConDescuento.push(precioFinal);
    });
    
    return preciosConDescuento;
}

const listaPrecios10 = [100, 200, 300, 400];
const preciosConDescuento1 = aplicarDescuento1s(listaPrecios10);

console.log(preciosConDescuento1)

//Ejercicio 60
//Escribe un código que use map para convertir todas las temperaturas de un array deCelsius a Fahrenheit.
function convertirdos(temperaturasCelsius) {
    return temperaturasCelsius.map(celsius => (celsius * 9/5) + 32);
}

const temperaturasCelsius = [0, 20, 30, 100];
const temperaturasFahrenheit = convertirdos(temperaturasCelsius);

console.log(temperaturasFahrenheit)


