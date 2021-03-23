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


const port =process.env.PORT || 3000;
console.log(`Sever is listening on port ${port}`);
app.listen(port)
