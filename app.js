const express = require('express');
const db = require('./database/db');
const app = express();
const routes = require('./routes/authRoutes');
db.database();

// middleware
app.use(express.static('public'));
app.use(express.json());
// view engine
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(routes);

app.listen(3000, () => { console.log('Up and running.')});