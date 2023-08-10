const express = require('express');
const app = express();
const pets = require('./pets')

let arrayNames = [];

//Just a title for the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//Loop through pets array and make a new array just containing names
app.get('/pets', (req, res) => {    
    const mapPets = () => {
        for(let i = 0; i < pets.length; i++){
            arrayNames.push(pets[i].name)
        }
    }
    mapPets()
    res.send(arrayNames.join(', '))
})

//If user navigates straight to owner display first pet name
app.get('/pets/owner', (req, res) => {

  const getOwnersPets = () => {
    for(let i = 0; i < pets.length; i++){
        if(req.query.ownerName === pets[i].owner){
            res.send(`Hello: ${pets[i].name}`)
        }
    }
  }
  getOwnersPets()
})

//If user types in a pet name welcome the pet
app.get('/pets/:name', (req, res) => {
        if(arrayNames.includes(req.params.name)){
            res.send(`Welcome ${req.params.name}`)
            //If user first types in a name then navigates to owner use this function to display pet name
        } else if(req.params.name.includes('owner')){

                const getOwnersPets = () => {
                  for(let i = 0; i < pets.length; i++){
                      if(req.query.ownerName === pets[i].owner){
                          res.send(`Hello: ${pets[i].name}`)
                      }
                  }
                }
                getOwnersPets()
        } else (
            res.send("No pet by that name")
        )
})

const PORT = 8000;
app.listen(PORT)