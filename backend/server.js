const express = require('express')
const cors = require('cors')

const api = express()

api.use(cors())
api.use(express.json())

api.get('/', (request, response) => {
    response.status(200).json([{
        "nome": "PC Gamer",
        "preco": 6000,
        "categoria": "Eletrônicos"
    },
    {
        "nome": "Geladeira 6 portas",
        "preco": 8000,
        "categoria": "Eletrônicos"
    },
    {
        "nome": "Celular Gamer!",
        "preco": 4500,
        "categoria": "Eletrônicos"
    },
    {
        "nome": "Feijão com farinha",
        "preco": 150,
        "categoria": "Alimentos"
    },
    {
        "nome": "GT-R R32",
        "preco": 350000,
        "categoria": "Máquinas"
    }]

)
})

api.listen(3000, () => {
    console.log("Servidor rodando na porta 3000! Acesse a Port!")
})