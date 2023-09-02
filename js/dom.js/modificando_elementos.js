const d = document;

export function modificarUlList(id){
  const $ulList = d.getElementById("myList")

  const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  elementos.forEach(item =>{
    const li = d.createElement('li');
    li.textContent = item;
    $ulList.appendChild(li);

    li.innerText = ` El Elemento Modificado se a procesado correctamente`
  })

}

export function textoEnCadena(id, texto) {
  const $contadorText = d.getElementById("contador-texto");

  if (!id) return console.warn("No ingresaste el id del elemento de texto");
  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  const $textoElement = d.getElementById(id);
  const cadena = $textoElement.textContent;

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }

  const cadenaReemplazada = cadena.replace(/reglas/g, "instrucciones"); // Reemplaza "reglas" por "instrucciones"
  
  $contadorText.innerHTML = `La palabra ${texto} se repite ${contador} veces.<br>Texto modificado: ${cadenaReemplazada}`;
}

export function insertarTextoDinamico(id, nuevoTexto) {
  const elemento = d.getElementById(id);
  
  if (elemento) {
    elemento.innerHTML = nuevoTexto;
  } else {
    console.error(`Elemento con ID "${id}" no encontrado.`);
  }

}
export function handleClick(id) {
  const $myButton = d.getElementById(id);

  $myButton.addEventListener("click", () => {
    const userInput = prompt("Por favor, ingresa tu respuesta:");

    if (userInput !== null) {
      console.log("En un momento procesaremos su pregunta y en breve emitiremos una respuesta:", userInput);
      // Aquí puedes realizar cualquier acción con la respuesta ingresada por el usuario
    }
  });
}

export function addNewClass(classSelector, newclass){
  const $classDom = document.querySelectorAll(classSelector);

  $classDom.forEach(element => {
    element.classList.add(newclass); // Cambiado de newClass a newclass
  });
}

