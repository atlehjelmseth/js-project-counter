let username = 'eltprod';
let password = 's7D3VM1pnFWPQZ795RAq';
let auth = btoa(`${username}:${password}`);
const number = document.querySelector("#counter");
const interval = setInterval(function() {
  nextcomApi();
}, 3000);


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
      number.innerHTML = -'127542' + resultsSpec.totalCount;

      }catch (error) {
        console.log("error")
    }
    // setTimeout(nextcomApi(), 15000);
   }

  nextcomApi()

