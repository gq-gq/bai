let http = new require('http');
let fs = new require('fs');
let server = http.createServer(function(req,res){
    if(req.url == '/index.html'){
        fs.readFile('index.html','utf-8',function(err,data){
            if(err){
                // return console.log(err)
            }
            res.end(data);
        })
    }
})
server.listen(8090,function(){console.log('成功')})