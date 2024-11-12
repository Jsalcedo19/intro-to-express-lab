import express, { request } from 'express'
const app = express()

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


//exercise 1: be polite, greet user
app.get('/greetings/:username', (req,res) => {
res.send(`<h1>Greetings${req.params.username}.<h1>`)
})

//exercise 2: Rolling dice 
app.get('/roll/:number', (req,res) => {
    let number = Number(req.params.number);
    res.send(`<h1> You Roll! ${Math.ceil(Math.random()*number)} on a d${number}.</h1>`)
})

// exercise 3: I want that one!
app.get('/collectibles/:index', (req,res) => {
    if (collectibles[req.params.index]) {
        let name = collectibles[req.params.index].name;
        let price = collectibles[req.params.index].price;
        res.send(`<h2>So you want the ${name} for the listed ${price}<h2>`)
    } else { 
            res.send('<h2>This item is currently out of stock. Please check back soon.</h2>')
    }
});

//exercise 4: filter shoes by query parameters

app.get('/shoes', (req, res) => {
const {minPrice,maxPrice,type} = req.query;
    let filtershoes = shoes;
if (type){
    filtershoes = filtershoes.filter((shoes) => shoes.type === type);
}
if (minPrice) {
    filtershoes = filtershoes.filter((shoes) => shoe.price >= minPrice);
}
if (maxPrice) {
    filtershoes = filtershoes.filter((shoe) => shoe.price <= maxPrice);
}
    res.send(filtershoes);

});




app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000')
})