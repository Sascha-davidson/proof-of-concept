import express, { json, response } from "express";
import "dotenv/config";

const app = express();

const baceUrl = "https://demofdnd.simplicate.nl/api/v2/crm";
const organizations = `/organization`;
const person = `/person`;

var myHeaders = new Headers();
myHeaders.append("Authentication-Key", process.env.simplicateApiKey);
myHeaders.append("Authentication-Secret", process.env.simplicateApiSecret);

var requestGetOptions = {
  method: "GET",
  headers: myHeaders,
};

const apiOrganizations = fetch(baceUrl + organizations, requestGetOptions)
  .then((response) => response.text())
  .then((response) => {
    let json = JSON.parse(response);
    // console.log(json);
  })
  .catch((error) => {
    console.log("error: " + error);
  });

const apiPerson = fetch(baceUrl + person, requestGetOptions)
  .then((response) => response.text())
  .then((response) => {
    let json = JSON.parse(response);
    // console.log(json);
  })
  .catch((error) => {
    console.log("error", error);
  });

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.render("index", { apiOrganizations, apiPerson });
});

app.set("port", process.env.PORT || 7000);
app.listen(app.get("port"), function () {
  console.log(`application started on http://localhost:${app.get("port")}`);
});
