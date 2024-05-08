let table = document.getElementById("dinamicTable");

function Crear(){
    console.log("Funcion crear");
    table.border = "1";
    table.style.margin = "auto";
    table.style.marginTop = "30px";

    let NombresColumnas = ["Nombre", "Apellidos", "Telefono", "Eliminar"];

    let row = table.insertRow(0); //-1 para ultima posicion 
    for(let i=0; i<NombresColumnas.length; i++){
        let celdaEncabezado = document.createElement("th");
        celdaEncabezado.innerText = NombresColumnas[i];

        row.appendChild(celdaEncabezado);
    }

    document.getElementById("Nombre").disabled = false;
    document.getElementById("Apellido").disabled = false;
    document.getElementById("Telefono").disabled = false;

    document.getElementById("agregar").disabled = false;
    document.getElementById("limpiar").disabled = false;

    document.getElementById("crearTabla").disabled = true;
}

class Usuario{
    constructor(username, apellido, telefono){
        this.username = username;
        this.apeliido = apellido;
        this.telefono = telefono;
    }
}

function AgregarUsr(){
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let telefono = document.getElementById("Telefono").value;

    let usuario = new Usuario(nombre, apellido, telefono);

    console.log(usuario);
    dibujarEnTabla(usuario);    
}

function dibujarEnTabla(usuario){
    let row = table.insertRow(-1);//-1 porque siempre inserta en la ultima fila
    row.id = Math.random(); //id unico de la BD
    //debemos descomponer el objeto opara convertitlo en arreglo
    let values = Object.values(usuario);
    console.log(values);

    for(let i= 0; i<values.length; i++){
        let celda = row.insertCell(-1);

        celda.innerHTML = values[i];
    }

    let celdaEliminar = row.insertCell(-1);
    celdaEliminar.innerHTML = `<button onclick="borrar(${row.id})">Eliminar</button>`; //agrega parametros directamente a la cadea
    //todo lo que esta dentro del paretesisi es un parametro
}

function borrar(id){
    console.log(id);
    console.log("eliminando...");

    let row = document.getElementById(id);
    row.parentNode.removeChild(row); //esta desligando la fila de la tabla
    row.remove(row); //la fila se elimina a si misma
}

function Limpiar(){
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("Telefono").value = "";
}