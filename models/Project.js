
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
Underscoreid:String , 


pName:String , 


pdate1:Date , 


pdate2:Date , 


pdate3:Date 



})

module.exports = {
  Project : mongoose.model('project', projectSchema),
}

