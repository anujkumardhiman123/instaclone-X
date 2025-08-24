const express = require('express');
const app = express()


require('./startup/db')();
app.get('/', (req, res) => {
    res.send("hello from server");
})
app.listen(9000);