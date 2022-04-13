const obj5 =
{
    a: "a",
    b: "b",
    c: 
    {
        d: "d",
        e: "e",
    }
};


//Uso de JSON.parse() y JSON.stringify()

const obj6 = JSON.stringify(obj5);  //JSON.stringify es una herramienta y un metodo estático del prototipo JSON que nos permite convertir un objeto a string
const obj7 = JSON.parse(obj6); //JSON.parse es una herramienta y un metodo estático del prototipo JSON que nos permite convertir un string a un objeto

//JSON.parse() y JSON.stringify() no sirven para metodos de los objetos

