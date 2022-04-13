function isObject40(subject) {
    return typeof subject == "object";
  }
  
  function isArray40(subject) {
    return Array.isArray(subject);
  }
  
  function deepCopy40(subject) {
    let copySubject;
  
    const subjectIsObject = isObject40(subject);
    const subjectIsArray = isArray40(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject40(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy40(subject[key]);
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
  
  
  function SuperObject40() {}
  SuperObject40.isObject40 = function (subject) {
    return typeof subject == "object";
  }
  SuperObject40.deepCopy40 = function (subject) {
    let copySubject;
  
    const subjectIsObject = isObject40(subject);
    const subjectIsArray = isArray40(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject40(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy40(subject[key]);
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
  
  function requiredParam40(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function LearningPath40({
    name = requiredParam40("name"),
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
  
  function Student40({
    name = requiredParam40("name"),
    email = requiredParam40("email"),
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
        if (newLp instanceof LearningPath40) {
          private["_learningPaths"].push(newLp);
        } else {
          console.warn("Alguno de los LPs no es una instancia dell prototipo LearningPath");
        }
      },
    });
  
    for (learningPathIndex in learningPaths) {
      this.learningPaths = learningPaths[learningPathIndex];
    }
  }
  
  const escuelaWeb40 = new LearningPath40({ name: "Escuela de WebDev" });
  const escuelaData40 = new LearningPath40({ name: "Escuela de Data Science" });
  const juan40 = new Student40({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
      escuelaWeb40,
      escuelaData40,
    ],
  });