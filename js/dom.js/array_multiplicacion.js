const d = document;
console.log("hola");

export function masDeDiez(elemento) {
  return elemento >= 15;
}

export function multiplicacionArray(arr = undefined,id){
  const $ResultadoMultipli = d.getElementById(id)

  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  
  if (arr.length === 0) return console.error("El arreglo está vacío");
  
  for (let num of arr) {
    if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
  }
  
  const newArr = arr.map(el => el * 2);

  const filtrados = newArr.filter(masDeDiez);

  return $ResultadoMultipli.innerHTML = `
  <pre>
  Arreglo original: [${arr}],
  \n Arreglo multiplicado por 2: ${JSON.stringify(newArr)},
  \n Elementos mayores o iguales a 15: ${JSON.stringify(filtrados)};
  </pre>
  `;
};


