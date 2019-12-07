const express = require('express');
const hbs = require('hbs');
const middlewares = require('./middlewares/appMiddleware');
const app = express();


app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');


app.use(middlewares.logger);
app.use(express.static(__dirname+'/static'));

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/projects', (req,res) => {
    res.render('projectList');
});

app.get('/blogs', (req,res) => {
    res.render('blog');
});

app.get('/project-detail', (req,res) => {
    res.render('projectDetail');
});


app.use(middlewares.notFound);
app.use(middlewares.handleError);

app.listen(3000, ()=> console.log('Server running on port 3000'));