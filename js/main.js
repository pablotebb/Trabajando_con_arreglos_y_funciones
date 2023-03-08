// Definición de la función obtenerInformacion
const obtenerInformacion = (materia) => {
  // Objeto con información de las materias y los alumnos
  materias = {
    fisica: ["Pérez", "pedro", "pepito", "cofla", "maria"],
    programacion: ["Dalto", "pedro", "juan", "pepito"],
    logica: ["Hernández", "pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
  };

  // Si la materia existe en el objeto materias, se retorna un arreglo con la información correspondiente
  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  } else {
    // Si la materia no existe, se retorna simplemente el objeto materias
    return materias;
  }
};

// Definición de la función mostrarInformacion
const mostrarInformacion = (materia) => {
  // Se llama a la función obtenerInformacion con el parámetro materia
  let informacion = obtenerInformacion(materia);

  // Si la información obtenida no es falsa (es decir, si la materia existe)
  if (informacion !== false) {
    // Se extrae el nombre del profesor (primer elemento del arreglo de la materia)
    let profesor = informacion[0][0];
    // Se extrae la lista de alumnos (todos los elementos excepto el primer elemento del arreglo de la materia)
    let alumnos = informacion[0];
    alumnos.shift();
    // Se escribe en el documento HTML una cadena formateada con la información obtenida
    document.write(
      `El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br> Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`
    );
  }
};

// Definición de la función cantidadDeClases
const cantidadDeClases = (alumno) => {
  // Se llama a la función obtenerInformacion sin parámetros
  let informacion = obtenerInformacion();
  // Se inicializan variables para llevar cuenta de las clases presentes y la cantidad total de clases
  let clasesPresentes = [];
  let cantidadTotal = 0;
  // Se recorre el objeto materias
  for (info in informacion) {
    // Si el alumno se encuentra en la lista de alumnos de la materia actual
    if (informacion[info].includes(alumno)) {
      // Se incrementa la cantidad total de clases
      cantidadTotal++;
      // Se agrega el nombre de la materia a la lista de clases presentes
      clasesPresentes.push(" " + info);
    }
  }
  // Se retorna una cadena formateada con la información obtenida
  return `<b style="color:blue">${alumno}</b> está en <b>${cantidadTotal} clases</b>: <b style="color:green">${clasesPresentes}</b><br>
  `;
};

// Se llaman a las funciones mostrarInformacion y cantidadDeClases con diferentes parámetros
mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("pedro"));
