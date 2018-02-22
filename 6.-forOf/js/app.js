 /* ------------- ES5 ---------------*/
 // declara la variable

 // var array = [10, 20, 30, 20, 30, 40, 60];

 // // +++++++++ escribe tu funcion (opcion 1)

 // // var arrTotal = array.reduce(function(previous, current) {
 // //    return previous + current;
 // // }, 0);
 // //
 // // var promedio = arrTotal / array.length;
 // // console.log("El promedio de este arreglo es: " + promedio);

 // // +++++++++++++ escribe tu funcion (opcion 2)

 // function avarage(item) {
 //   arrTotal = array.reduce(function(previous, current) {
 //     return previous + current;
 //   }, 0);
 //   return "El promedio de este arreglo es: " + (arrTotal / array.length);
 // }
 //
 // console.log(avarage(array));


 /* ------------- ES6 ---------------*/
 // Comenta todo lo anterior y escribelo en ES6
 const array = [10, 20, 30, 20, 30, 40, 60];

 // escribe tu funcion
 const avarage = array => {
   let total = 0;
   for (let value of array) {
     total += value;
   }
   return `El promedio de este arreglo es: ${total / array.length}`;
 }
 console.log(avarage(array));
