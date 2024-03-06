
 require('dotenv').config()
const express = require('express');
const path = require('path')
const app = express();
//require db
const routes = require('./routes.js')
const { pool } = require('./db')
const bp = require('body-parser')
const indexFile = `${__dirname}/views/index.html`




// middleware
// app.use (express.static (path.join (__ dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(express.static('public'))


routes(app,pool)



// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
});


