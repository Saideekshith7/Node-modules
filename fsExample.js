let fs=require('fs');
fs.readFile("./read.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
        }else{
            fs.writeFile("./writeMe.txt",data,function(err){
                if(err){
                    console.log(err);
                    }
            })
        }
});