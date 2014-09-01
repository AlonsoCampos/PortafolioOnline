var express = require('express');
var router = express.Router();
var _= require('lodash');
var Projects = require('../lib/projects');

/* 
	GET lista los albums disponibles.
	Aqui se toman todos los albums registrados
	y se envian a la vista mediante un objeto 
	llamado albums
 */

/* GET home page. */
router.get('/', function(req, res) {
	Projects.find({}, function(err,projects){
  	if (err) {
  		return res.send(err);
  	}
  	res.render('index',{title: 'Héctor Campos Alonso',projects:projects});
  });

});

router.get('/detalles/:project_id',function(req,res){
	Projects.findById(req.params.project_id, function(err,project){
		res.render('detalles',{project:project});
	});
});

router.get('/acerca-de',function(req,res){
	res.render('acerca');
});



router.get('/add',function(req,res){
	res.render('add');
});

router.post('/', function(req,res){
	//debug('creating new artist');
	var title = req.body.title;
	var descriptionshorte = req.body.descriptionshorte;
	var description = req.body.description;
	var link = req.body.link;
	var tecnologie = req.body.tecnologie;
	var plataform = req.body.plataform;
	var developer = req.body.developer;
	var imagen = req.body.imagen;
	var icon = req.body.icon;

	console.log(req.body);
	if(!_.isUndefined(title) 
		|| title !=='' 
		|| descriptionshorte !=='' 
		||  description !==''
		||  link !==''
		||  tecnologie !==''
		||  plataform !==''
		||  developer !==''
		||  imagen !==''
		||  icon !==''
		){
		var project = new Projects(
			{
				title:title,
				descriptionshorte: descriptionshorte,
				description:description,
				link:link,
				tecnologie:tecnologie,
				plataform:plataform,
				developer:developer,
				imagen:imagen,
				icon:icon,
			});

		project.save(function(err,project){
			if(err){
				return res.send(err);
			}
			res.send(project.title + ' Projecto Agregado');
		});	
	}else{
		res.send("Por Favor especifique la informacion requerida");
	}
});



module.exports = router;
