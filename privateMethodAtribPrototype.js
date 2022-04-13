function isObject30(subject) {
    return typeof subject == "object";
  }
  
  function isArray30(subject) {
    return Array.isArray(subject);
  }
  
  function deepCopy30(subject) {
    let copySubject;
  
    const subjectIsObject = isObject30(subject);
    const subjectIsArray = isArray30(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject30(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy30(subject[key]);
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
  
  
  function requiredParam30(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function LearningPath30({
    name = requiredParam30("name"),
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
  
  function Student30({
    name = requiredParam30("name"),
    email = requiredParam30("email"),
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
  
    const private = {
      "_learningPaths": [],
    };
  
    Object.defineProperty(this, "learningPaths", {
      get() {
        return private["_learningPaths"];
      },
      set(newLp) {
        if (newLp instanceof LearningPath30) {
          private["_learningPaths"].push(newLp);
        } else {
          console.warn("Alguno de los LPs no es una instancia del prototipo LearningPath");
        }
      },
    });
  
    for (learningPathIndex in learningPaths) {
      this.learningPaths = learningPaths[learningPathIndex];
    }
  }
  
  
  const escuelaWeb30 = new LearningPath30({ name: "Escuela de WebDev" });
  const escuelaData30 = new LearningPath30({ name: "Escuela de Data Science" });
  const juan30 = new Student30({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
      escuelaWeb30,
      escuelaData30,
    ],
  });