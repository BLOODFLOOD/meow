const fs = require("fs");
fs.writeFile("message.txt", "hello world", (err) => {
    if (err) throw err;
    console.log("file save hogaya lmao");
});

fs.readFile("message.txt",'Utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})