
/*
 * GET users listing.
 */

var mydata={1:'lib',2:'moi'};
exports.list = function(req, res){
  res.send(mydata);
};

exports.userdetail = function(req, res){
  res.send(mydata[1]);
};