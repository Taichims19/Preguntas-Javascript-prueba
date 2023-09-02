import{ masDeDiez, multiplicacionArray} from "./dom.js/array_multiplicacion.js";
import { addNewClass, handleClick, insertarTextoDinamico, modificarUlList, textoEnCadena } from "./dom.js/modificando_elementos.js";
import { calcularPromedioYMostrarResultado } from "./dom.js/promedio_arrays.js";


const d = document,
 numbersElement = d.querySelector(".numbers1"),
 numbersText = numbersElement.textContent.trim(), // Eliminar espacios en blanco
 numbersArray = JSON.parse(numbersText.replace(/'/g, '"')); // Convertir el texto a un arreglo

const respuestaScope = `El alcance, también conocido como "scope" en inglés, en JavaScript se refiere a la visibilidad y accesibilidad de las variables en diferentes partes del código.
En otras palabras, el alcance determina en qué partes del código una variable es válida y puede ser utilizada. JavaScript tiene varios niveles de alcance: el alcance global, 
el alcance de función y el alcance de bloque.

Diferencias entre var, let y const en cuanto a su alcance y comportamiento:

var:
Variables declaradas con var tienen alcance de función o global, lo que significa que están disponibles en todo el ámbito de la función donde se declararon o a nivel global si están fuera
de cualquier función.
Las variables var se izan ("hoisted"), lo que significa que se mueven al principio de su ámbito y pueden ser utilizadas incluso antes de su declaración.
Las variables var pueden ser redeclaradas en el mismo ámbito sin generar un error.

let:
Variables declaradas con let tienen alcance de bloque, lo que significa que están limitadas al bloque de código en el que fueron declaradas (como un if, for, while, etc.).
Las variables let no son izadas en el mismo sentido que las variables var, lo que significa que no pueden ser utilizadas antes de su declaración en el código.
Las variables let no pueden ser redeclaradas en el mismo ámbito.

const:
Al igual que let, las variables declaradas con const también tienen alcance de bloque.
Las variables const deben asignarse un valor al momento de la declaración y no pueden ser reasignadas después. Sin embargo, en el caso de objetos y arreglos, el valor del objeto o arreglo en sí no es inmutable,
 solo la asignación de la variable. Al igual que let, las variables const no son izadas y deben ser declaradas antes de su uso.`; 

const respuestaClosure = `
  Un closure en JavaScript es una función que mantiene una referencia
  al ámbito en el que fue creada, incluso después de que esa función
  haya terminado de ejecutarse. Esto permite que la función interna
  conserve acceso a las variables y parámetros de la función externa,
  incluso después de que la función externa haya finalizado.
`;
const ejemploClosure = `
  function contador() {
    let count = 0;

    function incrementar() {
      count++;
      console.log(count);
    }

    return incrementar;
  }

  const contador1 = contador();
  contador1(); // Output: 1
  contador1(); // Output: 2
`;

const eventosConcepto = `Los eventos en JavaScript son acciones o sucesos que ocurren en el navegador, como hacer clic en un elemento, mover el mouse sobreél, presionar una tecla, cargar una página, etc. Los eventos permiten que el código JavaScript responda a las interacciones del usuario o a cambios en elestado de la página. Son fundamentales para crear aplicaciones web interactivas y dinámicas. Por ejemplo, cuando un usuario hace clic en un botón, se puedeactivar un evento que cambie el contenido de un elemento en el DOM o muestre una ventana emergente.`;

const promesaContexto = `Una promesa en JavaScript es un objeto que representa un valor futuro que puede estar disponible o no en algún momento.
 Las promesas se utilizan para manejar operaciones asincrónicas de manera más ordenada y estructurada. Permiten realizar tareas como solicitudes de red,
 lectura/escritura de archivos y otras operaciones que pueden llevar tiempo sin bloquear la ejecución del código.
Una promesa tiene tres estados posibles:

Pendiente (Pending): El estado inicial de una promesa, cuando se crea pero aún no ha sido resuelta o rechazada.
Cumplida (Fulfilled): La promesa se ha resuelto exitosamente y ha devuelto un valor.
Rechazada (Rejected): La promesa ha sido rechazada y ha producido un error.`;

const promesaMetodos = `Las promesas se manejan utilizando los métodos then() y catch(). 
El método then() se utiliza para manejar el resultado exitoso de la promesa, 
mientras que el método catch() se utiliza para manejar los errores.`;

const codigoPromesa = `
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

delay(2000).then(() => {
  console.log("Hola después de 2 segundos");
});

delay(5000);
`;
const moduleContext = `El patrón de diseño "Módulo" (Module Pattern) es una técnica comúnmente utilizada en JavaScript para encapsular y organizar el código en módulos independientes con el objetivo de evitar conflictos de nombres y crear una estructura más mantenible y escalable en una aplicación web. Este patrón se basa en el concepto de closures para lograr encapsulación de datos y funciones privadas.

El módulo tiene dos partes esenciales:

Módulo Anónimo: Este es el módulo principal que contiene el código que deseas mantener en privado o proteger de interferencias externas. Incluye funciones y variables que solo deberían ser accesibles dentro del módulo.

Retorno del Módulo: Aquí defines qué partes del módulo deben ser accesibles desde fuera del módulo. Generalmente, expones solo las partes que deseas que otros módulos o partes de tu aplicación utilicen.`;

const implemetacionModuleContext = `Creamos un módulo anónimo utilizando una función inmediatamente invocada (IIFE) que se ejecuta de inmediato. Esto permite definir variables y funciones privadas dentro del alcance de la función, lo que evita que sean accesibles desde fuera del módulo.

Dentro del módulo, definimos variables y funciones privadas, como variablePrivada y funcionPrivada, que no son accesibles desde fuera del módulo.

Luego, exponemos variables y funciones públicas que deseamos que sean accesibles desde fuera del módulo. Estas son retornadas como un objeto literal.

Finalmente, almacenamos el resultado de la ejecución del módulo en la variable miModulo, que actúa como una especie de interfaz para interactuar con el módulo.

El patrón de diseño "Módulo" nos permite encapsular datos y lógica en un único objeto, lo que facilita la organización y evita colisiones de nombres en aplicaciones JavaScript más grandes. También proporciona un nivel de encapsulación y privacidad de datos que puede ser beneficioso para mantener un código limpio y seguro.`;

const observerContext = `El patrón de diseño "Observer" es un patrón de comportamiento que se utiliza en la programación para definir una dependencia uno a muchos entre objetos, de modo que cuando un objeto cambia su estado, todos los objetos que dependen de él son notificados y actualizados automáticamente. En otras palabras, permite que múltiples objetos (llamados observadores o "listeners") estén pendientes de los cambios en un objeto (llamado sujeto o "observable") y respondan a esos cambios.

En el patrón Observer, hay dos tipos de objetos:

Sujeto (Observable): Este es el objeto que es observado y que mantiene una lista de sus observadores. Cuando su estado cambia, notifica a todos los observadores registrados sobre el cambio.

Observador (Listener): Estos son los objetos que están pendientes de los cambios en el sujeto. Se registran en el sujeto para recibir notificaciones cuando el estado del sujeto cambia y, en consecuencia, toman alguna acción.`;

const escenariosObserver = `Escenarios en los que el patrón Observer puede ser útil:

Event Handling: El Observer es ampliamente utilizado en la programación de eventos. Por ejemplo, en una interfaz de usuario, diferentes elementos de la interfaz pueden actuar como observadores de eventos, como clics de botones o cambios en campos de entrada.

Gestión de suscripciones y notificaciones: El patrón Observer es útil cuando se desea implementar un sistema de gestión de suscripciones y notificaciones. Los observadores se suscriben a eventos o cambios de un editor o emisor, y el editor notifica a todos los observadores cuando se produce un evento.

Actualizaciones en tiempo real: En aplicaciones en tiempo real, como chats o sistemas de notificación, el Observer es útil para notificar a los usuarios sobre eventos o mensajes nuevos.

Implementación de patrón MVC: En arquitecturas Model-View-Controller (MVC), el patrón Observer se usa comúnmente para mantener sincronizados el modelo y la vista. Cuando el modelo cambia, notifica a la vista para que actualice su representación.

Controladores de eventos personalizados: En la programación de juegos y aplicaciones interactivas, se utilizan controladores de eventos personalizados basados en el patrón Observer para manejar eventos complejos y cambios de estado.

Actualización de datos en aplicaciones de datos en tiempo real: En aplicaciones que utilizan datos en tiempo real, como tableros de análisis o aplicaciones de monitoreo, el patrón Observer se usa para mantener actualizados los datos y notificar a los usuarios cuando hay cambios.

En resumen, el patrón de diseño Observer es útil en cualquier situación en la que necesites notificar a múltiples objetos acerca de cambios en el estado de otro objeto, sin que los observadores estén acoplados directamente al objeto observado. Esto promueve la flexibilidad y la extensibilidad del código, ya que permite agregar o quitar observadores sin modificar el objeto observado.`;

d.addEventListener("DOMContentLoaded", (e)=>{
  multiplicacionArray(numbersArray, "Resultado-multipli");
  masDeDiez("Resultado-multipli");
  modificarUlList("#myList");
  textoEnCadena("texto-cambiado","programación");
  insertarTextoDinamico("respuesta1","Una función síncrona y una función asíncrona en JavaScript se diferencian en cómo manejan el flujo de ejecución y la espera de tareas. Las funciones síncronas ejecutan su código en orden y bloquean el hilo de ejecución hasta que terminan, mientras que las funciones asíncronas permiten que el hilo de ejecución continúe trabajando en otras tareas mientras esperan que tareas externas se completen.");
  insertarTextoDinamico("respuesta2","El hoisting es un comportamiento en JavaScript en el que las declaraciones de variables y funciones se mueven automáticamente al inicio de su ámbito antes de que se ejecute el código.");
  calcularPromedioYMostrarResultado("array-objetos1","promedio-calificiones");
  insertarTextoDinamico("respuestaScope1",`<pre>${respuestaScope}</pre>`);
  insertarTextoDinamico("respuestaClosure1",respuestaClosure);
  insertarTextoDinamico("ejemploClosure1",`<pre>${ejemploClosure}</pre>`);
  insertarTextoDinamico("respuestaEvento7",eventosConcepto);
  handleClick("myButton");
  insertarTextoDinamico("promesasContexto",`<pre>${promesaContexto}</pre>`);
  insertarTextoDinamico("promesasMetodos",`<pre>${promesaMetodos}</pre>`);
  insertarTextoDinamico("promesasCodigo",`<pre>${codigoPromesa}</pre>`);
  insertarTextoDinamico("content9-2id","Nuevo Contenido");
  addNewClass(".content9-1","highlight");
  insertarTextoDinamico("moduleRespuesta",moduleContext);
  insertarTextoDinamico("implementacionModule",`<pre>${implemetacionModuleContext}</pre>`);
  insertarTextoDinamico("observerRespuesta",`<pre>${observerContext}</pre>`);
  insertarTextoDinamico("escenariosObserver",`<pre>${escenariosObserver}</pre>`);
 
});