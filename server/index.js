const express = require('express');
require('dotenv').config({path: __dirname + '/../.env'});

const app = express();

app.get('/boba', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`))
