var ProyectoModel = Backbone.Model.extend({

	initialize: function()
	{
		console.log('SE ha creado una nueva instancia');

		this.on('change',function(){
			console.log('Ha cambiado');
		});


	},
	validate:function(atributos)
	{
		if (!atributos.titulo) {
			console.log('Debe de tener Titulo');
		};
	},
	defaults:
	{
		lenguaje:'Djnago',
	}
});


/*
Creacion de Modelos

http://www.youtube.com/watch?v=fvc_IRQlPpw

Creacion de Modelo

var proyecto = new Proyecto ({
	titulo		:'Yoshi',
	autor		:'Alonso',
	lenguaje	:'Java'
});

Metodos GET 

-> proyecto.get('titulo')  <-

Metodos SET 

-> proyecto.set('titulo', 'Verde Yoshi')  <-

-> 
	proyecto.set ({
		titulo:'Yoshi',
		autor:'Yoshi',
	});  
<-

Metodo initialize

var Proyecto = Backbone.Model.extend({

	initialize: function()
	{
		console.log('SE ha creado una nueva instancia');	
	}
});

Metodo defaults
Por defecto me crea esos valores para el modelo
cuando no son pasados o estan vacios

var Proyecto = Backbone.Model.extend({

	initialize: function()
	{
		console.log('SE ha creado una nueva instancia');	
	},
	defaults:
	{
		lenguaje:'Djnago'
	}
});

Eventos OnChange
Me permite ver mostrar o lanzar un evento 
cuando ha cambiado el modelo

var Proyecto = Backbone.Model.extend({

	initialize: function()
	{
		console.log('SE ha creado una nueva instancia');

		this.on('change',function(){
			console.log('Ha cambiado');
		});


	},
	defaults:
	{
		lenguaje:'Djnago',
	}
});

Validaciones en los Modelos

Test ---> 
var proyecto = new Proyecto();

proyecto.set({autor:'verde'},{validate:true});

-----> Validacion en Modelo 
var Proyecto = Backbone.Model.extend({

	initialize: function()
	{
		console.log('SE ha creado una nueva instancia');

		this.on('change',function(){
			console.log('Ha cambiado');
		});


	},
	validate:function(atributos)
	{
		if (!atributos.titulo) {
			console.log('Debe de tener Titulo');
		};
	},
	defaults:
	{
		lenguaje:'Djnago',
	}
});



*/