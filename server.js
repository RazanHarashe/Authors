const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authorRoutes = require('./servers/routers/author.routes');
const app= express();
const port=8000;
require('./servers/config/mongoose.config');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authorRoutes);
app.listen(port,()=>
    console.log(`listening to port ${port}`)
)