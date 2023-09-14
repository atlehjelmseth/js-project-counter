let username = 'eltprod';
let password = 's7D3VM1pnFWPQZ795RAq';
let auth = btoa(`${username}:${password}`);
const number = document.querySelector("#counter");
const interval = setInterval(function() {
  nextcomApi();
}, 3000);
let todaysGoal = document.getElementById("goal");
let goalHtml = document.getElementById("todaysgoal");
let todaysales = document.getElementById("todaysales");
let hidden = document.getElementById("hidden");
const add = document.getElementById("btn");
let fireworks = document.querySelector("#canvas");
const vid1 = document.querySelector("#vid1"); 
const pic2 = document.querySelector("#pic2"); 
const pic3 = document.querySelector("#pic3"); 

const options = {

  method: 'GET',

  headers: {

           'Authorization': `Basic ${auth}`
   }

};

const date = new Date();

let currentDate = date.toJSON();
var fullDate = (currentDate.slice(0,10));

console.log(fullDate)

// var filter = "{ \"acceptDate\" : { \"$gte\" : \"" + today.getDate("YYYY-MM-DD") + "/";

// const url = `https://hkmarked.nextcom.no/rest-api/public/v2.0/crm-system/orders?locale=eng&filter=%7B%0A%20%20%20%20%22acceptDate%22%20%3A%20%7B%20%22%24gte%22%20%3A%20%22${fullDate}%22%20%7D%2C%0A%20%20%20%20%22statusId%22%20%3A%20%7B%22%24equals%22%20%3A%202%7D%0A%7D&offset=0&limit=200`;
// const url = `https://hkmarked.nextcom.no/rest-api/public/v2.0/crm-system/orders?locale=eng&filter=%7B%0A%20%20%20%20%22acceptDate%22%20%3A%20%7B%20%22%24gte%22%20%3A%20%22${fullDate}%22%20%7D%2C%0A%20%20%20%20%22statusId%22%20%3A%20%7B%22%24gte%22%20%3A%202%7D%2C%0A%20%20%20%20%22statusId%22%20%3A%20%7B%22%24lte%22%20%3A%2029%7D%0A%7D&offset=0&limit=200`;
// const url = `https://hkmarked.nextcom.no/rest-api/public/v2.0/crm-system/orders?locale=eng&filter=%7B%20%20%20%20%20%22acceptDate%22%20%3A%20%7B%20%22%24gte%22%20%3A%20%22${fullDate}%22%20%7D%2C%20%20%20%20%20%22statusId%22%20%3A%20%7B%22%24gte%22%20%3A%202%7D%2C%20%20%20%20%20%22statusId%22%20%3A%20%7B%22%24lte%22%20%3A%2014%7D%20%7D&offset=0&limit=200`;
const url = `https://hkmarked.nextcom.no/rest-api/public/v2.0/crm-system/orders?locale=eng&filter=%7B%20%20%20%20%20%22acceptDate%22%20%3A%20%7B%20%22%24gte%22%20%3A%20%22${fullDate}%22%20%7D%2C%20%20%20%20%20%22statusId%22%20%3A%20%7B%22%24gte%22%20%3A%202%7D%2C%20%20%20%20%20%22statusId%22%20%3A%20%7B%22%24lte%22%20%3A%2020%7D%20%7D&offset=0&limit=200`;

// const url = "https://hkmarked.nextcom.no/rest-api/public/v2.0/crm-system/orders?locale=eng&filter=" + JSON.stringify(filter) + "offset=0&limit=200";
const proxy = "https://noroffcors.onrender.com/";


const corsFix = proxy + url;


async function nextcomApi() {

  try {const response = await fetch(corsFix,options);
       const resultsSpec = await response.json();


      // console.log(resultsSpec)
      console.log(resultsSpec.totalCount)
      let globalString = localStorage.getItem('salesGoalLocal');
      let globalNumber = JSON.parse(globalString);
      number.innerHTML = -globalNumber + resultsSpec.totalCount;


    let goalString = localStorage.getItem('salesGoalLocal');
    let goalFinal = JSON.parse(goalString);
    goalHtml.innerHTML = '';
    todaysales.innerHTML = '';
    goalHtml.innerHTML += `
    <p>${goalFinal}<p>
    `;
    todaysales.innerHTML += `
    <p>${resultsSpec.totalCount}<p>
    `;



    let count = -globalNumber + resultsSpec.totalCount;

    console.log (count)


    if (count > 0) {
      counter.style.color = 'darkgreen',
      canvas.style.display = "block"

    }
    if (count < 0) {
      counter.style.color = 'red',
      canvas.style.display = "none"
    }
      if (count === 0) {
      counter.style.color = 'lightgreen',
      fireworks.style.display = "block"
    }

    if (count === -10 || count === -9 || count === -8 || count === -7 || count === -6 || count === -5 || count === -4 || count === -3 || count === -2 || count === -1) {
      counter.style.color = 'orange',
      canvas.style.display = "none"
    }

    if (count > 9 && count < 20) {
      counter.style.color = 'lightgreen',
      fireworks.style.display = "block"
      vid1.style.display = "block"
    }
    else {
      vid1.style.display = "none"
    }
    if (count > 4 && count < 10) {
      counter.style.color = 'lightgreen',
      fireworks.style.display = "block",
      pic2.style.display = "block"
    }
    else {
      pic2.style.display = "none"
    }
    // if (count > -100 && count < -5) {
    //   pic3.style.display = "block"
    // }
    // else {
    //   pic3.style.display = "none"
    // }
    if (count > -6 && count < 0) {
      counter.style.color = 'orange'
    }
    else {
      pic4.style.display = "none"
    }
      }catch (error) {
        console.log("error")
    }
   }

  nextcomApi()

  add.onclick = function (ev) {
    ev.preventDefault()
    const goal = todaysGoal.value;

    localStorage.setItem('salesGoalLocal', JSON.stringify(goal))

    nextcomApi()
  }


let myDocument = document.documentElement;
  let fullscreen = document.getElementById("btnFull");

  fullscreen.addEventListener("click", ()=> {
    if(fullscreen.textContent == "Fullskjerm") {
      if(myDocument.requestFullscreen){
        myDocument.requestFullscreen();
      }
      else if(myDocument.msRequestFullscreen) {
        myDocument.msRequestFullscreen();
      }
      else if(myDocument.mozRequestFullscreen){
        myDocument.mozRequestFullscreen();
      }
      else if(myDocument.webkitRequestFullscreen){
        myDocument.webkitRequestFullscreen();
      }
      hidden.style.display = "none";
      fullscreen.textContent = "Lukk"
    }
    else {

      if(document.exitFullscreen){
        document.exitFullscreen();
      }
      else if(msexitFullscreen) {
        document.msexitFullscreen();
      }
      else if(mozexitFullscreen) {
        document.mozexitFullscreen();
      }
      else if(webkitexitFullscreen) {
        document.webkitexitFullscreen();
      }
      hidden.style.display = "block";
      fullscreen.textContent = "Fullskjerm";
    }

  });