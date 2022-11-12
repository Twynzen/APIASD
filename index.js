const express = require('express');
const app = express();

app.use(express.hson());

const mutants = [
    { id: 1, name: 'Spiderman', age: '20', Vehicle: 'Urban bike', isAlive: true, insidePrision: false },
    { id: 2, name: 'Batman', age: '40', Vehicle: 'Advanced military car', isAlive: true, insidePrision: false },
    { id: 3, name: 'Punisher', age: '42', Vehicle: 'Van', isAlive: true, insidePrision: false },
];

app.get('/', (req, res) => {
    res.send('API DE MUTANTES')
});

app.get('/api/mutants:id', (req, res) => {
    const mutant = mutants.find(everyMutant => everyMutant.id === parseInt(req, params.id));
    res.send('API DE MUTANTES');
    if (!mutant) {
        return res.status(404).send('Estudiante no encontrado');
    } else {
        res.send(mutant);
    }
});