function isObject20(subject) {
    return typeof subject == "object";
  }
  
  function isArray20(subject) {
    return Array.isArray(subject);
  }
  
  function deepCopy20(subject) {
    let copySubject;
  
    const subjectIsObject = isObject20(subject);
    const subjectIsArray = isArray20(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject20(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy20(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
  }
  
  
  function requiredParam20(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function LearningPath20({
    name = requiredParam20("name"),
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  
    // const private = {
    //   "_name": name,
    //   "_courses": courses,
    // };
  
    // const public = {
    //   get name() {
    //     return private["_name"];
    //   },
    //   set name(newName) {
    //     if (newName.length != 0) {
    //       private["_name"] = newName;
    //     } else {
    //       console.warn("Tu nombre debe tener al menos 1 caracter");
    //     }
    //   },
    //   get courses() {
    //     return private["_courses"];
    //   },
    // };
  
    // return public;
  }
  
  function Student20({
    name = requiredParam20("name"),
    email = requiredParam20("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
  
    if (isArray20(learningPaths)) {
      this.learningPaths = [];
      
      for (learningPathIndex in learningPaths) {
        if (learningPaths[learningPathIndex] instanceof LearningPath20) {
          this.learningPaths.push(learningPaths[learningPathIndex]);
        }
      }
    }
    
    
    
  
    // const private = {
    //   "_name": name,
    //   "_learningPaths": learningPaths,
    // };
  
    // const public = {
    //   email,
    //   age,
    //   approvedCourses,
    //   socialMedia: {
    //     twitter,
    //     instagram,
    //     facebook,
    //   },
    //   get name() {
    //     return private["_name"];
    //   },
    //   set name(newName) {
    //     if (newName.length != 0) {
    //       private["_name"] = newName;
    //     } else {
    //       console.warn("Tu nombre debe tener al menos 1 caracter");
    //     }
    //   },
    //   get learningPaths() {
    //     return private["_learningPaths"];
    //   },
    //   set learningPaths(newLP) {
    //     if (!newLP.name) {
    //       console.warn("Tu LP no tiene la propiedad name");
    //       return;
    //     }
  
    //     if (!newLP.courses) {
    //       console.warn("Tu LP no tiene courses");
    //       return;
    //     }
  
    //     if (!isArray(newLP.courses)) {
    //       console.warn("Tu LP no es una lista (*de cursos)");
    //       return;
    //     }
        
    //     private["_learningPaths"].push(newLP);
    //   },
    // };
  
    // return public;
  }
  
  const escuelaWeb = new LearningPath20({ name: "Escuela de WebDev" });
  const escuelaData = new LearningPath20({ name: "Escuela de Data Science" });
  const juan20 = new Student20({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });