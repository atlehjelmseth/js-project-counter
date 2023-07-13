const api = "https://hkmarked.nextcom.no/rest-api/public/v2.0/crm-system/orders?locale=eng&offset=127000&limit=200";

async function nextcomApi() {
  
  try {const response = await fetch(api);
       const resultsSpec = await response.json();
      
      
      console.log(resultsSpec)

      }catch (error) {
        console.log("error")
    }
   }

  nextcomApi()

// fetch('https://hkmarked.nextcom.no/rest-api/public/v2.0/crm-system/orders?locale=eng&offset=127000&limit=200',{
//   method: 'GET',
//   headers: {
//     'Authorization': 'Basic '+btoa('eltprod:s7D3VM1pnFWPQZ795RAq')
//   },
//   mode: 'cors',
//   cache: 'default',
//   })

//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error))

// let username = 'eltprod';
// let password = 's7D3VM1pnFWPQZ795RAq';
// let auth = btoa(`${username}:${password}`);

// // Authenticate (dummy API)
// fetch('https://hkmarked.nextcom.no/rest-api/public/v2.0/crm-system/orders?locale=eng&offset=127000&limit=200', {
// 	headers: {
// 		'Authorization': `Basic ${auth}`
// 	}
// }).then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	}
// 	throw response;
// }).then(function (data) {
// 	console.log(data);
// }).catch(function (error) {
// 	console.warn(error);
// });