var app = require('./server/server')

var server = app.listen('8000', function() {
    console.log("server is running on " + server.address().port)
})