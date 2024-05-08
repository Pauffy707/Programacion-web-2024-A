//'use strict'

var numero = 5;

console.log(numero);
console.log("Hola mundo en javascript");

document.write("<h1> HOLA MUNDO EN JAVASCRIPT</h1>");
console.error("Mi error");
console.warn("Mi warning");

/*Tipos de Datos */

/* STRING (CADENAS DE TEXTO)*/
 var hello = "Hello word";
 hello = hello + " desde JS";
console.log(hello);

//Number

var numero1 = 100;
var numero2 = 10;

//suma
console.log("La suma es: " +(numero1 + numero2));
console.log("La multiplicacion es: " +(numero1 * numero2));
console.log("La division es: " +(numero1 / numero2));
console.log("El modulo es: " +(numero1 % numero2));

//BOOLEANOS
var booleano = true;

if( 10 > 6 && booleano == true){
    console.log(true);
}else{
    console.error(false);
}

var tipoTarjeta = 'Credit Card';

switch(tipoTarjeta){
    case 'Debit card':
    console.log("Tarjeta de debito");
    break;

    case 'Credit Card':
        console.log("Tarjeta de credito");
        break;

    default:
        console.log("No existe opc");
}

//ARRAYS

var nombres = ["jose", "alex traidor", "maria"];
console.log(nombres);
console.table(nombres);
nombres[0] = "Cesar";
console.log(nombres);

var nombres2 = ["Fabian", "Emiliano", "Pablo"];

nombres = nombres.concat(nombres2);
console.log(nombres);

nombres.splice(3);//corta a partir de una pocision
console.log(nombres);

//Para ingresar un nuevo elemento
//en JavaScript los arreglos son dinamicos
nombres.push("Pauffy");
console.log(nombres);

nombres.splice(2, 1); //el segundo parametro es para definif cuantos elementos seran descartados
console.log(nombres);



//OPERADOR SPREAD
//tOMA UN ARREGLO Y DESPARRAMA (O SEPARA) SUS ELEMENTOS
const arrayNums = [1,2,3];
const arrayNums2 = [4,5,6];
console.log("------SPREAD--------");

console.log(arrayNums);
console.log(...arrayNums);

const arrayNumSpread = [...arrayNums,...arrayNums2];
console.log(arrayNumSpread); //crea un nuevo arreglo con todos los elementos del arreglo


//CICLOS
//HAY MUCHOS TIPOS DE CICLOS

console.log("---------FOR--------------");

for(let i=0; i<nombres.length; i++){
    console.log("Elemento: "+i+" "+nombres[i]);
}
console.log("---------FOREACH--------------");
//DESVENTAJA: No es buena idea usarlo en forma asincrona
nombres.forEach(elemento => {

    console.log(elemento);
});//funcion flecha

console.log("-----------FOR OR---------------");
//es seguro de usar con asincrono
//ventaja: puedes usar diferentes indices
//se salta las posiciones vacias
for(let nombre of nombres){
    console.log(nombres);
} 

console.log("-----------WHILE---------------");
var contador = 0;
while(contador <nombres.length){
    console.log(nombres[contador]);
    contador++;

}




//SUBTEMA: FUNCIONES O FUNCIONES FLECHA
let val = 10, val2 = 10;
function sumaValores(valor1, valor2){
    return valor1+valor2;
}

let sum1 = sumaValores(val, val2);
console.log("La suma es: "+sum1);

let sum2 = (valor1,valor2) => {
    return valor1+valor2;
}; //sum2 es un apuntador
console.log("La suma con funcion flecha es: "+sum2(val,val2));

let sum3 = (valor1,valor2) => valor1+valor2;
console.log("Funcion arrow simplificada: "+sum3(val,val2));


//****************OPERADOR REST
function testRest(nombre, apellido, ...otros){
    console.log(nombre);
console.log(apellido);
return otros;
}

console.log(testRest("Pauffy", "Ramirez", 20, "Holaa", "hey"));

//Metodos avanzados

let array1 = [5,12,8,130,44];

//FIND, INCLUDES, FININDEX, SOME

//FIND ENCONTRAR EL ELEMENTO

