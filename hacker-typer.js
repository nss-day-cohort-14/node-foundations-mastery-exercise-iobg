let {Transform}=require('stream');
let hackType=Transform();
allCharArray=[]
let letterCount=1;
hackType._transform=(buffer,_,cb)=>{
	buffer.toString().split('').forEach((letter)=>{
		letterCount++;
		setTimeout(()=>{
			process.stdout.write(letter);
		},50*letterCount);	
	});
	cb()
}

module.exports=hackType;
