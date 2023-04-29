//Oswaldo Ilhuicatzi Mendizábal - A01781988
//Actividad en clase: Javascript

//1. Escribe una función que encuentre el primer 
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

//2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

function bubbleSort(lista){
	
    for(let i = 0; i <= lista.length-1; i++){
        for(let j = 0; j < ( lista.length-i-1); j++){

            //Compara si el primer número es mayor que el segundo
            if(lista[j] > lista[j+1]){

            //Si la condición se cumple, entonces se invierten los valores
            let temp = lista[j];
            lista[j] = lista[j + 1];
            lista[j+1] = temp;
            }
        }
    }
    // Regresa la lista de manera arreglada
    console.log(lista);
}

console.log("Ejercicio 2: bubble sort")
let list = [23, 15, 2, 70, 35];
bubbleSort(list)

//3. primer función: invierta un arreglo de números y regrese un nuevo arreglo con el resultado
function invertirLista(lista)
{
    let nuevaLista=[];
    //Se va insertando del último elemento de la lista al primero
    for (let i = lista.length-1; i >= 0; i--)
    {
        nuevaLista.push(lista[i]); 
    }
    return nuevaLista;
}

//segunda función: modifique el mismo arreglo que se pasa como argumento.
function modificarLista(lista)
{
    //añade uno a los elementos de la lista
    for(let i = 0; i < lista.length; i++)
    {
        lista[i] += 1;
    }

    return lista;
}

console.log("Ejercicio 3: invierte lista y la modifica añadiendole uno a los elementos")
console.log(invertirLista([1,2,3,4,5]))
console.log(modificarLista([1,2,3,4,5]))

//4. Primer letra en mayúscula 
function primeraMayuscula(cadena)
{
    let nuevaCadena = [];
    nuevaCadena.push(cadena[0].toUpperCase());
    let palabra = false;
    for (let i=0; i<cadena.length; i++)
    {
        if(cadena[i]==" ")//verifica que haya un espacio en blanco 
        {
            nuevaCadena.push(cadena[i+1].toUpperCase());//el caracter que sigue 
            palabra=true;//informa que se acaba de agregar una mayuscula
        }
        if(palabra==false)
        {
            nuevaCadena.push(cadena[i+1]);
        }
        palabra=false;//se reinicia la variable para seguir iterando 
    }
    return nuevaCadena.join('');
}

console.log("Ejercicio 4: Primer letra de cada palabra con mayuscula")
console.log(primeraMayuscula("la bbcita bblin"))

//5. Máximo común divisor
function MCD(n1, n2) {
    let residuo = 0;
    while (n2 !== 0) {
      residuo = n1 % n2;
      n1 = n2;
      n2 = residuo;
    }
    return n1;//valor correspondiente al MCD
  }

console.log("Ejercicio 5: MCD de 13 y 7")
console.log(MCD(13, 7))

//6. Hacker Speak - No funcionó :(
function hackerSpeak(string)
{
    let nuevaCadena = [];
    for (let i = 0; i < string.length; i++){
        if (string[i] == "a" || string[i] == "A" ){
            string[i] = "4";
            nuevaCadena.push(string[i])
        } 
        else if (string[i] == "e" || string[i] == "E" ){
            string[i] = "3";
            nuevaCadena.push(string[i])
        } 
        else if (string[i] == "i" || string[i] == "I" ){
            string[i] = "1";
            nuevaCadena.push(string[i])
        } 
        else if (string[i] == "o" || string[i] == "O" ){
            string[i] =  "0";
            nuevaCadena.push(string[i])
        } 
        else{
            nuevaCadena.push(string[i])
        }
   }
   return nuevaCadena;
}

console.log("Ejercicio 6: Hacker speak")
console.log(hackerSpeak("I Am Batman!"))

//7. Regresa los factores de un número (números que lo dividen)
function factores(numero)
{
    let temporal = 1; 
    let factores=[];

        for (let i=0; i<numero; i++)
        {
            temporal = numero%i;
            if(temporal == 0)
            {
               factores.push(i);
            }
        }
        factores.push(numero);
    
    return factores;
}

console.log("Ejercicio 7: Regresa los factores de 12")
console.log(factores(12))

