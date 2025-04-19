const express =  require('express');

const app = express();

app.use(express.json());


app.get('/', (req,res)=>{
    res.send("hello server is running");
});

app.get('/hello', (req,res)=>{
    res.send("hello is helling");
})

app.listen(3000, ()=>{
    console.log("server is running on localhost:3000");
});