import express from 'express'
const app = express()
//exercise 1:
app.get('/greetings/:name', (req,res) => {
res.send(`<h1>Greetings${req.params.name}.<h1>`)
})












app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000')
})