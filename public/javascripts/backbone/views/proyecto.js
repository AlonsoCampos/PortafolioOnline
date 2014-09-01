var ProyectoView = Backbone.View.extend({
	el:'.vista',

	initialize:function(){
		this.render();
	},
	render:function(){
		this.$el.html('<p class="vista color">Yoshi Rosa</p>');
	},

});


/*
Creacion de Vistas
-->
var ProyectoView = new Proyecto();
ProyectoView.$el
Codigo en Consola

Resultado
-->
<span id="id" class="clase">

Codigo en View
-->
var Proyecto = Backbone.View.extend({
	tagName:'span',
	className:'clase',
	id:'id'
});

De esta manera recuperamos 
el contenido que hay en el HTML y Manipularlo

En Modelo
-->
var Proyecto = Backbone.View.extend({
	el:'.vista'
});

En HTML
-->
<p class='vista'></p>

En Consola
-->
var ProyectoView = new Proyecto();
ProyectoView.el


Para modificar la Vista
---> $el --- Nos permite manupular el objeto
como una entidad JQuery


var ProyectoView = new Proyecto();
ProyectoView.$el

--> De esta forma podemos manipular el HTML <--

ProyectoView.$el.text('yoshi verde')




Metodo Render
Este metodo nos permite renderizar la vista y de esta 
forma modificar el HTML inicial

var Proyecto = Backbone.View.extend({
	el:'.vista',
	
	render:function(){
		this.$el.html('<p>Nuevo Texto</p>');
	}	

});

Metodo Render - initialize
Nos permite renderizar la vista cuando se 
cree una nueva vista

--> Consola
var ProyectoView = new Proyecto();
ProyectoView.$el



--> Modelo
var Proyecto = Backbone.View.extend({
	el:'.vista',

	initialize:function(){
		this.render();
	},
	render:function(){
		this.$el.html('<p>Yoshi Rosa</p>');
	}	

});


Eventos se aplican de la siguiente Forma

-> Nombre_de_evento Selector:'Nombre_del_callback' <--

-->HTML
<p class='vista change-color'style='background:red'>
YOSHI</p>

--> View

var Proyecto = Backbone.View.extend({
	el:'.vista',

	initialize:function(){
		this.render();
	},
	render:function(){
		this.$el.html('<p class="vista color">Yoshi Rosa</p>');
	},
	events:{
		'click color':'cambiarColor'
	},

	cambiarColor:function(){
		this.$el.css('background','blue');
	},

});


*/