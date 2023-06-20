const express = require('express')
const app = express()
const PORT = 8000

const spiceGirls = {
    'posh spice':{
        'birthName':'Victoria Caroline Beckham',
        'birthLocation': 'Harlow, United Kingdom', 
        'age': 49,
        'birthDate': 'April 17, 1974'
    },
    'ginger spice':{
        'birthName':'Geraldine Estelle Horner',
        'birthLocation': 'Watford, United Kingdom', 
        'age': 50,
        'birthDate': 'August 6, 1972'
    },
    'sporty spice':{
        'birthName':'Melanie Jayne Chisholm',
        'birthLocation': 'Whiston, United Kingdom', 
        'age': 49,
        'birthDate': 'January 12, 1974'
    },
    'scary spice':{
        'birthName':'Melanie Janine Brown MBE',
        'birthLocation': 'Hyde Park, Leeds, United Kingdom', 
        'age': 48,
        'birthDate': 'May 29, 1975'
    },
    'baby spice':{
        'birthName':'Emma Lee Bunton',
        'birthLocation': 'Finchley, London, United Kingdom', 
        'age': 47,
        'birthDate': 'January 21, 1976'
    },
    'unknown':{
        'birthName':'unknown',
        'birthLocation': 'unknown', 
        'age': 0,
        'birthDate': 'unknown'
    }
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const spiceName = request.params.name.toLowerCase()
    if ( spiceGirls[spiceName]){
      response.json(spiceGirls[spiceName])
    }else{
        response.json(spiceGirls['unknown'])
    }
})

app.listen(PORT,()=>{
    console.log(`The server is now running on port ${PORT}! Betta GO Catch It`)
})

