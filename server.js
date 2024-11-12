import express, { request } from 'express'
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


//exercise 1:
app.get('/greetings/:name', (req,res) => {
res.send(`<h1>Greetings${req.params.name}.<h1>`)
})

//exercise 2: Rolling dice 
app.get('/roll/:number', (req,res) => {
    let number = Number(req.params.number);
    res.send(`<h1> You Roll! ${Math.ceil(Math.random()*number)} on a d${number}.</h1>`)
})

// exercise 3: I want that one!
app.get('/collectibles/:index', (req,res) => {
    if (collectibles[req.params.index]) {
        let name = collectibles[req.params.name];
        let price = collectibles[req.params.price];
        res.send(`<h2>So you want the ${name} for the listed ${price}<h2>`)
    } else { 
            res.send('<h2>This item is currently out of stock. Please check back soon.</h2>')
    }
}


)








app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000')
})