var mongoose = require( 'mongoose' );

exports.index=function(req,res){
                  res.render('index',{session:req.session});
              }

exports.techStack=function(req,res){
                                res.render('techStack',{session:req.session});
  }

exports.home=function(req,res){
             Story.find({}, function(err,stories){
                  res.render('home',{stories:stories});
              });
}

exports.register=function(req,res){
  res.render('register');
                  }

exports.login=function(req,res){
                    res.render('login');
                                    }
