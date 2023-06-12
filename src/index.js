const express = require('express');
const morgan = require('morgan');
var path = require('path');
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({});
const app = express();
const port = 3000;

const route = require('./routes');

// HTTP logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Templates engine
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
