let fs = new require('fs');
fs.readFile('./text1.txt','utf8',function(err,data){
    let da1 = data;
    fs.readFile('./text2.txt','utf8',function(err,data){
        let da2 = data;
        fs.writeFile('text1.txt',`${da1}${da2}`,function(){console.log('完成')})
    })
})