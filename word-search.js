let {createReadStream}=require('fs');
let limitTen=require('./limit-ten')
let hackType=require('./hacker-typer');
let es =require('event-stream');
let [,,arg]=process.argv;
let readStream=createReadStream('/usr/share/dict/words');

readStream
.pipe(es.split())                  
.pipe(es.map(function (data, cb) {
   if(data.toUpperCase().substring(0,arg.length)===arg.toUpperCase()){
    	cb(null, data)
    }
    	else cb();
      }))
 .pipe(limitTen)
 .pipe(hackType)  


