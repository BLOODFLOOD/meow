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

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
var size = 0;
app.post("/submit", (req, res) => {
  const length = req.body["fname"].length + req.body["lname"].length;
  res.render("index.ejs", { size:length});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
