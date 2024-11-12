import express, { request } from 'express'
const app = express()
//exercise 1:
app.get('/greetings/:name', (req,res) => {
res.send(`<h1>Greetings${req.params.name}.<h1>`)
})

//exercise 2:
app.get('/roll/:number', (req,res) => {
    let number = Number(req.params.number);
    res.send(`<h1> You Roll! ${Math.ceil(Math.random()*number)} on a d${number}.</h1>`)
})









app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000')
})