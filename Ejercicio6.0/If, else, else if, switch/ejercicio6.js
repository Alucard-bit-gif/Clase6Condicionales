
//Ejemplo # 4

//Inicio.

//Declarar variables.

let horasWork;
let horasExtra;
const valorHora = 400;
const valorExtra = 500;
let sueldoSem;
let sueldoExtra;
let totalaPagar;

Calcular (horasWork);

function Calcular()
{

    horasWork = Number(document.getElementById('time').value);

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


    //Imprimir
    /*document.getElementById('Inicial').value= valorInicial;    
    document.getElementById('Descuento').value= valorDescuento;    
    document.getElementById('Total').value= totalaPagar; */
    
}        
   


