const express = require('express');
const morgan = require('morgan');
var path = require('path');
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({});

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
// Templates engine
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
