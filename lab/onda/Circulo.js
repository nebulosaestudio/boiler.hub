class Circulo{
	
	constructor(args = {}){

		this.vf = [0,0,0];
		this.ws = 1;
		this.cs = 'rgba(10,10,10,0.2)';
		this.o = 0.1;
		this.ri = 0.1;
		this.rf = 2000;
		this.r = this.ri;
		this.inc_r = 3;
		this.stp = 0.1;
	}
	
	set_r(inc){
		this.r += inc;
	}
	set_cs(color){
		this.cs = color;
		//createRadialGradient(x1, y1, r1, x2, y2, r2)
    	//Creates a radial gradient. The parameters represent two circles, one with its center at (x1, y1) and a radius of r1, and the other with its center at (x2, y2) with a radius of r2.
		var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
	}
	setin(args){

		this.vf = args.vf;
		this.o = args.o;
		console.log(this.vf[0],this.o);
	}

	draw(){

		ctx.beginPath();
     	ctx.arc(this.vf[0], this.vf[1], this.r, 0, Math.PI * 2, true);
       	ctx.closePath();
       	ctx.lineWidth = this.ws;
       	
       //	console.log('a',this.o);
       	this.cs = 'rgba(10,10,10,'+this.o+')';

       	ctx.strokeStyle = this.cs;
       	ctx.stroke();

       	this.stp += 1;

	}

	update(){

	
		if ( this.r < this.rf ) {

				this.set_r(this.inc_r);
				this.o -= 0.009;
			//	this.ws += 0.01;
				this.draw();
		}

	}
}