const express = require('express');
const cors = require('cors');
var config = require('config');

require('dotenv').config();

//Connecting to DB
require('./handler/database');

const app = express();
const PORT = config.get('App.PORT') || 5000;


app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log('Server started on PORT ' + PORT);
    console.log(config.get('App.SECRET_CODE'));
});

app.use('/api', require('./routes'));
