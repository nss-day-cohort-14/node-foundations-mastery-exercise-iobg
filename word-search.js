let {createReadStream}=require('fs');
let limitTen=require('./limit-ten')
let es =require('event-stream');
let {inspect}=require('util');
let data='';

let readStream=createReadStream('/usr/share/dict/words');

readStream
.pipe(es.split())                  
    .pipe(es.map(function (data, cb) { /
      cb(null, data) }))
    .pipe(limitTen)             


