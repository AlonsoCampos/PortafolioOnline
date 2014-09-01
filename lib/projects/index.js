var db = require('../conection');

var Schema = db.Schema;

var projectSchema = new Schema({
	title:String,
	descriptionshorte:String,
	description:String,
	link:String,
	tecnologie:String,
	plataform:String,
	developer:String,
	imagen:String,
	icon:String,
});

var Project = db.model('Project', projectSchema);

module.exports = Project;
