
let tipoDeOperacion="";       //variables declaradas para recibir los datos digitados por el usuario
let primerValor="";
let segundoValor="";


tipoDeOperacion=prompt("Que tipo de operación deseas realizar: suma, resta, multiplicación,división. ¡Salir para ninguna operación!");

while(tipoDeOperacion === "" ){      // while que comprueba que se digite una operacion 


if (tipoDeOperacion=== ""){                                       
       alert("Digita un tipo de operación valido");

    tipoDeOperacion=prompt("Que tipo de operación deseas realizar: suma, resta, multiplicación,división. ¡Salir para ninguna operación!");

}

}
/*-------------------------------------------------------*/



primerValor=parseInt(prompt("Digita el primer valor para tu operación"));             //pide  los valores para la operacion
segundoValor=parseInt(prompt("DIgita el segundo valor para tu operación"));


while (Number.isNaN(primerValor) || Number.isNaN(segundoValor)){               //se usa la funcion Numner.isNaN, para verificar si el valor introducido no es numerico
    
    

    
    alert("Ingrese valores validos");


    primerValor=parseInt(prompt("Digita el primer valor para tu operación"));
    segundoValor=parseInt(prompt("DIgita el segundo valor para tu operación"));
    
}


 /*----------------------------------------------------------------*/
    
  if (primerValor !== 0 || segundoValor !== 0){                            // se ejecuta la funcion switch case para verificar que operacion necesita realizar el usuario

  switch (tipoDeOperacion){

    case "suma":

    suma(primerValor,segundoValor);                       // se llama a la funcion suma para que realize el calculo
    
    break;

    case "resta":

    resta(primerValor,segundoValor);

    break;

    case "multiplicación":
    case "multiplicacion":

    multiplicacion(primerValor,segundoValor);

    break;


    case "división":
    case "division":

     division(primerValor,segundoValor);

     break;

     case "Salir": 

     alert ("Has seleccionado Salir" )
     break;

    default:
      
    alert (" ingresa un tipo de operacion valida")

  }


}


function suma (valor1,valor2) {                 // funciones donde se realizan las operaciones
let sumar = valor1 + valor2;

alert(`El resultado de la suma ${valor1} + ${valor2} es: ${sumar}`);

}


function resta (valor1,valor2) {
    let restar = valor1 - valor2;  
    
    alert(`El resultado de la resta ${valor1} - ${valor2} es: ${restar}`);  

}


function multiplicacion (valor1,valor2) {

    let multi = valor1 * valor2;  
    
    alert(`El resultado de la multiplicación ${valor1} * ${valor2} es: ${multi}`);    

}


function division (valor1,valor2) {
    
    let Divi = valor1 / valor2;  
    
    alert(`El resultado de la división ${valor1} / ${valor2} es: ${Divi}`);
}