let found = array1.find(element => element > 10);//12
let found2 = array1.includes(777);
let found3 = array1.findIndex(element => element == 44);//regresa un 2
let found4 = array1.some(element => element % 2 == 0); 
let found5 = array1.some(element => element >= 1000); 

console.log("primer encontrado con FIND: "+found);
console.log("existe elemento? "+found2);
console.log("Indice del elemento: "+found3);
console.log("Existe un elemento que sea par? "+found4);
console.log("Existe un elemento mayor a 1000? "+found5);

// MAP
//Metodo importante que te preguntan en las entrevistas
//metodo para convertir los elementos en lo que deseamos
let map1 = array1.map(element => element * 2);
console.log("elementos multiplicados: "+map1);

//metodo filter
let words = ["spray", "limit", "game", "exuberant", "destruction", "present"];

let result1 = words.filter(word => word.length > 6);

console.log(result1);

//Objetos ---- clave (llave) : valor

var objetoUsr = {
    "username" : "Pauffy",
    "score" : 70,
    "hours" : 108239820
}

console.log(objetoUsr);

objetoUsr.profesional = true;

console.log(objetoUsr);
console.log(objetoUsr.username);
objetoUsr.score = 1000;
console.log(objetoUsr.score);


//opcion menos comun
var objetoUsr2 = new Object();

console.log(objetoUsr2);
objetoUsr2.username = "PauPau";
objetoUsr2.score = 707;
objetoUsr2.hours = 707;
objetoUsr2.profesional = false;
console.log(objetoUsr2);

//VAMOS A CREAR CLASES 

class Usuario{
    constructor(username, score, hours, profesional){
        this.username = username;
        this.score = score;
        this.hours = hours;
        this.profesional = profesional;

    }

    getName(){
        return this.username;
    }

    setName(nombre){
        this.username = nombre;
    }


}

let objetoUsr3 = new Usuario("Pauffy606", 7, 23, false); //tiene una ventaja en nivel de codigo

console.log(objetoUsr3);
console.log(objetoUsr3.getName());
//si queremos cambiar de nombre

objetoUsr3.setName("Pawu");
console.log(objetoUsr3.getName());

let inventarioFrutas = [
    {name: "Strawberry", quantity: 707}, 
    {name: "Apple", quantity: 9},
    {name: "Cherry", quantity: 200}
]

console.log(inventarioFrutas[0]);

function isCherry(fruit){
    return fruit.name == "Cherry";
}

console.log(inventarioFrutas.find(isCherry)); //mandamos como parametro una funcion completa

let resultadoFruta = inventarioFrutas.find(frutilla => frutilla.name == "Cherry");
console.log(resultadoFruta);

let resultadoFruta1 = inventarioFrutas.find(({name}) => name == "Cherry");
console.log(resultadoFruta1);

//alcance de variables en java scrpt
var a=5, b=10;

if(a == 5){
    let a = 4; //el alcace es dentro del bloque if
    var b = 1;//el alcance es global

    console.log(a);//4
    console.log(b);//1
    console.log(parent.a);//5
}

console.log(a);//1
console.log(b);//10

//vamos a crear constantes

const PI = 3.1416;
console.log(PI);

/*PI = 4;
console.log(PI);
*/

//JAVA SCRIPT INTERACCION CON NAVEGADOR
//ESCRIBIR EN EL DOCUMENTO HTML
document.write(PI+"<br>");

document.write(objetoUsr3.username);

document.getElementById("username").value = objetoUsr3.username;

document.getElementById("botonDesactivar").innerText = "Desactivar";

document.getElementById("botonDesactivar").style.backgroundColor = "green";
document.getElementById("botonDesactivar").style.color = "white";

function desactivarBtn(){
    let opc = prompt("Desactivar? 1=SI y 0=N0");
    console.log("Descativar boton");
    if(opc == "1"){
        document.getElementById("botonDesactivar").disabled = true;
        document.getElementById("textoActivo").innerText = "Inactivo";
        document.getElementById("botonActivar").hidden = false;
    }


}

function activarBtn(){
    console.log("Activar boton");

    document.getElementById("botonDesactivar").disabled = false;
    document.getElementById("botonActivar").hidden = true;
    document.getElementById("textoActivo").innerText = "Activo";
}