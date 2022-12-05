var express = require('express');
var apiMocker = require('connect-api-mocker');
const cors = require('cors');

const port = 8080; 
var app = express();

app.use(cors({ origin: true }));

app.use('/api', apiMocker('mock-api'));
 
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
