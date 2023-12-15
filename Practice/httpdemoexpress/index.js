const http= require("http");
http.createServer(function(req, res){
    console.log(req.url);
   
    switch (req.url) {
        case"/":
        res.write("<h1>My page</h1>")
            break;
            case"/interests":
            res.write("<h1>My interests</h1>")
                break;
        
        default:
            res.write("pahge not found")
            break;
    }
    res.end();
})
.listen(8080)