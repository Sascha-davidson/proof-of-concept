import express from "express";
import "dotenv/config";

const app = express();
const baceUrl = "https://demofdnd.simplicate.nl/api/v2";

const crm = `/crm`
const sales = `/sales`
const projects = `/projects`
const hrm = `/hrm`

const organizations = `/organization`;
const person = `/person`;
const sale = `/sales`
const project = `/project`
const absence = `/absence`

const smallLimit = `?limit=5`
const mediumLimit = `?limit=10`
const largeLimit = `?limit=15`
const extraLargeLimit = `?limit=20`

var myHeaders = new Headers();
myHeaders.append("Authentication-Key", process.env.simplicateApiKey);
myHeaders.append("Authentication-Secret", process.env.simplicateApiSecret);

var requestGetOptions = {
  method: "GET",
  headers: myHeaders,
};

let apiOrganizations;
fetch(baceUrl + crm + organizations, requestGetOptions)
  .then((response) => response.text())
  .then((response) => {
    apiOrganizations = JSON.parse(response);
  })
  .catch((error) => {
    console.log("error: " + error);
  });
  
let apiPerson;
fetch(baceUrl + crm + person + mediumLimit, requestGetOptions)
  .then((response) => response.text())
  .then((response) => {
    apiPerson = JSON.parse(response);
  })
  .catch((error) => {
    console.log("error", error);
  });

  let apiAbsence;
  fetch(baceUrl + hrm + absence, requestGetOptions)
  .then((response) => response.text())
  .then((response) => {
    apiAbsence = JSON.parse(response);
    console.log(apiAbsence);
  })
  .catch((error) => {
    console.log("error", error);
  });
  
let apiProjects;
  fetch(baceUrl + projects + project + mediumLimit, requestGetOptions)
  .then((response) => response.text())
  .then((response) => {
    apiProjects = JSON.parse(response);
  })
  .catch((error) => {
    console.log("error", error);
  });

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", function (request, response) {
  response.render("index", { apiPerson, apiProjects, apiAbsence });
});

app.set("port", process.env.PORT || 8001);
app.listen(app.get("port"), function () {
  console.log(`application started on http://localhost:${app.get("port")}`);
});
