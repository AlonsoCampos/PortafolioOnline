var express = require('express');
var router = express.Router();
var _= require('lodash');
var Projects = require('../lib/projects');
var Users = require('../lib/users');

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

router.get('/acerca-de', function(req, res) {
	Users.find({}, function(err,users){
  	if (err) {
  		return res.send(err);
  	}
  	res.render('acerca',{title: 'Héctor Campos Alonso',users:users});
  });

});

router.get('/detalles/:project_id',function(req,res){
	Projects.findById(req.params.project_id, function(err,project){
		res.render('detalles',{project:project});
	});
});


router.get('/add',function(req,res){
	res.render('add');
});

router.get('/registro',function(req,res){
	res.render('registro');
});


router.post('/registro',function(req,res){
	//debug('creating new artist');
	var name = req.body.name;
	var surnames = req.body.surnames;
	var biography = req.body.biography;
	var portafolio = req.body.portafolio;
	var nationality = req.body.nationality;
	var email = req.body.email;
	var phone = req.body.phone;
	var skills = req.body.skills;
	var certifications = req.body.certifications;
	var imagen = req.body.imagen;

	console.log(req.body);
	if(!_.isUndefined(name) 
		|| 	name !=='' 
		|| 	surnames !=='' 
		||  biography !==''
		||  portafolio !==''
		||  certifications !==''
		||  nationality !==''
		||  email !==''
		||  phone !==''
		||  skills !==''
		||  imagen !==''
		){
		var users = new Users(
			{
				name:name,
				surnames: surnames,
				biography:biography,
				portafolio:portafolio,
				nationality:nationality,
				email:email,
				skills:skills,
				certifications:certifications,
				phone:phone,
				imagen:imagen,
			});

		users.save(function(err,users){
			if(err){
				return res.send(err);
			}
			res.send(users.name + ' Usuario Agregado');
		});	
	}else{
		res.send("Por Favor especifique la informacion requerida");
	}
});




router.post('/add', function(req,res){
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
