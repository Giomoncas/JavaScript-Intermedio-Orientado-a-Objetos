function isObject(subject) {
    return typeof subject == "object";  //Asi verificamos si la variable es un objeto
  }
  
  function isArray(subject) {
    return Array.isArray(subject);  //Asi verificamos si la variable es un arreglo
  }
  
  function deepCopy(subject) {
    let copySubject;  //Se inicializa la variable copySubject
  
    const subjectIsObject = isObject(subject);  //Guardamos en una variable el resultado true o false de la funcion isObject
    const subjectIsArray = isArray(subject); //Guardamos en una variable el resultado true o false de la funcion isArray
  
    if (subjectIsArray) {
      copySubject = [];  //Se asigna la variable copySubject a un arreglo con el contenido de subject si es verdadero que subject es un arreglo
    } else if (subjectIsObject) {
      copySubject = {}; //Se asigna la variable copySubject a un objeto con el contenido de subject si es verdadero que subject es un objeto
    } else {
      return subject;  //Si no se cumplen las condiciones anteriores, retornamos el valor de subject
    }
  
    for (key in subject) {  //Validamos si cada una de las propiedades dentro del array o el objeto es un objeto 
      const keyIsObject = isObject(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);  //Si es un objeto, se llama a la funcion deepCopy con el valor de la propiedad
      } else {
        if (subjectIsArray) {  //Si es un arreglo, se asigna el valor de la propiedad a la posicion del arreglo
          copySubject.push(subject[key]);  //Insertamos cada iuno de los elementos key al arreglo
        } else {
          copySubject[key] = subject[key];  //Asignamos el valor de la propiedad a la propiedad key de la copia
        }
      }
    }
  
    return copySubject; //retornamos la copia del objeto o arreglo
  }
  
  const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
      twitter: undefined,
      instagram: undefined,
      facebook: undefined,
    },
  };
  
  const juan = deepCopy(studentBase);  //Copiamos todo el objeto studentBase
  Object.defineProperty(juan, "name", {  //De esta manera evitamos que se modifique la propiedad name de Juan
      value: "Juan",
      configurable: false,  //El problema de este metodo es que tocaria colocarle la propiedad configurable a false a cada atributo del objeto
  });

  Object.seal(juan); //De esta manera colocamos todas las propiedades configurable en false
  Object.isSealed(juan); //Verificamos si el objeto tiene sus propiedades protegidad por configurable false , arroja falso o verdadero
  Object.isFrozen(juan); //Verificamos si el objeto tiene sus propiedades protegidad por configurable y writeable en false, arroja falso o verdadero
  // juan.name = "Juanito";