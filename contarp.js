const prompt = require("prompt-sync")();

var texto = prompt("ingresa un texto--> ");
var letra = prompt("ingresa un caracter que desees buscarle # repeticiones--> ");
var repetidos = count(texto,letra);

// mostramos nuestro resultado
console.log(repetidos);

// elaboramos la funcion
function count(str, char){
  var ind = [];
  for(var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char) ind.push(i);
  }
	return ind.length;
}
