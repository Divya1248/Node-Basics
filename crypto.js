// const crypto = require("crypto");
// let password = "shashi123";
// let finalData = crypto
//   .createHmac("sha256", password)
//   .update("shahsi is react master")
//   .digest("hex");
// console.log(password); //original
// console.log(finalData);

const cry = require("crypto-js");
let en = cry.AES.encrypt("harsha", "hai");
let de = cry.AES.decrypt(en, "hai");
console.log(de.toString(cry.enc.Utf8));

// let a = {
//   internal: [{ url: "d" }, { url: "a" }],
//   external: [{ url: "d" }, { url: "a" }],
// };
