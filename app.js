const express = require('express');

const app = express();

app.get('/', (req,res) => {     //запрос и ответ
    console.log('Это колбек для app.get("/")');
    console.log(req.url);
    res.send('<h1> Привет это /</h1>');
});

app.get('/about', (req,res) => {
    console.log('Это колбек для app.get("/about")');
    console.log(req.url);
    res.send('<h1> Привет это /about</h1>');
})

app.listen(4444, () => {
    console.log(`Application server is running on port ${4444}`);
});
