const express=require('express');
const app=express();
const port=3000;
// using express to allow us to serve a next.js static site and react app under different routes.
app.use('/',express.static('landing-page/out'));
app.use('/map/*',express.static('map-page/build'));
app.use('/static',express.static('map-page/build/static'));
app.listen(port,()=>console.log('Started on port: '+port));
