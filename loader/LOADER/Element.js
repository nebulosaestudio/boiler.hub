var ID = 0;

class Element {
/*
/* des : Elem dom, con algun metodo heredado de composite, command, events
*/


	constructor(tag ,  args = { id : 'id' , class : 'class' , style : ''} , vars = { 'width' : '' , 'height' : '' , 'pos' : '' , 'vel' : ' '} ) {

		this.ID = ID++;

		this.type = tag;

		this.vars = vars;

		this.elem = this.createElem(tag);

		this.args = this.setArgs(args);

		this.width = '';

		this.height = '';

		this.pos = [];

		//para modificar comportamiento dinamicamente 

		this.x = 0;

	}

	createElem(tag)
	{
		var  elem = document.createElement(tag);

		return elem;
	}
	
	append2DOM()
	{
		document.body.append(this.elem);
	}

	setArgs(args)	
	{

		this.setId(args.id); // = this.setID();
		this.setClass(args.class);
		this.setStyle(args.style);

		return args;

	}
		/* estos los voy a sacar fuera como extensiones de element
		if ( tag === "span") { this.elem.text = vars.text ; this.elem.innerHTML = vars.text; }
		if ( tag === "canvas") { this.elem.width = vars.width ; this.elem.height = vars.height;}
		if ( tag === "img") { this.elem.src= vars.URL;}
		// img queda la duda si queremos pintarlo habra q añadir el evento onload
		*/
		
	

	setAttribute(att,value)
	{
		var at = document.createAttribute(attr);
		at.value = value;
		this.elem.setAttributeNode(at);	 
	}

	setId(id)
	{
		this.elem.setAttribute('id',id);
	}

	setClass(clase)
	{
		this.elem.setAttribute('class',clase);
	}

	setStyle(style)
	{
		this.elem.setAttribute('style',style);
	}

	addId(id)
	{	
		if ( !this.elem.hasAttribute('id')) { 
			this.elem.setAttribute('id',id); // this.setId()
		 } else {	
			var ids = this.elem.getAttribute('ids') 
			ids += ' ' + id ;
			this.elem.setAttribute('id',ids);
		} 
	}
	addClass(clas)
	{	
		if ( !this.elem.hasAttribute('class')) { 
			this.elem.setAttribute('class',id);
		 } else {	
			var classs = this.elem.getAttribute('class') ;
			classs += ' ' + clas ;
			this.elem.setAttribute('id',classs);
		} 
	}
	addStyle(style)
	{
		if ( !this.elem.hasAttribute('style')) { 
			this.elem.setAttribute('style',style);
		} else {
			var styles = this.elem.getAttribute('style') ;
			styles += ';' + style;
			this.element.setAttribute('style',styles); 
		}
	}


	createDiv(id,H,W)
	{
		var warp = document.createElement("div");
		setAtt("id",id,warp);
		setAtt("class","warp evn01",warp);
		setAtt("style","width:"+W+"px;height:"+H+"px",warp);
		
	return warp;

	}

	show()
	{
		this.elem.style.display = "block";	
		//this.isSHOW = true;	
	}

	hide()
	{
		this.elem.style.display = "none";
		this.isSHOW = false;	
	}
	addEvent(evnt)
	{
		this.elem.addEventListener('pointerdown',next,true);
	}
	
}


class Imagen extends Element{

	constructor(URL,args)
	{
		super("img",args);

		this.img = this.createImage(URL);

		this.elem = this.img;

	}  	 	
    createImage(URL) 	
    {
    	var img = new Image();
		img.src = URL;
		return img;
    }
	load(url)
	{
		
		var image;
		loadIMG_promise(url).then(
         	 				img => this.img = img  );  
	}

	defineComportamientoUpdate(fun)
	{
		this.update = function() { fun() }
	}
	//como defino el comportamiento del elemento en ciertas acciones
	update()
	{
		
	}
	
}

class Text extends Element{

	constructor(txt,args)
	{
		super("h1",args);

		this.txt = this.setText(txt);

	}  	 	

    setText(txt) 	
    {
    	this.elem.innerHTML = txt;
    }

}



function next()
{
	console.log('next');
}

function loadIMG_promise(URL) {

				return new Promise(function(resolve, reject) {

					var img = new Image();
					img.src = URL;
					img.onload = function() {
					resolve(img);
						}
				});
			}