
//Ejemplo # 4

//Inicio.

//Declarar variables.

let horasWork = 160;
let horasExtra;
const valorHora = 400;
const valorExtra = 500;
let sueldoSem;
let sueldoExtra;
let totalaPagar;

Calcular (horasWork);

function Calcular()
{
    if(horasWork <= 40)  
    { 
    sueldoSem = horasWork*valorHora;
    totalaPagar = sueldoSem;
    alert('El valor a pagar es:' + ' '  +  totalaPagar);
    return totalaPagar;
    }

    else if (horasWork <= 80)
        {
        sueldoExtra = (40*valorHora) + ((horasWork - 40)*valorHora);
        totalaPagar = sueldoExtra;
        alert('El valor a pagar es:' + ' '  +  totalaPagar);
        return totalaPagar;
        }

    else 
        {
        sueldoExtra = (80*valorHora) + ((horasWork - 80)*valorExtra);
        totalaPagar = sueldoExtra;
        alert('El valor a pagar es:' + ' '  +  totalaPagar);
        return totalaPagar
        }

//Leer variables

//Ingresar horas trabajadas

//horasWork = Number(document.getElementById('time').value);//

//Invocar funcion
    
sueldoSem = pagoSueldo();

    //Imprimir
    /*document.getElementById('Inicial').value= valorInicial;    
    document.getElementById('Descuento').value= valorDescuento;    
    document.getElementById('Total').value= totalaPagar; */
    
}        
   


