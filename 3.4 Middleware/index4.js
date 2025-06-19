import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyparser from "body-parser";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
 // console.log(req.body);
  const name = req.body["street"];
  const name2 = req.body["pet"];
  var bandname = name + name2;
   res.send(`<h1>Your NickName is:</h1><p>${bandname}</p>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
