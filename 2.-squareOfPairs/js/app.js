// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

        /* ------------- ES5 ---------------*/

// declara las variables ES5

// var array = [2, 4, 6];
// var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];

// declaración de la funcion

// function square() {
//   // escribe tu código aqui...
//   var arrayTotal = array.map(function(element) {
//     if (Math.sign(element) == 1) { // si son numeros positivos
//       return element * element;
//     } else {
//       return element;
//     }
//   })
//   console.log(arrayTotal);
//   return arrayTotal
// }
// square(array);




      /* ------------- ES6 ---------------*/

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// const array = [2, 4, 6];
const array = [-3, 2, -8, 12, 5];
// const array = [1, 2, 3, 4, 5];


// declara la funcion y ejecuta el código
const square = array => {
  const arrayTotal = array.map(element => {
    if (Math.sign(element) == 1) {
      return element * element;
    } else {
      return element;
    }
  })
  console.log(arrayTotal);
}
square(array)








// ejecuta la funcion
