let express = require('express');
let app = express();

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('I do not want quotes!'));

app.listen(port, function () {
    console.log("Running test-service-2 on port " + port);
});
