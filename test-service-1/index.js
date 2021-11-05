let express = require('express');
let app = express();

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Do you want quotes?'));

app.listen(port, function () {
    console.log("Running test-service-1 on port " + port);
});
