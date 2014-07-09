var ProyectosCollection = Backbone.Collection.extend({
	model:ProyectoView,

	initialize: function()
	{
		console.log('SE ha creado una nueva Coleccion');

		this.on('change',function(){
			console.log('Ha cambiado la Coleccion');
		});

		this.on('add',function(){
			console.log('Ha agregado un elemento a la Coleccion');
		});

		this.on('remove',function(){
			console.log('Ha removido un elemento a la Coleccion');
		});


	},
});


/*
http://www.youtube.com/watch?v=E_x7QTCJQ1c


--> Creacion de Coleccion 
var proyectos = new ProyectosCollection();
proyectos;

--> Collection Add

var a = new Proyecto ({
	titulo		:'Wanagow',
	autor		:'Alonso Campos',
	lenguaje	:'Javascript',
});

var b = new Proyecto ({
	titulo		:'Sistema Central',
	autor		:'Alonso Campos',
	lenguaje	:'PHP',
});

var c = new Proyecto ({
	titulo		:'Lenguajes de Programacion',
	autor		:'Alonso Campos',
	lenguaje	:'Djnago',
});


var proyectos = new ProyectosCollection([a,c]);
proyectos.toJSON();


proyectos.add(b);
proyectos.toJSON();



---> Collection Remove

proyectos.remove(a);
proyectos.remove([b,c]);



---> Retornan modelo en la Vista
		Por medio de 
		---> id
		---> cid
		---> DNI (u otro valor definido)
	--> 
GET <--


var e = new Proyecto ({
	titulo		:'Lenguajes de Programacion',
	autor		:'Alonso Campos',
	lenguaje	:'Djnago',
});


proyectos.add(e);

proyectos.get(6);
proyectosAlonso = proyectos.get('c2');














*/