//Ejercicio # 3//

//document.getElementById('OrdenC').style.display="none"

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


salarioNeto = totalPago();

//Imprimir

document.getElementById('salarioBruto').value = `$ ${salarioBruto}`;    
document.getElementById('totalDeducciones').value = ` $ ${valorDeduccion}`;
document.getElementById('totalBonos').value = `$ ${valorBono}`;    

}

function totalPago()
{
if(tipoContrato === 'fijo')

{
salarioBruto = valorHora*horasWork;
valorDeduccion = salarioBruto*deduccionesMes;
valorBono = salarioBruto*bonificacionesMes;
document.querySelector('#empleado2').innerHTML = `$ ${nameOne}`;    
}
                          

else {
        salarioBruto = valorHora*horasWork;
        alert(salarioBruto);
        document.querySelector('#pesos2').innerHTML = `$ ${salarioBruto}`;    
        return salarioBruto;
    }
}
function Calcular()
{
salarioNeto = (salarioBruto-valorDeduccion) + valorBono;
alert(salarioNeto);
document.querySelector('#pesos2').innerHTML = `$ ${salarioNeto}`;    
return salarioNeto;
}

