/* 

el loader contendra metodos y propiedades para cargar diferentes tipos de elementos

primeramente voy a cargar un archivo json con los elementos que quiero cargar

*/

/* A. LOAD JSON 

@param : json.url

return obj_json

*/

function getJSON(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    //devuelve un objeto json
    req.responseType = 'json';
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

function loadData(res)
{
	console.log(res);
	var urls = res.URLS; //TODO if type = img ? getURL

	var promesas = [];

	console.log(urls);
	 for (var i = 0 ; i < urls.length ; i++)
		 {
            const promise = new Promise (( resolve , reject ) => 
            {
              var img = new Image();
              img.src = urls[i];
              img.onload = function(){

                resolve(img);

              }
              img.onerror = function(e){

                reject(e);
              }

            });
            console.log(promise);
           promesas.push(promise);
         }

	 Promise.all(promesas).then(

            values => { 
            
               console.log("VAL",values);
               data.push(values);

          }, reason => {

            console.log("RES",reason);

          });
}
/*
function getJSON(url) {
	return get(url).then(console.log);
  //return get(url).then(JSON.parse);
}
*/