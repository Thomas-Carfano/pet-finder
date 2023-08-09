const express = require('express');
const app = express();
const pets = require('./pets')

let arrayNames = [];
let arrayOwners = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/pets', (req, res) => {    
    const mapPets = () => {
        for(let i = 0; i < pets.length; i++){
            arrayNames.push(pets[i].name)
        }
    }
    mapPets()
    res.send(arrayNames.join(', '))
})

app.get('/pets/:name', (req, res) => {
        if(arrayNames.includes(req.params.name)){
            res.send(`Welcome ${req.params.name}`)
        } else {
            res.send("No pet by that name")
        }
})

// app.get('/pets/owner', (req, res) => {

//     const userName = req.query.owner
//     res.json({
//         name
//     })
//     for(let i = 0; i < pets.length; i++){
//         arrayOwners.push(pets[i].owner)
//     }
    
//     if(arrayOwners.includes(req.query.owner)){
//         res.send(`Welcome ${req.query.owner}`)
//     } else {
//         res.send("No Owner by that name")
//     }
// })

const PORT = 8000;
app.listen(PORT)