// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione

// declara el prompt
// var password = "laboratoria";
// var inputPass = prompt("Ingrese la contraseña : ");


// function user() {
//   // escribe tu código aqui...
//   if (password == null) {
//     console.log("false");
//   } else if (password != inputPass) {
//     console.log("false");
//   } else if (password == password) {
//     console.log("true");
//   }
// }
// user();



// comenta todo lo anterior y escribelo en ES6
const password = "laboratoria";
let inputPass = prompt("Ingrese la contraseña : ");

const user = () => {
  if (password == null) {
    console.log("false");
  } else if (password != inputPass) {
    console.log("false");
  } else if (password == password) {
    console.log("true");
  }
}

user();
