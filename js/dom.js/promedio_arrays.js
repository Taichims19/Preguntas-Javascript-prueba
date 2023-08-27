export function calcularPromedioYMostrarResultado(id, resultadoId) {
  const arrElement = document.getElementById(id);

  if (!arrElement) {
    console.error(`No se encontró un elemento con el ID '${id}'`);
    return;
  }

  const arrText = arrElement.textContent;
  let arr;
  try {
    arr = JSON.parse(arrText);
  } catch (error) {
    console.error(`Error al analizar el JSON en el elemento con el ID '${id}': ${error.message}`);
    return;
  }

  if (!Array.isArray(arr)) {
    console.error("El valor obtenido no es un arreglo");
    return;
  }

  if (arr.length === 0) {
    console.error("El arreglo está vacío");
    return;
  }

  const calificaciones = arr.map(student => student.grade); // Obtener todas las calificaciones
  const valoresNumericos = calificaciones.filter(item => typeof item === "number");

  if (valoresNumericos.length === 0) {
    console.error("No se encontraron valores numéricos en las calificaciones");
    return;
  }

  const total = valoresNumericos.reduce((acc, num) => acc + num, 0);
  const promedio = total / valoresNumericos.length;

  const estudiantesOrdenados = arr.slice().sort((a, b) => b.grade - a.grade);

  const resultadoElement = document.getElementById(resultadoId);

  if (resultadoElement) {
    resultadoElement.innerHTML = `El promedio de las calificaciones evaluadas y analizadas es: ${promedio.toFixed(2)}, 
    en base a estos resultados la nueva lista de promedios es: ${estudiantesOrdenados
      .map(student => `\n${student.name}: ${student.grade}\n`)
      .join("")}`;
  } else {
    console.error(`No se encontró un elemento con el ID '${resultadoId}'`);
  }
}
