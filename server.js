

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const http = require('http');
const path = require('path');
const port = process.env.PORT || 3000;
const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'false'}));

app.use('/api',api);

app.use(express.static(path.join(__dirname,'dist')));


var server = http.createServer(app);
app.get('*',(req,res)=>{
    
    res.sendFile(__dirname + '/dist/index.html');
})
server.listen(port,()=>{
    console.log('server started @ '+port)
})





