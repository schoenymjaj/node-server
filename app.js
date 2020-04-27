const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello bills world'));

app.listen(3000, () => {
    console.log('My Bills REST API runnning on port 3000!');
})