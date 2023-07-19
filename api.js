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
const add = document.getElementById("btn");



const options = {

  method: 'GET',

  headers: {

           'Authorization': `Basic ${auth}`
   }

};

const url = "https://hkmarked.nextcom.no/rest-api/public/v2.0/crm-system/orders?locale=eng&offset=127000&limit=200";
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

    
    if (count > 0)
      counter.style.color = 'darkgreen'
    if (count < 0)
      counter.style.color = 'red'

      if (count === 0)
      counter.style.color = 'lightgreen'

    if (count === -10 || count === -9 || count === -8 || count === -7 || count === -6 || count === -5 || count === -4 || count === -3 || count === -2 || count === -1)
      counter.style.color = 'orange'

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

      fullscreen.textContent = "Fullskjerm";
    }

    /* 2:47 on movie */
  });