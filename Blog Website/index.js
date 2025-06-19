import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/notes", (req, res) => {
    res.render("notes.ejs", {
        title:req.body.title,
        content:req.body.content
    })
})


app.listen(port, (err) => {
    if (err) throw err;
    console.log("port 3000 pe hai maje karo!")
})