//8. Quita los duplicados de una lista
function borrarDuplicados(lista) {
    //método filter regresa una nueva lista con los elementos que cumplen la condición dada
    return lista.filter((elemento,indice) => lista.indexOf(elemento) === indice);
    //  Gracias a GeeksForGeeks por explicarme el método .filter() 
}

console.log("Ejercicio 8: borra los duplicados de una lista [1, 0, 1, 1, 0, 0]")
console.log(borrarDuplicados([1, 0, 1, 1, 0, 0]))

//9. cadena más pequeña
function menorCadena(lista)
{
    let longitudes=[];//arreglo para almacenar las longitudes de las cadenas
    for(let i=0; i<lista.length;i++)
    {
        longitudes.push(lista[i].length);
    }
    return(Math.min.apply(Math,longitudes));
    //toma el minimo valor de las longitudes almacenadas 
}

console.log("Ejercicio 9: regresa la longitud de la cadena más corta")
console.log(menorCadena(["Soooooy", "Batmaaaaaan"]))

//10. Palíndromo
function palindromo(string)
{
    let minusculas = string.toLowerCase();
    let invertido = string.toLowerCase().split(" ").reverse().join(" ");
    return  invertido === minusculas;
}

console.log("Ejercicio 10: Palindromo - Somos o no somos")
console.log(palindromo("Somosonosomos"))

//11. Ordena todas las cadenas en orden alfabético.
function ordenListas(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
      for (let j = i + 1; j < lista.length; j++) {
        if (lista[j] < lista[i]) {
          let actual = lista[i];//creación de variable temporal
          lista[i] = lista[j];
          lista[j] = actual;
        }
      }
    }
    return lista;
  }

console.log("Ejercicio 11: Ordena todas las cadenas en orden alfabético.")
console.log(ordenListas(["Bueno","Malo","Feo"]))

//12. Escribe una función que tome una lista de números y devuelva la mediana y la moda.

// function medianaYmoda(numeros)
// {
//     let moda = repeticion(numeros);
//     //para la mediana, se puede usar la funcion de bubble Sort ya creada:
//     let numerosAscendentes = bubbleSort(numeros);
//     let mediana = 0;
//     if (numerosAscendentes.length%2 == 0)
//     {
//         mediana = numerosAscendentes.slice(l/2-1, l/2+1).reduce((a,b) => a+b)/2
//     }
//     else
//     {
//         mediana = numerosAscendentes.slice((l/2), l/2+1)[0]
//     }
//     console.log("Moda y mediana respectivamente: " + moda + " " + mediana)
// }

// console.log("Ejercicio 12: mediana y moda de una lista de numeros.")
// medianaYmoda([4,6,1,3,6])

//13. devuelve la cadena más frecuente

// 13. Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
function repeticion(lista)
{
    const repeticion = {}; 
    let repeticiones =[];
    //ciclo for para encontrar las repeticiones de cada cadena
    for (let elemento of lista) {
      repeticion[elemento] = (repeticion[elemento] || 0) + 1;
      repeticiones.push(repeticion[elemento]);
    }
    for (let valor of lista) 
    {
        //buscamos la llave que tenga el valor maximo 
      if (repeticion[valor] === Math.max.apply(Math,repeticiones))
        {
            return valor;
        }
    }
}
console.log("Ejercicio 13: Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.")
console.log(repeticion(["batman","batman","batman","joker"]))

//14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
function potencia(numero)
{
    return (Math.log2(numero)%2 === 0);
    //si un número tiene log 2, es potencia de 2. 
}

console.log("Ejercicio 14: devuelve si un número es potencia de 2")
console.log("4 es potencia de dos: " + potencia(4))

//15.  números en orden descendente.

function ordenDescendente(lista) {
    //funciona a la inversa que el bubble sort
    for(let i = 0; i <= lista.length-1; i++){
        for(let j = 0; j < ( lista.length-i-1); j++){

            //Compara si el primer número es menor que el segundo
            if(lista[j] < lista[j+1]){

            //Si la condición se cumple, entonces se invierten los valores
            let temp = lista[j];
            lista[j] = lista[j + 1];
            lista[j+1] = temp;
            }
        }
    }
    // Regresa la lista de manera arreglada
    console.log(lista);
  }

console.log("Ejercicio 15: números en orden descendente. ")
ordenDescendente([1,5,67,2])