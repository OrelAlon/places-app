let myName = "orel";

console.log(myName);

const fs = require("fs");

fs.writeFile("myName.txt", "your name is" + myName, (err) => {
  if (err) {
    console.log("error" + err);
    return;
  } else {
    console.log("working");
  }
});
