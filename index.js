import express, { json, response } from "express";
import 'dotenv/config'

const app = express();
console.log(process.env.simplicateApiKey);
console.log(process.env.simplicateApiSecret);

const baceUrl = 'https://demofdnd.simplicate.nl/api/v2/crm/'

const organizations = `/organizations`
const persons = `/persons`

const apiOrganizations = await fetch(baceUrl + organizations).then((response) => response.json())
const apiPersons = await fetch(baceUrl + persons).then((response) => response.json())


app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.render("index", data);
});

app.set("port", process.env.PORT || 7000);
app.listen(app.get("port"), function () {
  console.log(`application started on http://localhost:${app.get("port")}`);
});

