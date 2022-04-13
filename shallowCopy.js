const obj1 =
{
    a: "a",
    b: "b",
    c: 
    {
        d: "d",
        e: "e",
    }
};

//Vamos a copiar manualmente cada una de las propiedades de este objeto

const obj2 =
{

}

for(prop in obj1)  //Crear una copia de los atributos del obj1 en los atributos del ojb2 con ciclo for in. Se forma un problema cuando tenemos atributos que son objetos
{
    obj2[prop] = obj1[prop];
}

//metodo estatico del superprototipo Object que nos ayuda a copiar los atributos de un objeto a otro

const obj3 = Object.assign({}, obj1);  //No funciona cuando el atributo del objeto a copiar es un objeto
const obj4 = Object.create(obj1); //Crea automaticamente un objeto copia con las porpiedades en su __proto__

