var express = require('express');
var app = express();


var concat = require('concat-stream');
app.use(function(req, res, next){
  req.pipe(concat(function(data){
    req.body = data;
    next();
  }));
});


app.get("/status", (req,res)=>{ res.send("ready")} )


app.post("/", (req,res)=>{ 
     res.send( req.body );
} )

const PORT = process.env.PORT|| 4444

app.listen(PORT, () => {
        console.log(`API Listening on port ${PORT}`)
    })


