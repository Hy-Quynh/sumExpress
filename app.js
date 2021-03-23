const express=require('express');
const bodyParser=require('body-parser');
const sumRouter=require('./routers/sum');

const app=express();
app.use(bodyParser.urlencoded({extended:true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('form');
})

app.post('/', function (req, res) {
    const number1=Number(req.body.number1);
    const number2=Number(req.body.number2);
    const result=number1 + number2;
    res.render('./result',{number1, number2, result});
})

const port =process.env.PORT || 3000;
console.log(`Sever is listening on port ${port}`);
app.listen(port)
