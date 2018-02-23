const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/login')
// const session = require('express-session');


const app = express();

//middlewares
app.use( bodyParser.json())
app.use( express.static( __dirname + 'src') );

//endpoints

app.get('/api/login', controller.login);
app.put('/api/register', controller.register)

const port = 3000;
app.listen( port, () => { console.log(`server listening on port ${port}.`);});