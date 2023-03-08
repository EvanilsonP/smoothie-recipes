const express = require('express');
const app = express();
const routes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const db = require('./database/db');
db.database();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(routes);

app.listen(3000, () => { console.log('Up and running.')});