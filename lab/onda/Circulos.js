class Circulos{
	
	constructor(args = {}){

		this.vf = [0,0,0];
		this.ondas = [];
		this.ri = 1;
		this.rf = 300;
		this.nondas = 1000;
		this.stp = 0.1;
		this.or = 0;
		this.separacion = 6;

	}

	
	setin(args){

		this.vf = args.vf;
		var onda = new Circulo();
		onda.setin({vf : this.vf , o : 0.02});
		this.ondas.push(onda);
	}


	update(){

		//console.log(this.ondas[0]);
		for ( var i = 0 ; i < this.ondas.length ; i++ )
		{
			var ond = this.ondas[i];
			ond.update();

		
			if ( this.ondas.length == i+1)
			{
				var lond = this.ondas[this.or];
				
				if ( lond.r > this.separacion)
				{
					if( this.ondas.length < this.nondas)
					{

					var onda1 = new Circulo();
					var opa = Math.abs(Math.sin(this.stp));
					onda1.setin({vf : this.vf , o : opa} );
					this.ondas.push(onda1);

					this.stp+=0.3;
					this.or++ ;

					}
					//ondan++ ;while ondan < nondas
				}
			}
			
		}

	}
}