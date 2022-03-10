const path = require("path");
// join all the arguments together
// !path.join
console.log(path.join(__dirname + "/shashi" + "/divya"));
console.log(path.join(__filename, "Jspiders", "testyantra"));
console.log(path.join(__filename, "Jspiders", "testyantra", "..", "..", ".."));

// !path.extname
// Return the extension of the path, from the last "." to end of string in the last portion of the path. If there is no "." in the last portion of the path or the first character of it is "." , then it returns an empty string.
console.log(path.extname("shashi.java"));

// !path.basename
// return last portion of the path. Similar to the unix basename command. often used to exrtract the file name from a fully qualified path.
console.log(path.basename("shahsi/manu/vinu"));

// !path.normalize
// it reduces multiple slashes to one
console.log(path.normalize("public///shahsi///divya "));

// !path.resolve
// starting from leftmost parameter, resolves to absolute path
console.log(path.resolve("shashi", "manu.txt"));

// !path.parse
// it returns object from a path string.
console.log(path.parse(__filename));

// !path.dirname
// find folder similar to unix command
console.log(path.dirname(__filename));

// !path.relative
console.log(path.relative("../../../shashi", "shashi"))

