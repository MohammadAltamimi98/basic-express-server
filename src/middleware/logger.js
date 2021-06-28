'use strict';
module.exports=(req,res,next)=>{
  console.log('___REQUEST___',req.method,req.path);
  next();
};