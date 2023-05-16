//Ejercicio 1
// Agregamos un listener de eventos 'mousemove' al objeto 'document', que se activará cada vez que se mueva el ratón en el documento
document.addEventListener("mousemove", function(event) {
    // Accedemos al elemento 'div' que creamos anteriormente
    let posicionMouse = document.getElementById("posicion-mouse");

    // Actualizamos el contenido del elemento 'div' con las coordenadas actuales del ratón
    posicionMouse.textContent = "Posición del mouse: (" + event.clientX + ", " + event.clientY + ")";
});

//Ejercicio 2
// Agregamos un listener de eventos 'click' al botón 'Obtener nombre completo'
document.getElementById("btn-nombre-completo").addEventListener("click", function() {
    // Accedemos a los valores de las cajas de texto para obtener el nombre y apellido
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    // Creamos un nuevo elemento 'p' para mostrar el nombre completo
    let nombreCompleto = document.createElement("p");

    // Establecemos el contenido del elemento 'p' con el nombre completo
    nombreCompleto.textContent = "Nombre completo: " + nombre + " " + apellido;

    // Insertamos el elemento 'p' después del botón 'Obtener nombre completo'
    document.getElementById("btn-nombre-completo").insertAdjacentElement("afterend", nombreCompleto);
});

//Ejercicio 3
    window.addEventListener('load', () => {
    const table = document.getElementById('myTable');
    const addRowBtn = document.getElementById('addRowBtn');
    const addColBtn = document.getElementById('addColBtn');
    
    // Agregar una fila a la tabla
    addRowBtn.addEventListener('click', () => {
      const rowCount = table.rows.length;
      const row = table.insertRow(rowCount);

      // Actualizar las columnas
      const colCount = table.rows[0].cells.length;
      for (let i = 0; i < colCount; i++) {
        const cell = row.insertCell(i);
        cell.innerHTML = `Fila ${rowCount}, Columna ${i + 1}`;
      }
    });

    // Agregar una columna a la tabla
    addColBtn.addEventListener('click', () => {
      const colCount = table.rows[0].cells.length;
      for (let i = 0; i < table.rows.length; i++) {
        const cell = table.rows[i].insertCell(colCount);
        cell.innerHTML = `Fila ${i + 1}, Columna ${colCount + 1}`;
      }
    });
  });


//ejercicio 4
function actualizarTabla() {
    // Obtenemos la posición de la fila y la columna
    let fila = document.getElementById("fila").value;
    let columna = document.getElementById("columna").value;

    // Obtenemos el texto a insertar
    let texto = document.getElementById("texto").value;

    // Obtenemos la tabla y la celda correspondiente
    let tabla = document.getElementById("tabla");
    let celda = tabla.rows[fila-1].cells[columna-1];

    // Actualizamos el contenido de la celda
    celda.textContent = texto;
  }

//Ejercicio 5
// Seleccionar los elementos necesarios
const listaColores = document.getElementById('lista-colores');
const botonAgregar = document.getElementById('agregar-color');
const botonQuitar = document.getElementById('quitar-color');

// Función para agregar un color a la lista
const agregarColor = () => {
    // Crear un nuevo elemento li
    const nuevoColor = document.createElement('li');
    // Generar un color aleatorio
    const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Agregar el color al nuevo elemento li
    nuevoColor.style.backgroundColor = colorAleatorio;
    nuevoColor.textContent = colorAleatorio;
    // Agregar el nuevo elemento li a la lista de colores
    listaColores.appendChild(nuevoColor);
};

// Función para quitar el último color de la lista
const quitarColor = () => {
    // Obtener el último elemento li de la lista
    const ultimoColor = listaColores.lastElementChild;
    // Quitar el último elemento li de la lista
    listaColores.removeChild(ultimoColor);
};

// Agregar eventos a los botones
botonAgregar.addEventListener('click', agregarColor);
botonQuitar.addEventListener('click', quitarColor);

//Ejercicio 6
// Obtener la imagen
const imagen = document.getElementById("imagen");

// Añadir un event listener al mouseover
imagen.addEventListener("mouseover", () => {
  // Generar dos números aleatorios entre 300 y 600 para el ancho y alto
  const width = Math.floor(Math.random() * (600 - 300 + 1) + 300);
  const height = Math.floor(Math.random() * (600 - 300 + 1) + 300);

  // Crear una nueva imagen con el tamaño aleatorio generado
  const nuevaImagen = new Image(width, height);
  nuevaImagen.src = "../images/300.jpg";
  nuevaImagen.alt = "Imagen Placeholder con tamaño aleatorio";

  // Reemplazar la imagen anterior por la nueva imagen generada
  imagen.parentNode.replaceChild(nuevaImagen, imagen);
});