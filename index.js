const express = require('express');
const app = express();

app.use(express.json());

const mutants = [
    { id: 1, name: 'Spiderman', age: '20', Vehicle: 'Urban bike', isAlive: true, insidePrision: false },
    { id: 2, name: 'Batman', age: '40', Vehicle: 'Advanced military car', isAlive: true, insidePrision: false },
    { id: 3, name: 'Punisher', age: '42', Vehicle: 'Van', isAlive: true, insidePrision: false },
];

app.get('/', (req, res) => {
    res.send('API DE MUTANTES')
});
app.get('/api/mutants', (req, res) => {
    res.send(mutants)
});

app.get('/api/mutants/:id', (req, res) => {
    const mutant = mutants.find(everyMutant => everyMutant.id === parseInt(req.params.id));
    if (!mutant) {
        return res.status(404).send('Mutante no encontrado');
    } else {
        res.send(mutant);
    }
});

app.post('api/mutants', (req, res) => {
    const mutant = {
        id: mutants.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        vehicle: (req.body.vehicle),
        isAlive: req.body.isAlive,
        insidePrision: req.body.insidePrision
    }
    mutants.push(mutant);
    res.send(mutant);
});

app.delete('api/mutants/:id', (req, res) => {
    const mutant = mutants.find(everyMutant => everyMutant.id === parseInt(req.params.id));
    if (!mutant) {
        return res.status(404).send('Mutante no encontrado')
    }
});

const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listen port ${port}...`));