/* 

el loader contendra metodos y propiedades para cargar diferentes tipos de elementos

primeramente voy a cargar un archivo json con los elementos que quiero cargar

*/

/* A. LOAD JSON 

@param : json.url

return obj_json


file_json.json = 
{ "elements" : 
	{"back" :
		{  
		  "tag" 	: "div" , 
		  "id" 		: "id" , 
		  "class" 	: "class" , 
		  "style" 	: "style" , 
		  "width" 	: "w" , 
		  "height" 	: "h" 
		} 
	,
	 "logo" : 
		{ "tag" : "img" ,
		  "id" : "logo" , 
		  "class" : "class" , 
		  "style" : "style" , 
		  "width" : 200 ,
		  "height" : 100 ,
		  "url" : "logo.png" 
		}
	 ,
	 "button" :
		 { "tag" : "txt" ,
		   "id" : "but" , 
		   "class" : "class" , 
		   "style" : "style" , 
		   "width" : 200 , 
		   "height" : 100 , 
		   "txt" : "start" , 
		   "event" : "onpress(next)" 
		}
    }  
}
*/




function loadJSON(url){ //url,method : then( method ) //init();

	loadJSON_ajax_promise(url,'GET').then(

			function(result) {

				console.log(result);
				//LOADED = true;

				return result; //retorna algo al estar encapsulado?

				//return obj 
				var OBJ = JSON.parse(result);

			});


}

function parse(json)
{
	return JSON.parse(json);
}

function loadDATA(url){


	loadJSON_ajax_promise(url, 'GET').then(

			function(result) {
	
				
				/* parse con condiciones 
				JSON.parse(result, function (k, v) {
				    if(k === "") return v;     // if topmost value, return it,
				    return v * 2;              // else return v * 2.
				});   
				*/



			});

}

var loadIMG_promise = (url,method = 'GET', data = '') => {

	return new Promise(function(resolve, reject) {

			var img = new Image();
			img.src = url;
			img.onload = function() {
				resolve(img);
			}
	});
}

var loadJSON_ajax_promise = (url, method, data) => {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.withCredentials = true;
    request.responseType = 'json';
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.status));
        }
      }
    };
    request.onerror = function() {
      reject(Error("Network Error"));
    };
    request.open(method, url, true);
    request.send(data);
  });
}
var loadIMG_promise = (URL) => {

				return new Promise(function(resolve, reject) {

					var img = new Image();
					img.src = URL;
					img.onload = function() {
					resolve(img);
						}
				});
			}



/* b. load elems from obj_json

	//load se entiende por cargar elementos externos.
	//podria añadir crear elementos para los elementos q se crean en tiempo de ejecucion
	// 
*/

function parse(res)
{
	var OBJ = JSON.parse(res);
	return OBJ;
}

var url = './file_json.json';
var OBJ;

loadJSON_ajax_promise(url).then(res => OBJ = parse(res)); // cuando lo halla cargado parsealo
//o
var ret = loadJSON(url);


console.log("retorno encapsulado" , ret);

console.log("OBJ" , OBJ );


var ID = 0;

