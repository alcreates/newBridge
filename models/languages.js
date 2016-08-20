var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LanguageSchema = new Schema({
  "language": String,
  "code" :String,
  
  },{
  collection: 'Languages'
});

var Language = mongoose.model('Languages', LanguageSchema);
module.exports = Language;
