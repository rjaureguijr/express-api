const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/routes');
const port = 3002;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.error(`Error: ${error}`);
    console.log(`app.js: Server listening on port ${server.address().port}`);
});
