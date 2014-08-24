var dbplayer = require('../DBlayer/dbplayer');

/*
 * GET players listing.
 */


exports.get_player = function(req, res){
  res.send(mydata[1]);
};

//exports.create_player = function(req, res){
//	  var player;
//	  player=new PlayerModel({
//		 name:req. 
//	  });
//	  
//	};


exports.create_lib = function(req, res){
	  var lib=new dbplayer.PlayerModel({
		 name:'Libellule',
		 comment:'Je t\'aime',
		 club:'Mon Coeur'
	  });
	  lib.save(function(err){
		  if(!err){
			  return console.log('created');
		  } else{
			  return console.log(err);
		  }  
	  });
	  return res.send(lib);
	  //return res.redirect('index', { title: 'Express' , mytest: 'hello', players:dbplayers});
	};
	