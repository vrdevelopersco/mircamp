const prompt = require("prompt-sync")();

// iniciamos par variables
var repiteme = 0;

// aqui colocaremos el arreglo que revisaremos
var MiArreglo = [];
var nums = prompt("Cuantos numeros deseas ingresar? ");
  while(repiteme < nums) {
    repiteme++;
var NumsArreglo = prompt("ingresa numero--> ");
  MiArreglo.push(NumsArreglo);
}

filter(NumsArreglo);


function filter(LosNumeros){
// iniciamos el array donde guardaremos los numeros grandes
var NumeroGrande = [];
for (let i = 0; i<MiArreglo.length; i++) {
  var NumActual = MiArreglo[i];
  if (NumActual > 10) {
    NumeroGrande.push(NumActual)
  }
}
  return console.log(NumeroGrande);
}
