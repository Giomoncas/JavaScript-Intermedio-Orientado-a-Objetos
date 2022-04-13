//Recursiivad: Es cuando una funcion se llama asi misma

//Mostrar los numeros de 0 a 5 en consola con ciclos

 let num = 0;

 while(num <= 5){
     console.log(num);
     num++;
 }

 //Mostrar los numeros de 0 a 5 en consola con recursividad

 function recursiva(numero)
 {
     console.log(numero);
     if(numero < 5)
     {         
         return recursiva(numero + 1);
     }
     else
     {
         return 5;
     }
 }

 //Estructura de una funcion recursiva

// function recursiva() {
//   if (/* validacion */) {
//     // llamados recursivos
//   } else {
//     // llamados normales, sin recursividad
//   }
// }

//Mostar los elementos de un arreglo con su posicion y valor en un objeto en la consola con ciclo for

const numeritos = [0,1,2,3,4,5,5,6,7,8,9,435678,7,2,3];
let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
     numerito = numeritos[index];
     console.log({ index, numerito });
}

//Usar una funcion recursiva para mostar los elementos de un arreglo con su posicion y valor en un objeto en la consola

function recursiva(numbersArray) {
  if (numbersArray.length != 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);  //Imprimimos el primer elemento del arreglo

    numbersArray.shift();  //Este metodo elimina el primer elemento del arreglo
    recursiva(numbersArray); //Volvemos a llamar a la funcion recursiva para que imprima el arreglo pero ya no tiene el primer elemento eliminado con el metodo shift()
  }
}

