const express = require('express');
const app = express();
const port = 3000;
// using express to allow us to serve a next.js static site, react app and docusaurus under different routes.

setupSite('map-page/build','map');
setupSite('docusaurus-site/build','articles');
setupSite('landing-page/out')//root


app.listen(port, () => console.log('Started on port: ' + port));


function setupSite(folder,path=''){

    app.use(`/${path}`,express.static(folder));

    app.get(path?`/${path}/*`:'*',(req,res)=>{
        res.sendFile(folder+'/index.html',{root:'./'})
    });
}