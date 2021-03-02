const mongoose = require('mongoose');

//Mongoose Config
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/demoapp', {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully Demo App');
}).catch(err => {
    console.log(err);
});