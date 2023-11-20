	import Warp from './Warp.js';


	var H = window.innerHeight;
	var W = window.innerWidth;


			//console.log("d.screen:"+H +":" +W);
			
			

			var H = window.innerHeight;
			var W = window.innerWidth;


			// how to show multiple windows, as warp which can fly?

			//por ahora diseños as image
			let body = gE("mobile-first");
			let warp = gE("wrapper");
			var warp_0 = new Warp("warp",H,W); //["h,W"]
			warp_0.append();
			warp_0.show();


			warp_0.setStyle("width:"+W+"px;height:"+H+"px")

			let contenedor = new Warp("overlay_warp",H,W);
			/*let inner = document.createElement("div");
			*/
			

			//warp_0.elem.innerHTML += "<h1 class=\"txt_sha\"> dada </h1><h2> creative solutions. </h2>";

			console.log(warp_0);
			setAtt("style","width:"+W+"px;height:"+H+"px;",warp);
			
			
			/*
			let act_h1 = document.createElement("h1");
			let act_h2 = document.createElement("h2");

			setAtt("class","txt_sha",act_h1);
			act_h1.innerHTML = 'dada';
			act_h2.innerHTML = 'creative solutions.';
			*/
			//warp.appendChild(act_h1);
