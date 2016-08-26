let {Transform}=require('stream');
let limiter=Transform();
let i=0;
limiter._transform=(buffer,_,cb)=>{
	if(i<10){
		i++;
		cb(null,`${buffer}\n`)
	}
	else limiter.end()
}

module.exports=limiter;
