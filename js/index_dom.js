import{ masDeDiez, multiplicacionArray} from "./dom.js/array_multiplicacion.js";
import { insertarTextoDiamico, modificarUlList, textoEnCadena } from "./dom.js/modificando_elementos.js";
import { calcularPromedioYMostrarResultado } from "./dom.js/promedio_arrays.js";


const d = document,
 numbersElement = d.querySelector(".numbers1"),
 numbersText = numbersElement.textContent.trim(), // Eliminar espacios en blanco
 numbersArray = JSON.parse(numbersText.replace(/'/g, '"')); // Convertir el texto a un arreglo

d.addEventListener("DOMContentLoaded", (e)=>{
  multiplicacionArray(numbersArray, "Resultado-multipli");
  masDeDiez("Resultado-multipli");
  modificarUlList("#myList");
  textoEnCadena("texto-cambiado","programación");
  insertarTextoDiamico("respuesta1","Una función síncrona y una función asíncrona en JavaScript se diferencian en cómo manejan el flujo de ejecución y la espera de tareas. Las funciones síncronas ejecutan su código en orden y bloquean el hilo de ejecución hasta que terminan, mientras que las funciones asíncronas permiten que el hilo de ejecución continúe trabajando en otras tareas mientras esperan que tareas externas se completen.");
  insertarTextoDiamico("respuesta2","El hoisting es un comportamiento en JavaScript en el que las declaraciones de variables y funciones se mueven automáticamente al inicio de su ámbito antes de que se ejecute el código.");
  calcularPromedioYMostrarResultado("array-objetos1","promedio-calificiones");
});