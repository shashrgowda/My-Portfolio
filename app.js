const express = require('express');
const hbs = require('hbs');
const middlewares = require('./middlewares/appMiddleware');
const routes = require('./routes/index');
const app = express();


app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');


app.use(middlewares.logger);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+'/static'));

app.get('/', routes.index);
app.get('/projects', routes.projects);
app.get('/blogs', routes.blogs);
app.get('/project-detail', routes.projectList);
app.get('/contact', routes.contact);
app.post('/contact', routes.doContact);


app.use(middlewares.notFound);
app.use(middlewares.handleError);

app.listen(3000, ()=> console.log('Server running on port 3000'));