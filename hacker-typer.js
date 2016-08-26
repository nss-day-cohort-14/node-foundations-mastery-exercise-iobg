let {Transform}=require('stream');
let hackType=Transform();

hackType._transform=(buffer,_,cb)=>{
	cb();
}

module.exports=hackType;
