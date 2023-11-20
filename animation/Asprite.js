/**
*	Asprite: Animated sprite, dada una secuencia de imagenes crear una animación.
*
*
*/
class Asprite
{

	constructor(src,urls){

		this.src = src;
		this.urls = urls;
		this.len = 0;
		this.stp = 0;
		this.speed = 1;
		this.animation = [];
		this.act_image;

		this.FINISH = new Event('FINISED');
		this.init = this._init();

		this.COMPLETED = false;
		this.PRESS = false;
		this.LIVE = true;

		this.LOOP = true;
		this.PINGPONG = false;

		this.BACK = false;
		this.FORW = true;
		

		this.warp = "warp";
	}


	_init()
	{
		this.len = this.urls.length;
		for( var i = 0 ; i<this.urls.length ; i++)
		{
			var img = new Image()
			img.src = this.src + this.urls[i];
			img.onload = this.addImage(img);
		}
		//console.log("INIT",this.anim,this.urls.length);
	}
	addImage(img)
	{
		//console.log("IMG",img);
		this.animation.push(img);
	}

	update()
	{
		if ( this.FORW )
		{
			this.stp += this.speed;
		}else{
			this.stp -= this.speed;
		}
	
		this.show();

		if( this.stp > this.len)
		{
			//dispatchEvent({ action : this.FINISH , obj : this });
			this.COMPLETED = true;
		}
		
		if ( this.LOOP )
		{
			if ( this.index < this.len-1 ) 
			{
				this.index = 0;			
			} 	
		}
	
		if ( this.PINGPONG)
		{
			if (this.FORW && (this.index == this.len-1) ) 
			{
				this.FORW = false;
				this.BACK = true;		
			} 
			if ( this.BACK && ( this.index == 0 ) )
			{
				this.BACK = false;
				this.FORW = true;
			}
		}
				/* //event finalized
				dispatchEvent(this.FINISH);
				//this.index = 0;
				this.hide(); */	
	}
	
	show()
	{
		this.index = Math.floor(this.stp % this.len);
		this.act_image = this.animation[this.index]
		document.getElementById(this.warp).innerHTML = "";
		document.getElementById(this.warp).appendChild(this.act_image);
	}

	drawInCTX(img)
	{
		this.act_image = img;
		//console.log("image",img);
		ctx.drawImage(this.act_image,0,0);
	}
	drawInCTXcoord(x,y)
	{
		this.index = Math.floor(this.stp % this.len);
		//console.log("INDEX:",this.index," i:",this.stp);
		ctx.drawImage(this.animation[this.index],x,y);

		
	}
	hide()
	{
		document.getElementById(this.warp).innerHTML = "";
	}
	stop()
	{
		
	}

}