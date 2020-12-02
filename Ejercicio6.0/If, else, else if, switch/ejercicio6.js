'use strict'

//Ejemplo # 1

let numUno = 5;

Simple(numUno);

function Simple(){
    if(numUno < 4+2)
    alert('El condicional es verdadero')
}

//------------------------------------------->

//Ejemplo # 2

let numUno = 8;

Simple(numUno);

function Simple(){
    if(numUno < 4+2){
    alert('El'  +  numUno  +  'es menor que 4 + 2');

    }

    else {

    alert('El ' + numUno + ' es mayor que 4 + 2');
    }

}


//------------------------------------------->

//Ejemplo # 3

let numUno = 3;

Simple(numUno);

function Simple(){
    if(numUno < 5){
        alert ('El ' + numUno + ' es menor que 5');
    }

    else if (numUno == 5){
        alert ('El ' + numUno + ' es igual a 5')
    }

    else {
        alert ('El ' + numUno + ' es mayor a 5')
    }
}


//------------------------------------------->

//Ejemplo # 4

//Inicio.

//Declarar variables.

let horasWork = 30;
let horasExtra;
let valorHora = 400;
let valorExtra = 500;
let sueldoSem;


function Calcular()
{

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
   

//Procedimiento


   function pagoSueldo(){
      
    if(horasWork <= 40)  
        { 
        sueldoSem = horasWork*valorHora;
        alert('El valor a pagar es:' + ' '  +  sueldoSem);
        return sueldoSem;
        }


    else if (horasWork <= 80)
        {
        sueldoSem = (40*valorHora) + ((horasWork - 40)*valorHora);
        alert('El valor a pagar es:' + ' '  +  sueldoSem);
        return sueldoSem;
        }

                        
    else 
        {
        sueldoSem = (80*valorHora) + ((horasWork - 80)*valorExtra);
        alert('El valor a pagar es:' + ' '  +  sueldoSem);
        return sueldoSem
        } 

    }
    
    //Fin
        
   

    

   


















//Archivo para condicionales
