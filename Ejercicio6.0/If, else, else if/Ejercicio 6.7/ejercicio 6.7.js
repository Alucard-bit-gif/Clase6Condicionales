//Ejercicio # 3//

let numeroUno;
let numeroDos;
let numeroTres;
let numeroMayor;

function Calcular(){
//Leer variables.

//Ingresar numero.

numeroUno = Number(document.getElementById('number1').value);
numeroDos = Number(document.getElementById('number2').value);
numeroTres = Number(document.getElementById('number3').value);



//Invocar funcion.

numeroMayor = numeroUno  + numeroDos + numeroTres;

//Imprimir

document.querySelector('numeroMayor').innerHTML = numeroMayor;    

}






