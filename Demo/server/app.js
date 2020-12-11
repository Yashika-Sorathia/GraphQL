const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb+srv://Raj:raj1234@demo1-hjgya.mongodb.net/Demo1?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(()=>{
    console.log("Connected to Database!")
})
.catch((erro)=>{
    console.log("Connection Failed!, error")
})
// mongoose.connection.once('open', ()=>{
//     console.log('Connected to Database!')
// })

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(8080, ()=>{
    console.log("Server listening on port 8080...!!");
});