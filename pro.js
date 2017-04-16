var express = require("express"),
    app     = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){

    res.render(index.html);

});

app.listen(2000, function(){
    console.log("started");

});
