var GC = function(heading,id){

	this.children = [];
	this.element = '<div id='+ id +'></div>';

	GC.prototype = {

		add : function(child) {
				this.children.push(child);
				this.element.append(child.getElement());
		},
		remove: function(child){
				for ( var node , i = 0 ; node = this.getChild(i); i++){

					if (node == child ) {
						this.children.slice(i,1);
						this.element.detach(child.getElement());
						return true;
					}
					if (node.remove(child)){
						return true;
					}

				}
				return false;
			},
		hide: function(){
				for (var node, i = 0; node = this.getChild(i); i++){
					node.hide();
				}	
				this.element.hide(0);
			},
		show: function(){
				for (var node , i = 0 ; node = this.getChild(i); i++){
					node.show();
				}
				this.element.show(0);	
			},
		getElement:function(){
			return this.element;
		}	
	}
}



//elemento individual (en este caso una imagen)
var GalleryImage = function(src,id){
	this.children = [];
	this.element = $('<img/>').attr('id',id).attr('src',src);
	


//Composite Interfaze to dont override leaf methods
GalleryImage.prototype = {
	add : function(){},
	hide: function(){},
	getChild:function(){},
	hide:function(){
			this.element.hide(0);
	},
	show:function(){
			this.element.show(0);
	},
	getElement:function(){
		return this.element;
	}
}

}