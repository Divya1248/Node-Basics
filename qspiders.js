// common js module

// const {
//   javaFullStack,
//   pythonFullStack,
//   mernStack,
//   Testing,
// } = require("./Courses");

// let PYTHON = pythonFullStack(
//   "python",
//   "js",
//   "flask",
//   "django",
//   "mangodb",
//   "angular"
// );
// PYTHON.forEach(py => console.log(py));

// ES6 Module
// import { javaFullStack, pythonFullStack } from "./Courses.js";

// console.log(javaFullStack("java", "j2ee"));
// console.log(pythonFullStack("python", "flask"));

// import both default and named
// import FullStack, { Javascript, Java, Python } from "./Courses.js";
// console.log(FullStack("html", "react"));
// console.log(Java("java"));

// another way
// import FullStack, {
//   Javascript as Dixith,
//   Java as Priyanka,
//   Python as Shashi,
// } from "./Courses.js";
// console.log(Dixith("java master........"));
// console.log(Priyanka("She is .........."));
// console.log(Shashi("big......"));

// import all using *
import * as JSP from "./Courses.js";
console.log(JSP.Javascript("javascript"));
console.log(JSP.Java("java"));
console.log(JSP.Python("python"));
console.log(JSP.default("javascript", "react"));
