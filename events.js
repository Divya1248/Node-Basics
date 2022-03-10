// creating custom events
// const events = require("events");
// let eventEmitter = new events.EventEmitter();
// // registering events
// eventEmitter.on("ddclick", _ => {
//   console.log("clicked...");
// });

// emitting events by using emit method
// eventEmitter.emit("ddclick");

// task
const events = require("events");
const util = require("util");

function user(name) {
  this.name = name;
}
util.inherits(user, events.EventEmitter);

let priya = new user("priya");
let shashi = new user("shashi");
let divya = new user("divya");
let Alluser = [priya, shashi, divya];

Alluser.forEach(value => {
  // add custom event names
  value.on("speak", function (message) {
    console.log(value.name + " said " + message);
  });
});

priya.emit("speak", "hi shahsi sir how are you?");
shashi.emit("speak", "priya i am good how about you?");
