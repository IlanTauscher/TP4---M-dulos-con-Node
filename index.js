let concatenar = require("./Modulos/ej1"); 

concatenar("Pepe", "Hola")

let aritmetica = require("./Modulos/ej2");

aritmetica.sumar(1, 2)
aritmetica.restar(2, 2)
aritmetica.multiplicar(2, 2)
aritmetica.pi()

let alumni = require("./Modulos/ej3");

alumni("Miguel", 1234);

let copiar = require("./Modulos/ej4")

copiar("./texto.txt", "parrafo.txt")

let objeto = require("./Modulos/ej5")

objeto("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo")

let objeto2 = require("./Modulos/ej6");

objeto2("pepe")

let obtenerMonedaPorPais = require("./Modulos/ej7");

obtenerMonedaPorPais("Argentina")