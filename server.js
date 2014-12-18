var express = require('express')

var app = express();

app.use(express.static(__dirname));
        
        
var port = process.env.PORT || 9999
        
app.listen(port, function(){
    console.log('listening to port ' + port)
})