const express = require('express');
const app = express();
const path = require('path');

// Set view engine
app.set('view engine', 'ejs');

// Set the static folder
app.use(express.static('Public'));

// app.use(express.static(path.join(__dirname, 'Public')));

// Route
app.get('/', (req, res) => {
    res.render('index');  // Only 'index', no "./" and no ".ejs"
});

// registration
app.get('/reg', (req, res) => {
    res.render('reg');  // Only 'index', no "./" and no ".ejs"
});


app.get('/contact', (req, res) => {
    res.render('contact');  // Only 'index', no "./" and no ".ejs"
});

app.get('/about', (req, res) => {
    res.render('about');  // Only 'index', no "./" and no ".ejs"
});

app.get('/agent', (req, res) => {
    res.render('property-agent');  // Only 'index', no "./" and no ".ejs"
});

app.get('/list', (req, res) => {
    res.render('property-list');  // Only 'index', no "./" and no ".ejs"
});

app.get('/type', (req, res) => {
    res.render('property-type');  // Only 'index', no "./" and no ".ejs"
});

app.get('/test', (req, res) => {
    res.render('testimonial');  // Only 'index', no "./" and no ".ejs"
});

app.get('/add', (req, res) => {
    res.render('add_house');  // Only 'index', no "./" and no ".ejs"
});



;


app.listen(5555, () => {
    console.log('Running on http://localhost:5555');
});
