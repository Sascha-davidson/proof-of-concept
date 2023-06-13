const baceUrl = "https://demofdnd.simplicate.nl/api/v2/crm";
const organizations = `/organization`;
const person = `/person`;

var myHeaders = new Headers();
myHeaders.append("Authentication-Key", "gS7sibGSth6GQfDkGdLx9AU8T3cj1DoB");
myHeaders.append("Authentication-Secret", "eiZOT04oWOcQUg2XEzkiI42XyvNInifc");

var requestGetOptions = {
  method: "GET",
  headers: myHeaders,
};

const apiOrganizations = fetch(baceUrl + organizations, requestGetOptions)
  .then((response) => response.text())
  .then((response) => {
    let json = JSON.parse(response);
    console.log(json);
  })
  .catch((error) => {
    console.log("error: " + error);
  });

const apiperson = fetch(baceUrl + person, requestGetOptions)
  .then((response) => response.text())
  .then((response) => {
    let json = JSON.parse(response);
    console.log(json);
  })
  .catch((error) => {
    console.log("error", error);
  });
