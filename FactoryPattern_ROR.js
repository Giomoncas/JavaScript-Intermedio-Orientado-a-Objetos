// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourses: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     twitter: undefined,
//     instagram: undefined,
//     facebook: undefined,
//   },
// };

function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    return {
      name,
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
    };
  }
  
  const juan2 = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });