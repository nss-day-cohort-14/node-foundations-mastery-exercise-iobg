let {createReadStream}=require('fs');

let readStream=createReadStream('/usr/share/dict/words');

readStream.pipe(process.stdout);
