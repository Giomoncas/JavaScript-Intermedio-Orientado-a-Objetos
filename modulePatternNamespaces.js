
function requiredParam2(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function createStudent2({
    name = requiredParam2("name"),
    email = requiredParam2("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    const private = {  // private properties
      "_name": name,
    };
  
    const public = {  // public properties
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
      readName() {  //Leemos el valor del nombre ppor medio de esta funcion
        return private["_name"];
      },
      changeName(newName) {  //Modificamos el valor de la propiedad nombre 
        private["_name"] = newName;
      },
    };
  
    Object.defineProperty(public, "readName", {  //Vamos a proteger una propiedad del objeto
      writable: false,
      configurable: false,
    });
    Object.defineProperty(public, "changeName", {  //Vamos a proteger una propiedad del objeto
      writable: false,
      configurable: false,
    });
  
    return public;
  }
  
  const juan3 = createStudent2({ email: "juanito@frijoles.co", name: "Juanito" });
  