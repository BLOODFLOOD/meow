//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
import bodyparser from "body-parser";
import morgan from "morgan";

function checkpass(req, res, next) {
    if (req.body.password == "meow") {
        next();
    }
    else {
        res.redirect("/");
    }
}
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); 
});

app.use(checkpass);

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html"); 
})

app.listen(3000, (err) => {
    if (err) throw err;
    console.log("server hosted on local port 3000");
})