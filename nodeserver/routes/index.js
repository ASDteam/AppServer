//var dbplayer = require('../DBlayer/dbplayer');
/*
 * GET home page.
 */
 
var mongoose = require('mongoose');
//var jsonobject = require('jsonobject');
//Database

mongoose.connect('mongodb://localhost/my_database');

var Player= new mongoose.Schema ({
	name: { type: String, required:true},
	club: {type:String},
	comment: {type:String}
});



//var Schema =mongoose.Schema;
var PlayerModel = mongoose.model('Player',Player);

//var goh=new PlayerModel({name:'salhiou', club : 'amadeus', comment : 'DC'});
//goh.save(function(err){
//	  if(!err){
//		  return console.log('created');
//	  } else{
//		  return console.log(err);
//	  }  
//  });

exports.index = function(req, res){
	var dbplayers=PlayerModel.find(function(err,dbplayers){
		if(!err){
			console.log(dbplayers);
			res.send(dbplayers);
			//res.render('index', { title: 'Express' , mytest: 'hello',players:dbplayers});
		} else {
		return ('error');
	  }  
  });
};