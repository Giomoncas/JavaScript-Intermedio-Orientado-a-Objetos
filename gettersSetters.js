function requiredParam3(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function createStudent3({
    name = requiredParam3("name"),
    email = requiredParam3("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    const private = {
      "_name": name,
    };
  
    const public = {
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
      get name() {
        return private["_name"];
      },
      set name(newName) {
        if (newName.length != 0) {
          private["_name"] = newName;
        } else {
          console.warn("Tu nombre debe tener al menos 1 caracter");
        }
      },
      // readName() {
      //   return private["_name"];
      // },
      // changeName(newName) {
      //   private["_name"] = newName;
      // },
    };
  
    // Object.defineProperty(public, "readName", {
    //   writable: false,
    //   configurable: false,
    // });
    // Object.defineProperty(public, "changeName", {
    //   writable: false,
    //   configurable: false,
    // });
  
    return public;
  }
  
  const juan4 = createStudent3({ email: "juanito@frijoles.co", name: "Juanito" });
  
  