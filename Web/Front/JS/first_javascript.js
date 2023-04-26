//Oswaldo Ilhuicatzi Mendizábal - A01781988
//Actividad en clase: Javascript

//Escribe una función que encuentre el primer 
//carácter de un cadena de texto que no se repite.
//Prueba tu función con: 'abacddbec'

function caracterRepetido(string) {
    //se inicializa el contador que lleva la cuenta de la aparición de cada letra (diccionario)
    let contador = {};

    //Se crea el diccionario con los caracteres del string (llave) y las veces que aparece (valor)
    for (let caracter of string){
        //Notación (c[''] || 0) + 1: 
        //si ya existe un valor asignado [''], a ese se le agrega uno, sino, se toma el 0 y se suma uno
        contador[caracter] = (contador[caracter] || 0) + 1;
        }

    //Se comienza a recorrer el diccionario
    for (let caracter of string){
        //Si el valor asignado es 1, se imprime ese caracter
        if (contador[caracter] === 1){
            return caracter;
        }
    }
    return null;
}

console.log("Ejercicio 1: prueba con el string abacddbec")
console.log("El primer caracter de la cadena que no se repite es: " + caracterRepetido("abacddbec"))