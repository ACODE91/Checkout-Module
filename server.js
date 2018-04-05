const express = require('express');
const app = express();
const port = process.env.PORT || 4022
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './src' + '/client' + '/public')));
//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(4022, () => console.log(`listening on port ${port}!`))