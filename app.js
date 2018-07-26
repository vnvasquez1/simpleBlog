var express=require('express'),
bodyParser =require('body-parser'),
methodOverride=require('method-override'),
path       =require('path'),
routesApi  =require('./app_api/routes/index'),
routes     =require('./app_server/routes/index'),
app        =express();

app.set("views",path.join(__dirname,'app_server','views'));
app.set("view engine","ejs");

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',routesApi);
app.use('/',routes);



const port=3000;

app.listen(port,()=>console.log(`server started on port ${port} @ ${Date()}`));
