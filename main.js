const juan =   //Un objeto
{
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso1"],

    addCourse(newCourse)
    {
        console.log("This", this);
        console.log("this.approvedCourses", this.approvedCourses);
        this.approvedCourses.push(newCourse);  //Accede al atributo approvedCourses y le agrega información a lo ultimo del arreglo
    }
}

//Utilizacion de los métodos estáticos de JavaScript

//console.log(Object.keys(juan)); //Devuelve un arreglo con los nombres de los atributos del objeto
//console.log(Object.getOwnPropertyNames(juan)); //Devuelve un arreglo con los nombres de los atributos del objeto
//console.log(Object.entries(juan)); //Devuelve un arreglo con los atributos del objeto

Object.defineProperty(juan, "",     //Este método define un atributo del objeto y sus características
{
    value: "",
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(juan, "pruebaNasa",     //Este método define un atributo del objeto y sus características
{
    value: "extraterrestres",
    writable: false,
    enumerable: false,
    configurable: false,
});

Object.defineProperty(juan, "navigator",     //Este método define un atributo del objeto y sus características
{
    value: "Chrome",
    writable: false,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(juan, "editor",     //Este método define un atributo del objeto y sus características
{
    value: "VSCode",
    writable: true,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(juan, "terminal",     //Este método define un atributo del objeto y sus características
{
    value: "WSL",
    writable: true,
    enumerable: false,
    configurable: true,
});

//Metodos estaticos de Object de encapsulamiento

Object.seal(juan); //Coloca las propiedades writeable, configurable y enumerable en false
Object.freeze(juan); //Coloca las propiedades writeable y configurable en false, enumerable la coloca en true

//console.log(Object.getOwnPropertyDescriptors(juan)); //Devuelve un arreglo con los atributos del objeto
