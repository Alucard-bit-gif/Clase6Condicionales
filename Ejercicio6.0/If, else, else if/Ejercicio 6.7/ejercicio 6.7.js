//Ejercicio # 3//

document.getElementById('resultado').style.display="none"

let numberOne;
let numberTwo;
let numberThree;
let numberMayor;


function Registrar(){

//Leer variables.

//Ingresar numero.
numberOne = document.getElementById('nameOne').value;

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
}
                          

else {
        salarioBruto = valorHora*horasWork;
        alert(salarioBruto);
        return salarioBruto;
    }
}

function Calcular()
{   
    document.getElementById('survey-form').style.display="none"
    document.getElementById('resultado').style.display="block"

    if(tipoContrato === 'fijo')
{
salarioNeto = (salarioBruto-valorDeduccion) + valorBono;
alert(salarioNeto);
document.querySelector('#empleado2').innerHTML = `${nameOne}`;    
document.querySelector('#pesos2').innerHTML = `$ ${salarioNeto}`;    
return salarioNeto;
}

    else {
        document.querySelector('#empleado2').innerHTML = `${nameOne}`;
        document.querySelector('#pesos2').innerHTML = `$ ${salarioBruto}`;        
    }

}