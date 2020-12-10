//Ejercicio # 3//

document.getElementById('resultado').style.display="block";

let numberOne;
let numberTwo;
let numberThree;
let numberMayor;

function Calcular()
{
//Leer variables.

//Ingresar numero.

numberOne = Number(document.getElementById('number1').value);
numberTwo = Number(document.getElementById('number2').value);
numberThree = Number(document.getElementById('number3').value);


//Invocar funcion.

numberMayor = numberOne  + numberTwo + numberThree;

//Imprimir

alert(numberMayor);

}
