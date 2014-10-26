/*https://app.compose.io/*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connect('alonso:123@kahana.mongohq.com:10099/backendpro');

module.exports = db;