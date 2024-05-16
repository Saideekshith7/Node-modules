let http=require('http');
let fs=require('fs');

student=[
    {id:1,name:"abc",rollNo:12},
    {id:2,name:"lmn",rollNo:13},
    {id:3,name:"xyz",rollNo:19}
]
let server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url ==='/'){
        res.write("HEllo cvr!!");
        res.end();
    }
    else if(req.url==='/student'){
        res.write(JSON.stringify(student));
        res.end();
    }
    else if(req.url=== '/index.html'){
        fs.readFile("./index.html","utf-8",(err,data)=>{
            if(err){
                console.log(err);
                }
                else{
            res.write(data);
            res.end();
                }
        });
    }
    else{
        res.write("Invalid request");
        res.end();
    }
})

server.listen(3000);