import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views")); 
const today = new Date();
const day = today.getDay();

let type = "a weekday";
let adv = "it's time to work hard";

if (day === 0 || day === 6) {
  type = "the weekend";
  adv = "it's time to have some fun";
}

app.get("/", (req, res) => {
  res.render("index", {
    dtype: type,
    advice: adv,
  });
});

app.listen(3000);
