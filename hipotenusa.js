const prompt = require("prompt-sync")();

var lado1 = prompt("Lado del triangulo? ");
var lado2 = prompt("Lado del triangulo? ");
var hipotenu = hypotenuse(lado1, lado2);
console.log("La hipotenusa del triangulo es ",hipotenu);

function hypotenuse(a, b) {
  return Math.hypot(a,b);
}
