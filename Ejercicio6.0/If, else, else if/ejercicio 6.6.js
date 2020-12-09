//Ejercicio # 3//
let nameOne;
let tipoContrato;
let horasWork;
const valorHora = 6000;
let salarioBruto;
const deduccionesMes= 0.08;
const bonificacionesMes = 0.30;
let valorDeduccion;
let valorBono;
let salarioNeto;

function Registrar(){

//Leer variables.

//Ingresar nombre.
nameOne = document.getElementById('nameOne').value;

//Ingresar tipo de contrato.
tipoContrato = document.getElementById('fijoTemporal').value;

//

horasWork = Number(document.getElementById('number').value);

//Invocar funcion.

salarioBruto = totalBruto();
valorDeduccion = totalDeduc();
valorBono = totalBono();

//Imprimir

document.getElementById('salarioBruto').value = `$ ${salarioBruto}`;    
document.getElementById('totalDeducciones').value = ` $ ${valorDeduccion}`;
document.getElementById('totalBonos').value = `$ ${valorBono}`;    

}

function totalBruto(){
    salarioBruto = valorHora*horasWork;
    alert(salarioBruto);
    return salarioBruto;
}

function totalDeduc(){
    valorDeduccion = salarioBruto*deduccionesMes;
    alert(valorDeduccion);
    return valorDeduccion;
}

function totalBono(){
    valorBono = salarioBruto*bonificacionesMes;
    alert(valorBono);
    return valorBono;
}


