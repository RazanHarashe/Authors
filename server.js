const express = require('express');
const cors = require('cors');
const app= express();
const port=8000;
require('./servers/config/mongoose.config');

app.use(cors());
app.listen(port,()=>
    console.log(`listening to port ${port}`)
)