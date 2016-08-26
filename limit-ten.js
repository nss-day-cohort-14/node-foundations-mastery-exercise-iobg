let {Transform}=require('stream');
let limiter=Transform();

let i=0;
limiter._transform=(buffer,_,cb)=>{
	if(i<10){
		console.log(buffer.toString());
		cb()
		i++;
		}
}

	


module.exports=limiter;
