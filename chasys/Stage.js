/* Stage.js */
/* create a canvas with user device size */

class Stage{

		constructor(){
			 this.canvas = this.setCanvas();

		}

		setCanvas()
		{
			if ( document.getElementById("canvas"))
			{
				var canvas_elem = screen.getElementById("canvas");
				console.log ( elem );
			}else{

				var canvas_elem = screen.createElement("canvas");
				canvas_elem.id = "stage_canvas";
				
			}
			canvas_elem.width = client.availWidth;
			canvas_elem.height = client.availHeight;
		

		return canvas_elem;
		}
}