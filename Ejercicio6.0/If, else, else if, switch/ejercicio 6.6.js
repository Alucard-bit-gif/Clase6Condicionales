
document.getElementById('resultado').style.display="none"; /*Ocultar contenedor de orden de compra */

//Ejercicio # 3

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

//Leer y procedimiento con variables iniciales

horasWork = Number(document.getElementById('number').value);
salarioBruto = valorHora*horasWork;
document.getElementById('salarioBruto').value=valorHora*horasWork;    

function Calcular(){

    nameOne = document.getElementById('nameOne').value;

    tipoContrato = document.getElementById('fijoTemporal').value;

    totalPago = salarioNeto();

    //Imprimir
    
    
    
    
    
    
    
    
    
    
    
    valorDeduccionA = salarioWorkerA*deduccionesMes;
    valorBonoA = salarioWorkerA*bonificacionesMes;
    valorTotalA = (salarioWorkerA - valorDeduccionA) + valorBonoA; 
    
    valorDeduccionB = salarioWorkerB*deduccionesMes;
    valorBonoB = salarioWorkerB*bonificacionesMes;
    valorTotalB = (salarioWorkerB - valorDeduccionB) + valorBonoB; 

    
    if(tipoContrato == 'Fijo'){
        
    }
    
    else {
        
    }

}
