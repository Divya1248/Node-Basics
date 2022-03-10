// common JS Module
// let javaFullStack = (...rest) => rest;
//  let pythonFullStack = (...rest) => rest;
//  let mernStack = (...rest) => rest;
//  let Testing = (...rest) => rest;

// one way to export
// module.exports.javaFullStack = javaFullStack;
// module.exports.pythonFullStack = pythonFullStack;
// module.exports.mernStack = mernStack;
// module.exports.Testing = Testing;

// second way
// module.exports = {
//     javaFullStack,
//     pythonFullStack,
//     mernStack,
//     Testing,
// }

// ES6 Module
// export let javaFullStack = (...rest) => rest;
// export let pythonFullStack = (...rest) => rest;
// export let mernStack = (...rest) => rest;
// export let Testing = (...rest) => rest;



let Javascript = (...rest) => { return rest };

let Java= (...rest) => {
  return rest;
};

let Python = (...rest) => {
  return rest;
};

let FullStack = (...rest) => {
  return rest;
};

export { Javascript, Java, Python };
export default FullStack;