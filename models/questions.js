var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  "question": String,
  "answers" :[String],
  "correctAnswer": String,
  },{
  collection: 'Questions'
});

var Question = mongoose.model('Questions', QuestionSchema);
module.exports = Question;
