const express=require('express');
const bodyParser=require('body-parser');
const sumRouter=require('./routers/plus');

const app=express();
app.use(bodyParser.urlencoded({extended:true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/plus', sumRouter);


const port =process.env.PORT || 3003;
console.log(`Sever is listening on port ${port}`);
app.listen(port)
