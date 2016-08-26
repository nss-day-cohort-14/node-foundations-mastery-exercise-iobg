let {createReadStream}=require('fs');
let limitTen=require('./limit-ten')
let es =require('event-stream');
let {inspect}=require('util');
let data='';
let [,,arg]=process.argv;
let readStream=createReadStream('/usr/share/dict/words');

readStream
.pipe(es.split())                  
    .pipe(es.map(function (data, cb) {
    	if(data.substring(0,arg.length)===arg){
    		cb(null, data)
    	}
    		else cb();
       }))
    	.pipe(limitTen)
    		.pipe(process.stdout)             


