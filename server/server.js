const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = '3200';
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.send("hello from server");
})
app.listen(PORT, function(){
    console.log('Server is running at:'+ PORT);
})
app.post('/new-user', function(req, res){
    res.status(200).send({
        "message": "data recieved"
    });
})