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
    sueldoExtra =sueldoSem - sueldoSem;
    totalaPagar = sueldoSem;
    alert('El valor a pagar es:' + ' '  +  totalaPagar);
    document.getElementById('ValorSem').value= sueldoSem;    
    document.getElementById('ValorTotal').value= totalaPagar;
    return totalaPagar;
    }

    else if (horasWork <= 80)
        {
        sueldoSem = (40*valorHora);
        sueldoExtra = (horasWork - 40)*valorHora;
        totalaPagar = sueldoSem + sueldoExtra;
        alert('El valor a pagar es:' + ' '  +  totalaPagar);
        document.getElementById('ValorSem').value= sueldoSem;    
        document.getElementById('ValorExtra').value= sueldoExtra;    
        document.getElementById('ValorTotal').value= totalaPagar;
        return totalaPagar;
        }

    else 
        {
        sueldoSem = (40*valorHora);
        sueldoExtra = (40*valorHora) + (horasWork - 80)*valorExtra;
        totalaPagar = sueldoSem + sueldoExtra;
        alert('El valor a pagar es:' + ' '  +  totalaPagar);
        document.getElementById('ValorSem').value= sueldoSem;    
        document.getElementById('ValorExtra').value= sueldoExtra;    
        document.getElementById('ValorTotal').value= totalaPagar;
        return totalaPagar;
        }
    
}        
   
    

