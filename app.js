const express = require('express');

const urlRoute = require('./routes/url');

const app = express();

app.use(express.json());

app.use(urlRoute);

app.listen(3000, (err) => {
    console.log('Server is running on port 3000');
});