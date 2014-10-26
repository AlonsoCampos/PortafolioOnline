var db = require('../conection');

var Schema = db.Schema;

var userSchema = new Schema({
	name:String,
	surnames:String,
	biography:String,
	portafolio:String,
	nationality:String,
	email:String,
	phone:String,
	skills:String,
	certification:String,
	imagen:String,
});

var User = db.model('User', userSchema);

module.exports = User;


